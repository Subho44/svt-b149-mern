const http = require("http");
const arrayexamples = require("./examples/array");


const server = http.createServer((req,res)=>{
    let arr;
    let output = [];

  arrayexamples.forEach(x => {
    eval(x.code);
    output.push({
        question:x.q,
        example:x.code,
        result:arr
    });
  });

    res.writeHead(200,{"Content-Type":"application/json"});
    res.end(JSON.stringify(output));

});
server.listen(5600,()=>{
    console.log("server is running port 5600");
})