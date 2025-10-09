class Product {
    constructor(name, price, quantity) {
        //atributos this são os atributos da instância.
        this.name = name;
        this.price = price;
        this.quantity = quantity;

    }
    toString() {
        return `${this.name}, $${this.price.toFixed(2)}, ${this.quantity}`;
    }
}

function totalProduct(product) {
    return product.price * product.quantity;
}

function updateProduct(product, porcentagem){
    return product.price = product.price * (1 + porcentagem / 100);
}

/*variavel estruturada com mais de um atributo
este objeto tem seu valor guardado em memoria
esta variavel esta apontando para um objeto que tem este tres atributos na memoria*/
const product1 = new Product("Leptop", 1000.0, 1);
const product2 = new Product("Radio", 300.0, 1);
//////////////////////////////////////////////////////////////////////////////////
console.log(product1.toString());
console.log(product2.toString());
console.log("-------------------");
console.log(product1.name);
console.log(product2.name);
console.log("-------------------");
console.log(totalProduct(product1));
console.log(totalProduct(product2));
console.log("-------------------");
updateProduct(product1, 10)
console.log(product1.price.toFixed(2));
