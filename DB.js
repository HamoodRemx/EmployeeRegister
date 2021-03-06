const mongoose = require("mongoose")

const DB_connect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    console.log("Database Connected")
  } catch (error) {
    console.log("Error ", error.message)
    process.exit(1)
  }
}

module.exports = DB_connect
