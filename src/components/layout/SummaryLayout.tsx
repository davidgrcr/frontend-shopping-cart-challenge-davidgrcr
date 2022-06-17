import Item from "../../domain/item";
import useCheckoutStore from "../../store/store";
import Button from "../ui/Button";

export default function SummaryLayout(props: { products: Item[] }) {

  const numberOfItems = useCheckoutStore((state) => state.numberOfItems);
  const priceTotalProducts = useCheckoutStore((state) => state.priceTotalProducts);
  const checkout = useCheckoutStore((state) => state.checkout);

  return (
    <aside className="summary">
      <h1 className="main">Order Summary</h1>
      <ul className="summary-items wrapper border">
        <li>
          <span className="summary-items-number">{numberOfItems} Items</span>
          <span className="summary-items-price">
            {priceTotalProducts}
            <span className="currency">€</span>
          </span>
        </li>
      </ul>
      <div className="summary-discounts wrapper-half border">
        <h2>Discounts</h2>
        <ul>
          {checkout.getPromotions().map((promotion) => (
            <li key={promotion.code}>
              <span>{promotion.description}</span>
              <span>
              -{promotion.adjustment}€          
              </span>
            </li>
          ))}                 
        </ul>
      </div>
      <div className="summary-total wrapper">
        <ul>
          <li>
            <span className="summary-total-cost">Total cost</span>
            <span className="summary-total-price">{checkout.total()}€</span>
          </li>
        </ul>
        <Button type="submit">Checkout</Button>
      </div>
    </aside>
  );
}
