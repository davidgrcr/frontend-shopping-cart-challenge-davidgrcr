import ProductsLayout from "./components/layout/ProductsLayout";
import "./App.css";
import useCHeckoutStore from "./store/store";
import Summary from "./components/layout/Summary";

function App() {
  /* Inicialize the application */
  const checkout = useCHeckoutStore((state) => state.checkout);
  const scan = useCHeckoutStore((state) => state.scan);

  scan("TSHIRT");
  scan("CAP");
  scan("TSHIRT");
  scan("MUG");
  scan("TSHIRT");
  scan("MUG");
  scan("MUG");
  scan("MUG");
  scan("CAP");
  scan("CAP");
  scan("CAP");
  
  /* Inicialize the application */

  const products = checkout.getProducts();

  return (
    <main className="App">
      <ProductsLayout products={products} />
      <Summary products={products} />
    </main>
  );
}

export default App;
