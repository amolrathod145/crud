const mongoose = require("mongoose")
const db = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log("Databse connected")
  } catch (error) {
      console.log("error" + error)
      process.exit()
  }
}

module.exports = db