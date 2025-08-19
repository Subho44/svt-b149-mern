const express = require('express');
const app = express();
const port = 6800;

app.use(express.json());
let jobs = [];

//job insert
app.post("/jobs",(req,res)=>{
    const {title,company} = req.body;
    const newjob = {
        id:jobs.length +1,
        title,
        company,
    };
    jobs.push(newjob);
    res.json({message:"job add sucessfully",job:newjob});
});
//job view
app.get("/jobs",(req,res)=>{
    res.json(jobs);
});
app.listen(port,()=>{
    console.log("server is running port 6800");
})
