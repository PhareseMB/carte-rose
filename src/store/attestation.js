import { defineStore } from "pinia";
import { carterosePdf, generatePDF } from "../data/pdf/BaseModel.js";
import FirebaseService from "../data/config/firebaseConfig.js";
import { auth, db } from "@/firebase";
import * as XLSX from "xlsx";
import {
  doc,
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  addDoc,
  getDoc,
  setDoc,
} from "firebase/firestore";

export const useAttestationStore = defineStore("attestationStore", {
  state: () => ({
    attestation: [],
    attestionElement: {
        type_attestation: "",
        categorie: "",
        bureau: "",
    },
    db: db,
    show: false,
    show2: false,
    message: "",
    currentPage: 1,
  }),

  getters: {
    firebase: new FirebaseService(),
    getPaginateAttestation: (state) => {
      return state.attestation.slice(state.getStartIndex, state.getEndIndex);
    },
    getNumbeTable: (state) => state.attestation.length,
    getTotalPages: (state) => {
      return Math.ceil(state.attestation.length / 10);
    },
    getStartIndex: (state) => {
      return (state.currentPage - 1) * 10;
    },
    getEndIndex: (state) => {
      return Math.min(state.getStartIndex + 10, state.attestation.length);
    },
  },

  actions: {
    nextPage() {
      if (this.currentPage < this.getTotalPages) this.currentPage++;
    },

    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
    async getAttestion() {
      try {
        this.attestation = this.firebase.getAllDocuments("attesation");
      } catch (error) {}
    },
    async addAttestion(data) {
      try {
        const year = new Date().getFullYear().toString().slice(-2);
        const nextNumeroPolice = Math.floor(Math.random() * 99999);
        const numero_police =
          data.type_attestation === "1"
            ? `GB${data.bureau.code}${data.categorie.code}${year}${nextNumeroPolice}`
            : data.numero_police;

        const formatDate = (dateStr) => {
          const date = new Date(dateStr);
          return date.toLocaleDateString("fr-FR");
        };

        const newData = {
          ...data,
          date_debut: formatDate(data.date_debut),
          date_fin: formatDate(data.date_fin),
          ...(numero_police && { numero_police }),
        };

        this.attestation.push(newData);

        const docRef = await addDoc(collection(this.db, "attestations"), {
          ...newData,
          createdAt: Date.now(),
        });

        console.log("Document written with ID:", docRef.id);
      } catch (error) {
        console.error("Error adding attestation:", error);
      }
    },

    async impression(type, data) {
      try {
        let pdfBlob;
        if (type === 1) {
          pdfBlob = generatePDF(data);
          this.show = true;
        } else {
          pdfBlob = carterosePdf(data);
          this.show2 = true;
        }

        if (pdfBlob instanceof Blob) {
          const url = URL.createObjectURL(pdfBlob);
          const printWindow = window.open(url);
          if (printWindow) {
            printWindow.onload = function () {
              printWindow.focus();
              printWindow.print();
            };
          }
        }
      } catch (error) {}
    },

    formatData(docs) {
      return docs.map((item) => ({
        id: item.id,
        "Nom Client": item.nom_client ?? "",
        Adresse: item.adresse ?? "",
        "Numero Police": item.numero_police ?? "",
        Plaque: item.plaque ?? "",
        Type: item.type ?? "",
        Marque: item.marque ?? "",
        Genre: item.genre_vehicule ?? "",
        "Date de début": item.date_debut ?? "",
        "Date de fin": item.date_fin ?? "",
        "Type Attestation": item.type_attestation ? "REN" : "AFN",
        "Date d'inscription": item.createdAt / (1000 * 60 * 60 * 24) + 25569,
        Garanties: Array.isArray(item.garanties)
          ? item.garanties.map((g) => g.label).join(", ")
          : "",
        Bureau: item.bureau.label,
        Categorie: item.categorie.name,
        "Prime TTC": parseInt(item.primeTTC) ?? 0,
      }));
    },

    async exportExcelData() {
      try {
        const querySnapshot = await getDocs(collection(db, "attestations"));
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        const formattedData = this.formatData(data);

        const worksheet = XLSX.utils.json_to_sheet(formattedData);

        const columnWidths = [
          { wch: 20 },
          { wch: 30 },
          { wch: 40 },
          { wch: 20 },
          { wch: 15 },
          { wch: 15 },
          { wch: 20 },
          { wch: 15 },
          { wch: 18 },
          { wch: 18 },
          { wch: 15 },
          { wch: 18 },
          { wch: 40 },
          { wch: 20 },
          { wch: 20 },
          { wch: 30 },
        ];
        worksheet["!cols"] = columnWidths;
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Utilisateurs");
        XLSX.writeFile(workbook, "export_utilisateurs.xlsx");
        alert("✅ Exportation avec formatage réussie !");
      } catch (error) {
        console.error(error);
      }
    },

    async getElementByID(id) {
      try {
        alert(id);
        this.attestionElement = {};
      } catch (error) {
        console.error(error);
      }
    },
  },
});
