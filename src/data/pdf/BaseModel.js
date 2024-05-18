import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

/**
 *
 * @param {Object} e
 */
export const attestationPdf = async (e) => {
  const docDefinition = {
    pageSize: "A4",
    pageOrientation: "landscape",
    pageMargins: [90, 150, 20, 50],
    content: [
      {
        columns: [

          {
            // auto-sized columns have their widths based on their content
            width: 'auto',
            
            stack: [
              {
                    text: e["nomAdAssure"],
                    absolutePosition: { x: 118, y: 224 },
                  },

                  {
                    text: e["immatriculation"],
                    absolutePosition: { x: 158, y: 246 },
                  },

                  {
                    text: e["marquetype"],
                    absolutePosition: { x: 158, y: 259 },
                  },

                  {
                    text: e["assureur"],
                    absolutePosition: { x: 146, y: 272 },
                  },
                  {
                    text: e["BureauEmetteur"],
                    absolutePosition: { x: 163, y: 302 },
                  },
                  {
                    text: e["police"],
                    absolutePosition: { x: 141, y: 325 },
                  },
                  {
                    text: e["dateDebut"],
                    absolutePosition: { x: 122, y: 349 },
                  },
                  {
                    text: e["dateFin"],
                    absolutePosition: { x: 191, y: 349 },
                  },

                  {
                    text: e["usagecat"],
                    absolutePosition: { x: 107, y: 375 },
                  },
            ]

           
          

          }, 
          
          {
            // auto-sized columns have their widths based on their content
            width: 'auto',
            
            stack: [
              {
                    text: e["nomAdAssure"],
                    absolutePosition: { x: 294, y: 226 },
                  },

                  {
                    text: e["immatriculation"],
                    absolutePosition: { x: 327, y: 247 },
                  },

                  {
                    text: e["marquetype"],
                    absolutePosition: { x: 322, y: 259 },
                  },

                  {
                    text: e["assureur"],
                    absolutePosition: { x: 315, y: 272 },
                  },
                  {
                    text: e["BureauEmetteur"],
                    absolutePosition: { x: 315, y: 303 },
                  },
                  {
                    text: e["police"],
                    absolutePosition: { x: 315, y: 329 },
                  },
                  {
                    text: e["dateDebut"],
                    absolutePosition: { x: 122, y: 349 },
                  },
                  {
                    text: e["dateFin"],
                    absolutePosition: { x: 285, y: 352 },
                  },

                  {
                    text: e["usagecat"],
                    absolutePosition: { x: 254, y: 376 },
                  },
            ]

           
          

          }, 
          
          {
            // auto-sized columns have their widths based on their content
            width: 'auto',
            
            stack: [
              {
                    text: e["nomAdAssure"],
                    absolutePosition: { x: 466, y: 252 },
                  },

                  {
                    text: e["immatriculation"],
                    absolutePosition: { x: 465, y: 273 },
                  },

                  {
                    text: e["NomAdSoCiete"],
                    absolutePosition: { x: 461, y: 287 },
                  },

                  {
                    text: e["NomAdSoCiete"],
                    absolutePosition: { x: 454, y: 311 },
                  },
                  {
                    text: e["usagecat"],
                    absolutePosition: { x: 458, y: 378 },
                  },

                  
                  
            ]

          },

          {
            // auto-sized columns have their widths based on their content
            width: 'auto',
            
            stack: [
              {
                    text: e["dateDebut"],
                    absolutePosition: { x: 612, y: 236 },
                  },

                  {
                    text: e["dateFin"],
                    absolutePosition: { x: 695, y: 234 },
                  },

                  {
                    text: e["police"],
                    absolutePosition: { x: 683, y: 246 },
                  },

                  {
                    text: e["dateDebut"],
                    absolutePosition: { x: 647, y: 258 },
                
                  },
                  {
                    text: e["dateFin"],
                    absolutePosition: { x: 718, y: 258 },
                  },

                  {
                    text: e["marquetype"],
                    absolutePosition: { x:627 , y: 281 },
                  },

                  {
                    text: e["NumChassis"],
                    absolutePosition: { x: 636, y: 307 },
                  },


                  {
                    text: e["BureauEmetteur"],
                    absolutePosition: { x: 632, y: 328 },
                  },

                  
                  
            ]

          },
          
        ],
        // optional space between columns
        columnGap: 10
      },
     //{ 
        // stack: [
        //   {
        //     text: e["omAdAssure"],
        //     absolutePosition: { x: 996.01, y: 144 },
        //   },
        //   {
        //     text: e["immatriculation"],
        //     absolutePosition: { x:1093.31, y: 423.7 }, 
        //   },
        //   {
        //     text: e["marquetype"],
        // absolutePosition: { x: 1142.46, y: 406.88 }, 
        //   },
        //   {
        //     text: e["assureur"],
        // absolutePosition: { x: 1195.63, y: 311.19 }, 
        //   },
        //   {
        //     text: e["BureauEmetteur"],
        // absolutePosition: { x: 1344, y: 429 }, 
        //   },
        //   {
        //     text: e["police"],
        // absolutePosition: { x: 311.19, y: 1442.39 }, 
        //   },
        //   {
        //     text: e["dateDebut"],
        // absolutePosition: { x: 189.21, y: 1542.69 }, 
        //   },
        //   {
        //     text: e["dateFin"],
        // absolutePosition: { x: 500.54, y: 1538.68 }, 
        //   },
        //   {
        //     text: e["usagecat"],
        //     absolutePosition: { x: 148.21, y: 1642 },
        //   },
        
        // ],
      //   columns: [
        
      //     {
      //       stack: [

      //         {
      //               text: e["omAdAssure"],
      //                absolutePosition: { x: 996.01, y: 144 },
      //             },
      //       ]
      //      },
     
      //   ]
      // },
     /////////////////////////////////////////////////////////////
      
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
