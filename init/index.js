const mongoose = require("mongoose");
const Listing = require("../models/listing");
const data = require("./data");

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
    const listings = await Listing.insertMany(data.data);
    console.log('Data save to DB');
};

initDB();