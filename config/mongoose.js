const mongoose = require("mongoose");

main().catch((err) => console.log(err));
async function main() {
  // await mongoose.connect(`mongodb://127.0.0.1/habbit_tracker`);
  await mongoose.connect(`mongodb+srv://imdivyachoudhary:divya123@cluster0.lg0g4rt.mongodb.net/habbit_tracker?retryWrites=true&w=majority`);
  console.log(`Connected to DB : habbit_tracker`);
}

const db = mongoose.connection;

module.exports = db;

// db.on("error", console.error.bind(console, "Error connecting to db"));

// db.once("open", function () {
//   console.log("Successfully connected to db");
// });
