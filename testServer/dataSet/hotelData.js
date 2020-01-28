const hotels = [
  {
    id: '1',
    name: 'Grand Hotel',
    menu: [{
      drinks: [{
        alcoholic: [
          {
            brand: "Carlsberg 0.33 ",
            type: "beer",
            price: "45",
            imgUrl: ""
          },
          {
            brand: "Borg 0.33",
            type: "beer",
            pris: "48",
            imgUrl: ""
          },
        ],
        nonAlcoholic: [{
          brand: "Coca Cola 0.5 ",
          price: "25",
          imgUrl: ""
        },
        {
          brand: "Coca Cola 1 ",
          price: "45",
          imgUrl: ""
        },
        {
          brand: "Coca Cola 2.5 ",
          price: "85",
          imgUrl: ""
        }]
      }]
    }]
  },
  {
    id: '2',
    name: 'Oslo Plaza',
    menu: [{
      drinks: [{
        alcoholic: [
          {
            brand: "Carlsberg 0.33 ",
            type: "beer",
            price: "55",
            imgUrl: ""
          },
          {
            brand: "Borg 0.33",
            type: "beer",
            pris: "65",
            imgUrl: ""
          },
        ],
        nonAlcoholic: [{
          brand: "Coca Cola 0.5 ",
          price: "20",
          imgUrl: ""
        },
        {
          brand: "Coca Cola 1 ",
          price: "35",
          imgUrl: ""
        },
        {
          brand: "Coca Cola 2.5 ",
          price: "75",
          imgUrl: ""
        }]
      }]
    }]
  }
];


const codes = [
  {
    id: '123',
    code: '123abc',
    reference: 'Magnus Sagerup - Room 23',
    hotel: '1',
    expire: '11-03-2020'
  },
  {
    id: '2',
    code: '8765ab345678',
    reference: 'Sujan Subas - Room 64',
    hotel: '2',
    expire: '11-03-2020'
  },
]

module.exports = {
  codes,
  hotels
}



// {
//   "code": {
//     "1234": {
//       "name": "Grand Hotel",
//         "phoneNumber": 69548754,
//           "hasMenu": {
//         "drinksNonAlco": [
//           {
//             "brand": "Coca Cola 0.5 ",
//             "price": "25",
//             "imgUrl": ""
//           },
//           {
//             "brand": "Coca Cola 1 ",
//             "price": "45",
//             "imgUrl": ""
//           },
//           {
//             "brand": "Coca Cola 2.5 ",
//             "price": "85",
//             "imgUrl": ""
//           }
//         ]
//       },
//       "drinksAlco": [
//         {
//           "brand": "Carlsberg 0.33 ",
//           "type": "beer",
//           "price": "45",
//           "imgUrl": ""
//         },
//         {
//           "brand": "Borg 0.33",
//           "type": "beer",
//           "pris": "48",
//           "imgUrl": ""
//         },
//         {
//           "brand": "Corona 0.33",
//           "type": "beer",
//           "price": "55",
//           "imgUrl": ""
//         },
//         {
//           "brand": " Italian Chianti 1l",
//           "type": "red wine",
//           "price": "245",
//           "imgUrl": ""
//         },

//       ]
//     },
//     "2234": {
//       "name": "Choice hotels",
//         "phoneNumber": 69858745
//     }
//   }
// }
