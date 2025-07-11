import * as pdfMake from "pdfmake/build/pdfmake";
pdfMake.fonts = {
  Roboto: {
    normal:
      "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf",
    bold: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf",
    italics:
      "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf",
    bolditalics:
      "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf",
  },
};

export const carterosePdf = async (e) => {
  const docDefinition = {
    pageSize: "A4",
    pageOrientation: "landscape",
    pageMargins: [0, 0, 0, 0],
    defaultStyle: {
      fontSize: 8,
    },
    content: [
      // Bloc 1
      { text: e.nom_client, absolutePosition: { x: 91, y: 217 } },
      { text: e.plaque, absolutePosition: { x: 138, y: 240 } },
      { text: e.marque, absolutePosition: { x: 135, y: 250 } },
      { text: "NSIA assurances", absolutePosition: { x: 128, y: 265 } },
      { text: e.bureau.label, absolutePosition: { x: 91, y: 316 } },
      { text: e.numero_police, absolutePosition: { x: 110, y: 327 } },
      { text: e.date_debut, absolutePosition: { x: 65, y: 351 } },
      { text: e.date_fin, absolutePosition: { x: 125, y: 349 } },
      { text: e.categorie.name, absolutePosition: { x: 88, y: 376 } },

      // Bloc 2
      { text: e.nom_client, absolutePosition: { x: 274, y: 217 } },
      { text: e.plaque, absolutePosition: { x: 313, y: 240 } },
      { text: e.marque, absolutePosition: { x: 308, y: 250 } },
      { text: "NSIA assurances", absolutePosition: { x: 301, y: 265 } },
      { text: e.bureau.label, absolutePosition: { x: 274, y: 316 } },
      { text: e.numero_police, absolutePosition: { x: 289, y: 325 } },
      { text: e.date_debut, absolutePosition: { x: 240, y: 351 } },
      { text: e.date_fin, absolutePosition: { x: 319, y: 349 } },
      { text: e.categorie.name, absolutePosition: { x: 260, y: 376 } },

      // Bloc 3
      { text: e.nom_client, absolutePosition: { x: 451, y: 238 } },
      { text: e.addresse, absolutePosition: { x: 456, y: 269 } },
      { text: e.plaque, absolutePosition: { x: 481, y: 277 } },
      { text: "NSIA Assurances", absolutePosition: { x: 438, y: 302 } },
      { text: "", absolutePosition: { x: 433, y: 310 } },
      { text: e.categorie.name, absolutePosition: { x: 441, y: 376 } },

      // Bloc 4
      { text: e.date_debut, absolutePosition: { x: 608, y: 214 } },
      { text: e.date_fin, absolutePosition: { x: 688, y: 214 } },
      { text: e.numero_police, absolutePosition: { x: 679, y: 230 } },
      { text: e.date_debut, absolutePosition: { x: 648, y: 239 } },
      { text: e.date_fin, absolutePosition: { x: 715, y: 239 } },
      { text: e.marque, absolutePosition: { x: 612, y: 263 } },
      { text: "", absolutePosition: { x: 631, y: 290 } },
      { text: e.bureau.label, absolutePosition: { x: 621, y: 316 } },
    ],
    styles: {
      anotherStyle: {
        alignment: "left",
        margin: [0, 0, 0, 5],
      },
      anotherStyle2: {
        alignment: "center",
        margin: [0, 50, 0, 5],
      },
      anotherStyle3: {
        alignment: "right",
        margin: [0, -30, 0, 5],
      },
    },
  };

  pdfMake.createPdf(docDefinition).open();
};

/**
 *
 * @param {Object} data
 */
export const generatePDF = (data) => {
  const { garanties } = data;
  let newDataLabel = [];
  let newData = [];
  garanties.forEach((e) => {
    newDataLabel.push(e.label);
  });

  const caches = [
    { id: 1, label: "R.C", disabled: true, value: true },
    { id: 2, label: "D.R", disabled: true, value: true },
    {
      id: 3,
      label: newDataLabel.filter((e) => e === "Vol").length >= 1 ? "Vol" : "",
      disabled: false,
      value: false,
    },
    {
      id: 4,
      label:
        newDataLabel.filter((e) => e === "Incendie").length >= 1
          ? "Incendie"
          : "",
      disabled: false,
      value: false,
    },
    {
      id: 5,
      label: newDataLabel.filter((e) => e === "DOM").length >= 1 ? "DOM" : "",
      disabled: false,
      value: false,
    },
    {
      id: 6,
      label: newDataLabel.filter((e) => e === "B.G").length >= 1 ? "B.G" : "",
      disabled: false,
      value: false,
    },
  ];

  newDataLabel.forEach((e) => {
    Object.entries(caches).forEach((key, valeur) => {
      if (e == key[1].label) {
        newData.push({
          id: key[1].id,
          label: key[1].label,
          disabled: true,
          value: true,
        });
      } else {
        newData.push({
          id: key[1].id,
          label: "",
          disabled: true,
          value: true,
        });
      }
    });
  });

  // Object.entries(caches).forEach((key, valeur) => {
  // console.log(key[1]);
  // newDataLabel.forEach((e) => {
  //   if (e == key[1].label) {
  //     newData.push({
  //       id: key[1].id,
  //       label: key[1].label,
  //       disabled: true,
  //       value: true,
  //     });
  //   } else {
  //     newData.push({
  //       id: key[1].id,
  //       label: "",
  //       disabled: true,
  //       value: true,
  //     });
  //   }
  // });
  // });
  // console.log(newData);

  data.garanties = caches;
  const docDefinition = {
    pageSize: "A3",
    pageMargins: [100, 265, 40, 40],
    pageOrientation: "landscape",
    content: [
      {
        columns: [
          {
            width: "33%",
            stack: [
              {
                text: data.bureau.label,
                bold: true,
                alignment: "center",
                margin: [160, 60, 0, 20],
              },
              {
                text: data.numero_police,
                alignment: "left",
                margin: [30, 0, 0, 20],
                fontSize: 14,
              },
              {
                columns: [
                  { text: "Oui", alignment: "center" },
                  { text: "Oui", alignment: "center" },
                  {
                    text: data.garanties[2].label === "Vol" ? "Oui" : "Non",
                    alignment: "center",
                  },
                ],
                columnGap: 45,
                margin: [30, 5, 0, 20],
                fontSize: 14,
              },
              {
                columns: [
                  {
                    text:
                      data.garanties[3].label === "Incendie" ? "Oui" : "Non",
                    alignment: "center",
                  },
                  {
                    text: data.garanties[4].label === "DOM" ? "Oui" : "Non",
                    alignment: "center",
                  },
                  {
                    text: data.garanties[5].label === "B.G" ? "Oui" : "Non",
                    alignment: "center",
                  },
                ],
                columnGap: 45,
                margin: [30, 10, 0, 20],
                fontSize: 14,
              },
              {
                columns: [
                  { text: data.date_debut, alignment: "left" },
                  { text: data.date_fin, alignment: "left" },
                ],
                columnGap: 35,
                margin: [30, 5, 0, 0],
              },
            ],
          },
          {
            width: "34%",
            stack: [
              {
                text: data.nom_client,
                bold: true,
                alignment: "center",
                margin: [0, 15, 10, 20],
                fontSize: 16,
              },
              {
                text: data.adresse,
                alignment: "center",
                margin: [0, 8, 135, 20],
              },
              {
                columns: [
                  { text: data.genre_vehicule, alignment: "center" },
                  { text: data.type, alignment: "center" },
                  { text: data.marque, alignment: "center" },
                  { text: data.plaque, alignment: "center", fontSize: 14 },
                ],
                columnGap: 70,
                margin: [40, 120, 70, 0],
              },
            ],
          },
          // Troisième colonne
          {
            width: "33%",
            stack: [
              {
                text: data.plaque,
                alignment: "left",
                margin: [210, 50, 0, 0],
                fontSize: 16,
              },
              {
                columns: [
                  { text: data.date_debut, alignment: "left" },
                  { text: data.date_fin, alignment: "left" },
                ],
                columnGap: 35,
                margin: [220, 35, 0, 20],
              },
              {
                text: data.numero_police,
                alignment: "left",
                margin: [215, 5, 0, 0],
              },
            ],
          },
        ],
      },
    ],
  };

  console.log("doc", docDefinition.content);

  pdfMake.createPdf(docDefinition).open();
};
