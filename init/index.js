const mongoose = require("mongoose");
const Listing = require("../models/listing");
const initData = require("./data");
const newData = require("./newData");

async function main() {
  await mongoose.connect("mongodb://localhost:27017/NestInn");
}

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });


const initDB = async() => {
    await Listing.deleteMany({});
    newData.data = newData.data.map((obj) => ({...obj, owner: "68b6f115d5057f9aafbb1680"})); 
    const listings = await Listing.insertMany(newData.data);
    console.log('Data save to DB');
};

initDB();