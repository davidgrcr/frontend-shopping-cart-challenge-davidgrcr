/**
 * Item domain model.
 * Represents a product in the cart.
 */

class Item {
  private product: Product;
  public quantity: number;

  constructor(product: Product) {
    this.product = product;
    this.quantity = 1;
  }
  /**
   * @returns the name of the product
   */
  get name(): string {
    return this.product.name;
  }

  /**
   * @returns the price of the product
   */
  get price(): number {
    return this.product.price * this.quantity;
  }

  /**
   * returns the unit price of the product
   */
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

  /**
   * increases the quantity of the product
   */
  increase(): void {
    this.quantity++;
  }

  /**
   * decreases the quantity of the product
   */
  decrease(): void {
    if (this.quantity) this.quantity--;
    else this.quantity = 0;
  }
}

/**
 * Structure of the product in the cart.
 */
export type Product = {
  name: string;
  price: number;
  code: string;
  reference: string;
  image: string;
};

export default Item;
