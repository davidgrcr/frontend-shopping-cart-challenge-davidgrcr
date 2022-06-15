import Checkout from "./Checkout";
import Promotion, { PromotionHalfPrice } from "./Promotion";

describe("Checkout without pricing rules", () => {
  it("should be able to add a product", () => {
    const checkout = new Checkout();
    checkout.scan("TSHIRT");
    expect(checkout.numberOfItems()).toBe(1);
  });

  it("should be able to increment the quantity of a product", () => {
    const checkout = new Checkout();
    checkout.scan("TSHIRT");
    checkout.increment("TSHIRT");
    expect(checkout.numberOfItems()).toBe(2);
  });

  it("should be able to decrement the quantity of a product", () => {
    const checkout = new Checkout();
    checkout.scan("TSHIRT");
    checkout.decrement("TSHIRT");
    expect(checkout.numberOfItems()).toBe(0);
  });

  it("should be able to calculete the amount of all the products", () => {
    const checkout = new Checkout();
    checkout.scan("TSHIRT");
    checkout.scan("TSHIRT");
    checkout.scan("TSHIRT");
    checkout.scan("MUG");
    checkout.scan("MUG");
    checkout.scan("CAP");
    checkout.scan("CAP");
    expect(checkout.priceTotalProducts()).toBe(90);
  });
});

describe("Checkout without pricing rules", () => {
  let promotion = [];
  promotion.push(new PromotionHalfPrice("MUG", "2x1 Mug offer", 50, 2));
  promotion.push(new Promotion("TSHIRT", "x3 Shirt offer", 5, 3));
  const checkout = new Checkout(promotion);

  it("Bulk discounts: (for TSHIRT items). Buying 3 or more of this product, the price per unit is reduced by 5%", () => {
    checkout.scan("TSHIRT");
    checkout.scan("TSHIRT");
    checkout.scan("TSHIRT");
    expect(checkout.total()).toBe(57);
  });

  it("2-for-1 promotions: (for MUG items). Buy two of them, get one free. ", () => {
    checkout.decrement("TSHIRT");
    checkout.scan("MUG");
    checkout.scan("MUG");
    expect(checkout.total()).toBe(45);
    checkout.scan("MUG");
    checkout.scan("MUG");
    expect(checkout.total()).toBe(50);
  });
  
  it("should be able to calculete the total without buying a multiple of two ", () => {
    checkout.decrement("MUG");
    expect(checkout.total()).toBe(50);
  });
});
