import { defineStore } from "pinia";
import { carterosePdf, generatePDF } from "../data/pdf/BaseModel.js";
import FirebaseService from "../data/config/firebaseConfig.js";
import { auth, db } from "@/firebase";
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
    db: db,
    show: false,
    show2: false,
  }),

  getters: {
    firebase: new FirebaseService(),
  },

  actions: {
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
            : undefined;

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
  },
});
