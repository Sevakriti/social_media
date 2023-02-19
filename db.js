const mongoose = require('mongoose');
const MONGODB_URI = "mongodb+srv://Aryan:123@cluster0.xcpnhwz.mongodb.net/social_media?retryWrites=true&w=majority";



// Connect to the MongoDB database
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("Database connected!"))
.catch(err=> console.log(err));


const db = mongoose.connection;

module.exports = db;






