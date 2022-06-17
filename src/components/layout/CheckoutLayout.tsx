import Checkout from "../../domain/Checkout";
import ProductsLayout from "./ProductsLayout";
import SummaryLayout from "./SummaryLayout";


export default function CheckoutLayout(props: { checkout: Checkout }) {
  const products = props.checkout.getProducts();
  return (
    <>
      <ProductsLayout products={products} />
      <SummaryLayout products={products} />
    </>
  );
}
