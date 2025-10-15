class Product {
    constructor(name, price, quantity) {
        //atributos this são os atributos da instância.
        this.name = name;
        this.price = price;
        this.quantity = quantity;

    }

    totalProduct() {
    return this.price * this.quantity;
}
    //metodos em orientação a objeto deve estar dentro da classe
    updateProduct(porcentagem){
    return this.price = this.price * (1 + porcentagem / 100);
}

    toString() {
        return `${this.name}, $${this.price.toFixed(2)}, ${this.quantity}`;
    }
}



/*variavel estruturada com mais de um atributo
este objeto tem seu valor guardado em memoria
esta variavel esta apontando para um objeto que tem este tres atributos na memoria*/
const product1 = new Product("Leptop", 500.0, 2);
const product2 = new Product("Radio", 300.0, 1);
//////////////////////////////////////////////////////////////////////////////////
console.log(product1.toString());
console.log(product2.toString());
console.log("-------------------");
console.log(product1.name);
console.log(product2.name);
console.log("-------------------");
console.log(product1.totalProduct());
console.log(product2.totalProduct());
console.log("-------------------");
console.log(product1.updateProduct(10));
console.log(product2.updateProduct(20));
console.log(product1.price.toFixed(2));
