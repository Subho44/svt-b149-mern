let products = [];

class Product {
    constructor(name,price) {
        this.id = products.length+1;
        this.name = name;
        this.price = price;
    }
}
module.exports = {Product,products}