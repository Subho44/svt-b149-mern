const KYC = require('../models/KYC');

//add kyc
exports.addKYC = async(req,res)=> {
    try {
        const kyc = new KYC(req.body);
        await kyc.save();
        res.status(201).json({message:"KYC ADDED",kyc});
    } catch (err) {
         res.status(401).json({error:err.message});
    }
}
//view all kyc
exports.getallKYC = async(req,res)=> {
    try {
        const data = await KYC.find();
        res.status(200).json({message:"KYC view",data});
    } catch (err) {
         res.status(400).json({error:err.message});
    }
}