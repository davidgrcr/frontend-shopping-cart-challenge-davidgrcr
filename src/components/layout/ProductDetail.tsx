import { useLocation } from "react-router-dom";
import Checkout from "../../domain/Checkout";
import Button from "../ui/Button/Button";
import Icon from "../ui/Icons/Icon";
import IconClose from "../ui/Icons/IconClose";
import classes from "./ProductDetail.module.css";

export default function ProductDetail(props: { checkout: Checkout }) {
  let { pathname = "" } = useLocation();
  const { checkout } = props;

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
