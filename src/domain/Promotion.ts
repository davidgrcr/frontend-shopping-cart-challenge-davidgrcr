import Item from "./item";

/**  
 * Structure of the promotion.
 */
export default class Promotion {
  code: string;
  description: string;
  discount: number;
  numberOfItems: number;
  adjustment: number;
  constructor(code: string, description: string, discount: number, numberOfItems: number) {
    this.code = code;
    this.description = description;
    this.discount = discount;
    this.numberOfItems = numberOfItems;
    this.adjustment = 0;
  }

  /**
   * Updates the promotion with the new quantity of the product.
   * @param item 
   */
  updatePromotion(item: Item): void {
    if (this.numberOfItems <= item.quantity) {
      this.adjustment = (this.discount / 100) * item.price;
    } else {
      this.adjustment = 0;
    }
  }
}

/**
 * Promotion for the number of items.
 */
export class PromotionHalfPrice extends Promotion {
  constructor(code: string, description: string, discount: number, numberOfItems: number) {
    super(code, description, discount, numberOfItems);
  }

  updatePromotion(item: Item): void {
    if (this.numberOfItems <= item.quantity) {
      if(item.quantity % 2 === 0) {
        this.adjustment = (this.discount / 100) * item.price;
      }  else {
        this.adjustment = (this.discount / 100) * (item.price - item.unitPrice);
      }
      
    } else {
      this.adjustment = 0;
    }
  }
}