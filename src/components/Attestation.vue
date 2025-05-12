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
      // const docDefinition = {
      //   pageSize: "A3",
      //   pageOrientation: "landscape",
      //   content: [
      //     {
      //       canvas: [
      //     {
      //       type: 'rect',
      //       x: 50,
      //       y: 30,
      //       w: 800,
      //       h: 150,
      //       lineWidth: 2,
      //       lineColor: 'black'
      //     }
      //       ]
      //     },
      //     { text: 'MOUSSOUNDA MARIE GABRIELLE', bold: true, absolutePosition: { x: 400, y: 50 } },
      //     { text: 'BP POG', absolutePosition: { x: 400, y: 70 } },
      //     { text: 'FT852AA', absolutePosition: { x: 700, y: 50 } },
      //     { text: '02/20/2024', absolutePosition: { x: 700, y: 70 } },
      //     { text: '01/20/2025', absolutePosition: { x: 800, y: 70 } },
      //     { text: 'GB40002012302469', absolutePosition: { x: 700, y: 90 } },
      //     { text: 'AGENTS MANDATAIRES', bold: true, absolutePosition: { x: 200, y: 50 } },
      //     { text: 'GB40002012302469', absolutePosition: { x: 200, y: 70 } },
      //     { text: 'OUI', absolutePosition: { x: 200, y: 200 } },
      //     { text: 'OUI', absolutePosition: { x: 200, y: 200 } },
      //     { text: 'NON', absolutePosition: { x: 300, y: 200 } },
      //     { text: 'NON', absolutePosition: { x: 200, y: 120 } },
      //     { text: 'NON', absolutePosition: { x: 200, y: 120 } },
      //     { text: 'NON', absolutePosition: { x: 300, y: 120 } },
      //     { text: '02/20/2024', absolutePosition: { x: 200, y: 140 } },
      //     { text: '01/20/2025', absolutePosition: { x: 200, y: 140 } },
      //     { text: 'B', absolutePosition: { x: 400, y: 140 } },
      //     { text: 'LJ 90 CLL', absolutePosition: { x: 450, y: 140 } },
      //     { text: 'TOYOTA', absolutePosition: { x: 550, y: 140 } },
      //     { text: 'FT852AA', absolutePosition: { x: 700, y: 140 } },
      // ]
      // };
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
