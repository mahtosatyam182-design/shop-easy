import { Link } from 'react-router-dom';
import './Header.css';

function Header({ cartCount, wishlistCount = 0 }) {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          🛒 ShopEasy
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">Products</Link>
          <Link to="/wishlist" className="wishlist-link">
            <span className="wishlist-icon">♥</span>
            <span className="wishlist-text">Wishlist</span>
            {wishlistCount > 0 && <span className="wishlist-badge">{wishlistCount}</span>}
          </Link>
          <Link to="/cart" className="cart-link">
            <span className="cart-icon">🛍️</span>
            <span className="cart-text">Cart</span>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
