const mongoose = require("mongoose");

const connectDB  = async() => {
    try {
        await mongoose.connect('mongodb+srv://arwamostafa474:g5YyAW96aoF0X0jo@cluster0.itmzfwh.mongodb.net/coursesDB?retryWrites=true&w=majority&appName=Cluster0')
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('DB Connection Error:', err);
    }
}
module.exports = connectDB;