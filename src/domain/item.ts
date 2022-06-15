class Item {
  private product: Product;
  public quantity: number;

  constructor(product: Product) {
    this.product = product;
    this.quantity = 1;
  }
  get name(): string {
    return this.product.name;
  }

  get price(): number {
    return this.product.price * this.quantity;
  }

  get unitPrice(): number {
    return this.product.price;
  }

  get code(): string {
    return this.product.code;
  }

  get reference(): string {
    return this.product.reference;
  }
  get image(): string {
    return this.product.image;
  }

  increase(): void {
    this.quantity++;
  }

  decrease(): void {
    if (this.quantity) this.quantity--;
    else this.quantity = 0;
  }
}

export type Product = {
  name: string;
  price: number;
  code: string;
  reference: string;
  image: string;
};

export default Item;
