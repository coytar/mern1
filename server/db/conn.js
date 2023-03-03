const mongoose = require('mongoose');
const db = "mongodb://localhost:27017/employees"

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(db, {
      useNewUrlParser: true,
      
    });

    console.log('MongoDB is connected.');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;