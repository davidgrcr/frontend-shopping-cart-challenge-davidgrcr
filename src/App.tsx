import "./App.css";
import useCHeckoutStore from "./store/store";
import CheckoutLayout from "./components/layout/CheckoutLayout";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ProductDetail from "./components/layout/ProductDetail";

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


  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CheckoutLayout checkout={checkout} />} />
          <Route path="/:code" element={<ProductDetail/>}/>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
