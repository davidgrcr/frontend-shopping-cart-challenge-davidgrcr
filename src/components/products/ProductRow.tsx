import Item from "../../domain/item";
import useCHeckoutStore from "../../store/store";

function ProductRow(props: { product: Item }) {
  const { name = "", unitPrice = 0, price = 0, reference = "", image = "", quantity = 0 } = props.product;  
  const increment = useCHeckoutStore(state => state.increment);  
  const decrement = useCHeckoutStore(state => state.decrement);  
  const numberOfItems = useCHeckoutStore(state => state.numberOfItems);
  
  return (
    <li className="product row">
      <div className="col-product">
        <figure className="product-image">
          <img src={image} alt={name} />
          <div className="product-description">
            <h1>{name}</h1>
            <p className="product-code">{`Product code ${reference}`}</p>
          </div>
        </figure>
      </div>
      <div className="col-quantity">
        <button onClick={() => {
            decrement(props.product.code);
          }}
          className="count">-</button>
        <input type="text" className="product-quantity" value={quantity} />        
        <button
          onClick={() => {
            increment(props.product.code);
          }}
          className="count"
        >
          +
        </button>
      </div>
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
