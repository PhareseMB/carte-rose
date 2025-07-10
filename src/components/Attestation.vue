<template>
  <div>
    <button @click="generatePDF">Générer et Imprimer PDF</button>
  </div>
</template>

<script>
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

export default {
  methods: {
    generatePDF() {
      const docDefinition = {
        pageSize: "A3", // Taille de la page A3
        pageMargins: [100, 265, 40, 40], // Marges: gauche, haut, droite, bas
        pageOrientation: "landscape", // Orientation paysage
        content: [
          {
            columns: [
              // Première colonne
              {
                width: "33%",
                stack: [
                  {
                    text: "AGENTS MANDATAIRES",
                    bold: true,
                    alignment: "center",
                    margin: [160, 60, 0, 20],
                  },
                  {
                    text: "GB4000212302469",
                    alignment: "left",
                    margin: [30, 0, 0, 20],
                  },
                  {
                    columns: [
                      { text: "OUI", alignment: "center" },
                      { text: "OUI", alignment: "center" },
                      { text: "NON", alignment: "center" },
                    ],
                    columnGap: 45,
                    margin: [30, 5, 0, 20],
                  },
                  {
                    columns: [
                      { text: "NON", alignment: "center" },
                      { text: "NON", alignment: "center" },
                      { text: "NON", alignment: "center" },
                    ],
                    columnGap: 45,
                    margin: [30, 10, 0, 20],
                  },
                  {
                    columns: [
                      { text: "02/10/2024", alignment: "left" },
                      { text: "01/10/2025", alignment: "left" },
                    ],
                    columnGap: 35,
                    margin: [30, 5, 0, 0],
                  },
                ],
              },
              // Deuxième colonne
              {
                width: "34%",
                stack: [
                  {
                    text: "MOUSSOUNDA MARIE GABRIELLE",
                    bold: true,
                    alignment: "center",
                    margin: [0, 15, 10, 20],
                  },
                  {
                    text: "BP POG",
                    alignment: "center",
                    margin: [0, 8, 135, 20],
                  },
                  {
                    columns: [
                      { text: "B", alignment: "center" },
                      { text: "LJ90GLL", alignment: "center" },
                      { text: "TOYOTA", alignment: "center" },
                      { text: "FT852AA", alignment: "center" },
                    ],
                    columnGap: 70,
                    margin: [60, 120, 70, 0],
                  },
                ],
              },
              // Troisième colonne
              {
                width: "33%",
                stack: [
                  {
                    text: "FT852AA",
                    alignment: "left",
                    margin: [210, 50, 0, 0],
                  },
                  {
                    columns: [
                      { text: "02/10/2024", alignment: "left" },
                      { text: "01/10/2025", alignment: "left" },
                    ],
                    columnGap: 35,
                    margin: [230, 35, 0, 20],
                  },
                  {
                    text: "GB4000212302469",
                    alignment: "left",
                    margin: [215, 5, 0, 0],
                  },
                ],
              },
            ],
          },
        ],
      };

      pdfMake.createPdf(docDefinition).open();
    },
  },
};
</script>
