import PropTypes from "prop-types";
import "./layout.css";
import { useState } from "react";
import Order from "../order/Order";
import "./nav.css";
import CartIcon from "../../assets/cart-1.png";
import NavIcon from "../../assets/navicon.png";
import CloseIcon from "../../assets/close.png";
import { Link } from "react-router-dom";

const PageLayout = ({
  children,
  parentClass,
  showNavIcon = true,
  showCartIcon = false,
}) => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const toggleNav = () => {
    if (navIsOpen) {
      setNavIsOpen(false);
    } else {
      setCartIsOpen(false);
      setNavIsOpen(true);
    }
  };

  const toggleCart = () => {
    if (cartIsOpen) {
      setCartIsOpen(false);
    } else {
      setNavIsOpen(false);
      setCartIsOpen(true);
    }
  };

  return (
    <div className={`${parentClass} pageStyle`}>
      <header className="headerContainer">
        {showNavIcon && (
          <button className="navIcon" onClick={toggleNav}>
            <img src={navIsOpen ? CloseIcon : NavIcon} alt="icon" />
          </button>
        )}

        {showCartIcon && (
          <button className="cartIconBtn" onClick={toggleCart}>
            <img className="cartIconImg" src={CartIcon} alt="icon" />
          </button>
        )}
      </header>
      {children}
      {navIsOpen && <NavigationArea />}
      {cartIsOpen && <Order />}
    </div>
  );
};

function NavigationArea() {
  return (
    <div className="navPopup">
      <Link to="/menu">Meny</Link>
      <p className="line">____</p>
      <br />
      <Link to="/about">Vårt Kaffe</Link>
      <p className="line">____</p>
      <br />
      <Link to="/profile">Min Profil</Link>
      <p className="line">____</p>
      <br />
      <Link to="/order-status">Orderstatus</Link>
    </div>
  );
}

PageLayout.propTypes = {
  children: PropTypes.element,
  parentClass: PropTypes.string,
  showNavIcon: PropTypes.bool,
  showCartIcon: PropTypes.bool,
};
export default PageLayout;
