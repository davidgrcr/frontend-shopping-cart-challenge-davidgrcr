import ProductList from "../products/ProductLists";
import Item from "../../domain/item";

function ProductsLayout(props: { products: Item[] }) {
  return (
    <section className="products">
      <h1 className="main">Shopping cart</h1>
      <ul className="products-list tableHead">
        <li className="products-list-title row">
          <div className="col-product">Product details</div>
          <div className="col-quantity">Quantity</div>
          <div className="col-price">Price</div>
          <div className="col-total">Total</div>
        </li>
      </ul>
      <ProductList products={props.products}/>
    </section>
  );
}

export default ProductsLayout;
