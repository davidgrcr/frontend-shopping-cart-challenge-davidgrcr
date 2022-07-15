import classes from "./QuantityModifier.module.css";

export default function QuantityModifier(props: {
  onDecrement: () => void;
  onIncrement?: () => void;
  onChange?: () => void;
  quantity: number;
}) {
  return (
    <div className="col-quantity" data-testid="quantity-modifier">
      <button
        data-testid="quantity-modifier-on_decrement"
        onClick={props.onDecrement}
        className={classes.products_count}
      >
        -
      </button>
      <input type="text" className="product-quantity" value={props.quantity} onChange={props.onChange} />
      <button
        data-testid="quantity-modifier-on_increment"
        onClick={props.onIncrement}
        className={classes.products_count}
      >
        +
      </button>
    </div>
  );
}
