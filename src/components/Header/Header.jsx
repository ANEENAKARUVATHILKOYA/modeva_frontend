import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  UserRound,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showOffer, setShowOffer] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    const query = searchQuery.trim();

    if (query) {
      navigate(`/products?search=${encodeURIComponent(query)}`);
      setMenuOpen(false);
    }
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      {showOffer && (
        <div className="announcement-bar">
          <p>
            Sign up and get 20% off your first order.{" "}
            <Link to="/register">Sign Up Now</Link>
          </p>

          <button
            type="button"
            className="announcement-close"
            aria-label="Close announcement"
            onClick={() => setShowOffer(false)}
          >
            <X size={18} />
          </button>
        </div>
      )}

      <div className="header-container">
        <button
          type="button"
          className="mobile-menu-btn"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <Link to="/" className="brand-logo" onClick={closeMenu}>
          MODEVA
        </Link>

        <nav
          id="main-navigation"
          className={`header-nav ${menuOpen ? "nav-open" : ""}`}
          aria-label="Main navigation"
        >
          <NavLink to="/products" onClick={closeMenu}>
            Shop <ChevronDown size={15} />
          </NavLink>

          <NavLink to="/products?sort=sale" onClick={closeMenu}>
            On Sale
          </NavLink>

          <NavLink to="/products?sort=newest" onClick={closeMenu}>
            New Arrivals
          </NavLink>

          <NavLink to="/brands" onClick={closeMenu}>
            Brands
          </NavLink>
        </nav>

        <form className="header-search" onSubmit={handleSearch}>
          <Search size={20} />

          <input
            type="search"
            placeholder="Search for products..."
            aria-label="Search products"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>

        <div className="header-actions">
          <button
            type="button"
            className="mobile-search-btn"
            aria-label="Search products"
            onClick={() => navigate("/products")}
          >
            <Search size={23} />
          </button>

          <Link to="/cart" aria-label="Shopping cart">
            <ShoppingCart size={23} />
          </Link>

          <Link to="/login" aria-label="My account">
            <UserRound size={23} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
