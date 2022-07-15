import "./App.css";
import useCheckoutStore from "./store/store";
import CheckoutLayout from "./components/layout/CheckoutLayout";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ProductDetail from "./components/layout/ProductDetail";

function App() {
  /* Inicialize the application */
  const checkout = useCheckoutStore((state) => state.checkout);
  const scan = useCheckoutStore((state) => state.scan);

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

  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CheckoutLayout checkout={checkout} />} />
          <Route path="/:code" element={<ProductDetail checkout={checkout} />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
