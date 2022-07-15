import create, { SetState, GetState } from "zustand";
import Checkout from "../domain/Checkout";
import Promotion, {PromotionHalfPrice} from "../domain/Promotion";

let promotion = [];
promotion.push(new PromotionHalfPrice("MUG", "2x1 Mug offer", 50, 2));
promotion.push(new Promotion("TSHIRT", "x3 Shirt offer", 5, 3));

const co = new Checkout(promotion);

/** 
 * @returns object with the states
 */
type CheckoutStore = {
  checkout: Checkout;
  increment: (code: string) => void;
  decrement: (code: string) => void;
  scan: (code: string) => void;
  numberOfItems: number;
  priceTotalProducts: number;
  updateData: () => void;  
};

const useCheckoutStore = create<CheckoutStore>((set: SetState<CheckoutStore>, get: GetState<CheckoutStore>) => ({
  checkout: co,
  numberOfItems: 0,
  priceTotalProducts: 0,
  increment: (code): void => {
    const { checkout, updateData } = get();
    set({ checkout: checkout.increment(code) });
    updateData();
  },
  decrement: (code): void => {
    const { checkout, updateData } = get();
    set({ checkout: checkout.decrement(code) });
    updateData();
  },
  scan: (code): void => {
    const { checkout, updateData } = get();
    set({ checkout: checkout.scan(code) });
    updateData();
  },
  updateData(): void {
    const { checkout } = get();
    set({ numberOfItems: checkout.numberOfItems(), priceTotalProducts: checkout.priceTotalProducts() });
  },
}));

export default useCheckoutStore;
