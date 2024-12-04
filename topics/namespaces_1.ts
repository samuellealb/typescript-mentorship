namespace App {
  export class Product {
    constructor(public name: string) {}
  }

  export class Order {
    private products: Product[] = [];

    addProduct(product: Product) {
      this.products.push(product);
    }

    getProducts(): Product[] {
      return this.products;
    }
  }
}