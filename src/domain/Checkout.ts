import { Checkout as CheckoutI } from "./checkoutI";
import Item, { Product } from "./item";
import Promotion from "./Promotion";

/**
 * The checkout class.
 * implements the CheckoutI interface.
 */
class Checkout implements CheckoutI {
  private products: Item[] = [];
  private promotions?: Promotion[] = [];

  constructor(promotions?: Promotion[] | undefined) {
    this.promotions = promotions;
  }

  scan(code: string): this {
    let item = this.checkProducts(code);

    if (item) {
      item.increase();
    } else {
      item = new Item(this.findProductBBDD(code));
      this.products.push(item);
    }

    //update promotions
    this.updatePromotion(item);

    return this;
  }

  /**
   * Returns the value of all cart products with the discounts applied.
   * @returns the total value of the cart
   */
  total(): number {
    let adjusment = 0;
    this.products?.forEach((product: Item) => {
      let promotion = this.hasPromotion(product.code);
      if (promotion) adjusment += promotion.adjustment;
    });

    return this.priceTotalProducts() - adjusment;
  }

  /**
   * Returns true if the product has a promotion.
   * @param code
   * @returns boolean
   */
  hasPromotion(code: string): Promotion | undefined {
    return (this.promotions || []).find((promotion) => promotion.code === code);
  }

  /**
   *update promotions
   * @param item
   * @returns void
   */
  updatePromotion(item: Item): void {
    let promotion = this.hasPromotion(item.code);
    if (promotion) {
      promotion.updatePromotion(item);
    }
  }

  getPromotions(): Promotion[] {
    return this.promotions || [];
  }

  /**
   * Checks if the product is in the cart.
   * @param code the product code
   * @returns item if it is in the cart, undefined otherwise
   */
  checkProducts(code: string): Item | undefined {
    return this.products.find((product: Item) => product.code === code);
  }

  /**
   * find the product in the 'database'
   * @param code the product code
   * @returns
   */
  findProductBBDD(code: string): Product | any {
    return BBDD.find((product: Product) => product.code === code);
  }

  getProducts(): Item[] {
    return this.products;
  }

  increment(code: string): this {
    let item = this.checkProducts(code);

    if (item) {
      item.increase();
      this.updatePromotion(item);
    }

    return this;
  }

  decrement(code: string): this {
    let item = this.checkProducts(code);

    if (item) {
      item.decrease();
      this.updatePromotion(item);
    }

    return this;
  }

  numberOfItems(): number {
    return this.products.reduce((acc, product) => acc + product.quantity, 0);
  }

  priceTotalProducts(): number {
    return this.products.reduce((acc, product) => acc + product.price, 0);
  }
}

// Data From BBDD:

const BBDD: Product[] = [
  {
    name: "Shirt",
    price: 20,
    code: "TSHIRT",
    reference: "X7R2OPX",
    image: "/assets/tshirt.png",
  },
  {
    name: "Mug",
    price: 5,
    code: "MUG",
    reference: "X2G2OPZ",
    image: "/assets/mug.png",
  },
  {
    name: "Cap",
    price: 10,
    code: "CAP",
    reference: "X3W2OPY",
    image: "/assets/cap.png",
  },
];

export default Checkout;
