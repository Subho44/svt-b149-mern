const express = require("express");
const dotenv = require("dotenv");
const connectdb = require("./config/db");
const kycRoutes = require("./routes/kycRoutes");
const authRoutes = require("./routes/authRoutes");
const cors = require("cors");
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
connectdb();
app.use('/api/kyc',kycRoutes);
app.use('/api/auth',authRoutes);
app.get('/',(req,res)=>{
    res.send("Api is working");
});
const PORT = process.env.PORT || 6500;
app.listen(PORT,()=>{
    console.log("server is running 6500");
});