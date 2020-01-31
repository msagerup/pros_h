const fs = require('fs')
const path = require('path');


//temp read files // REPLACE WITH GET DATA FROM DB
// Get Menu from Hotel
const hotelData = JSON.parse(fs.readFileSync(path.resolve(`__dirname`, '../dataSet/hotel.json')));
// console.log(hotelData.toString())
// Get Person info and Code
const personAndCode = JSON.parse(fs.readFileSync(path.resolve(`__dirname`, '../dataSet/personCode.json')));
// console.log(PersonAndCode.toString())



const checkCode = (code) => {
   let returnAnswer;
   // loop trough to find code and info about person
   for (let i = 0; i < personAndCode.length; i++) {
      let data = personAndCode[i];
      if (data.code === code) {
         // After matched code, get id from what Hotel it belongs to
       
         //Loop trough HotelSet to get hotel matched to code
         console.log('dataID', data.hotelID)
         for (let i = 0; i < hotelData.length; i++) {
            let hotel = hotelData[i]
            //Match DataID from personAndCode with hotelData
            if (data.hotelID === hotel.hotelID) {
               returnAnswer = {
                  Hotel: hotel,
                  Person: data
               }
            }
         }
      } else {
         returnAnswer = {
            error: 'Det virker som koden ikke er riktig.'
         }
      }



   }
   return returnAnswer;
}


module.exports = {
   checkCode

}
