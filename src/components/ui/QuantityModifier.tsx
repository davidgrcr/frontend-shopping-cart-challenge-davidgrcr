import classes from "./QuantityModifier.module.css";

export default function QuantityModifier(props: {  
  onDecrement: () => void;
  onIncrement?: () => void;
  quantity: number;
}) {
  return (
    <div className="col-quantity">
      <button onClick={props.onDecrement} className={classes.products_count}>
        -
      </button>
      <input type="text" className="product-quantity" value={props.quantity} />
      <button onClick={props.onIncrement} className={classes.products_count}>
        +
      </button>
    </div>
  );
}
