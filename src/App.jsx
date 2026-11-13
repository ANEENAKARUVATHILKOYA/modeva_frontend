
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route
          path="/"
          element={<h1 className="page-placeholder">MODEVA Home</h1>}
        />

        <Route
          path="/products"
          element={<h1 className="page-placeholder">Products Page</h1>}
        />

        <Route
          path="/brands"
          element={<h1 className="page-placeholder">Brands Page</h1>}
        />

        <Route
          path="/cart"
          element={<h1 className="page-placeholder">Cart Page</h1>}
        />

        <Route
          path="/login"
          element={<h1 className="page-placeholder">Login Page</h1>}
        />

        <Route
          path="/register"
          element={<h1 className="page-placeholder">Register Page</h1>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

