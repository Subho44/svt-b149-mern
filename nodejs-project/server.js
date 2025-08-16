const http = require('http');
const fs = require("fs");
const path = require("path");
const querystring = require('querystring');

const {Product,products} = require("./models/productModel");

const server = http.createServer((req,res)=>{

    if(req.url === "/" && req.method ==="GET") {
        //static file access in server
        const filepath = path.join(__dirname,"views","index.html");
        fs.readFile(filepath,(err,data)=>{
            if(err) {
                res.writeHead(400);
                res.end("error page")
            } else {
                res.writeHead(200,{"Content-Type":"text/html"});
                res.end(data);
            }
        });
    }

  else if(req.url === "/add" && req.method ==="POST") {
        //PRODUCT INSERT
        let body = "";
        req.on("data", chunk => {
            body += chunk.toString();
        });
        req.on("end",()=>{
            const parsedata = querystring.parse(body);
            const {name,price} = parsedata;

            if(name && price) {
                const newproduct = new Product(name,price);
                products.push(newproduct);
            }
            res.writeHead(200,{Location:"/products"});
            res.end();
        });
    }

    else if(req.url === "/products" && req.method ==="GET") {
        //All product show
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<h1>Product List</h1> <ul>");
        products.forEach(x=>{
            res.write(`<li>${x.id}. ${x.name} - $${x.price}</li>`);
        });
        res.write("</ul><br><a href='/'>Add More</a>");
    }


});
const port = 6500;
server.listen(port,()=>{
    console.log("server is running port 6500");
});