import { useLocation } from "react-router-dom";
import useCheckoutStore from "../../store/store";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import IconClose from "../ui/IconClose";
import classes from "./ProductDetail.module.css";

export default function ProductDetail() {
  let { pathname = "" } = useLocation();
  const checkout = useCheckoutStore((state) => state.checkout);
  const product = checkout.findProductBBDD(pathname.replace("/", ""));

  const handleOnIncrement = (code: string) => () => {
    checkout.scan(code);
    history.back();
  };

  return (
    <>
      <section className={classes.product_detail}>
        <img src={`/assets/big/${product.code.toLowerCase()}.jpg`} />
      </section>
      <aside className={`summary ${classes.detail_product_summary}`}>
        <Icon className={classes.icon} onClick={() => history.back()}>
          <IconClose />
        </Icon>
        <ul className="summary-items wrapper border">
          <li>
            <span className="summary-items-number">{product.name} </span>
            <span className="summary-items-price">
              {product.price}
              <span className="currency">€</span>
            </span>
          </li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales semper elit sit amet interdum. Praesent
          volutpat sed elit vel consectetur. Nulla tempus tincidunt ex, sit amet semper ipsum imperdiet varius. In
          rutrum aliquam nisl, sagittis faucibus felis bibendum id.
        </p>
        <div className={`summary-total wrapper ${classes.detail_product_code}`}>
          <p>Product code {product.reference}</p>
          <Button onClick={handleOnIncrement(product.code)} type="submit">
            Add to cart
          </Button>
        </div>
      </aside>
    </>
  );
}
