import Item from "../../domain/item";
import ProductRow from "./ProductRow";

function ProductList(props: { products: Item[] }) {
  return (
    <ul className="products-list">
      {props.products.map(product => {
        return <ProductRow key={product.code} product={product} />;
      })}
    </ul>
  );
}

export default ProductList;
