import { Link } from "react-router-dom";
import Item from "../../domain/item";
import useCHeckoutStore from "../../store/store";
import QuantityModifier from "../ui/QuantityModifier";

function ProductRow(props: { product: Item }) {
  const { name = "", unitPrice = 0, price = 0, reference = "", image = "", quantity = 0 } = props.product;
  const increment = useCHeckoutStore((state) => state.increment);
  const decrement = useCHeckoutStore((state) => state.decrement);
  const numberOfItems = useCHeckoutStore((state) => state.numberOfItems);

  const handleOnIncrement = (code: string) => () => {
    increment(code);
  };

  const handleOnDecrement = (code: string) => () => {
    decrement(code);
  };

  return (
    <li className="product row">
      <div className="col-product">
        <Link to={props.product.code}>
        <figure className="product-image">
          <img src={image} alt={name} />
          <div className="product-description">
            <h1>{name}</h1>
            <p className="product-code">{`Product code ${reference}`}</p>
          </div>
        </figure>
        </Link>
      </div>
      <QuantityModifier
        onDecrement={handleOnDecrement(props.product.code)}
        onIncrement={handleOnIncrement(props.product.code)}
        quantity={quantity}
      />
      <div className="col-price">
        <span className="product-price">{unitPrice}</span>
        <span className="product-currency currency">€</span>
      </div>
      <div className="col-total">
        <span className="product-price">{price}</span>
        <span className="product-currency currency">€</span>
      </div>
    </li>
  );
}

export default ProductRow;
