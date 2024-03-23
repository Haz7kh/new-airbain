import "./order.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useProductStore, productList } from "../../data/Drinks";

const Order = () => {
  const addProduct = useProductStore((state) => state.addProduct);
  const removeProduct = useProductStore((state) => state.removeProduct);
  const clearProducts = useProductStore((state) => state.clearProducts);

  const products = useProductStore((state) => state.products);
  const productNamesInCart = Object.keys(products);

  const getTotalPrice = () => {
    let totalPrice = 0;

    productNamesInCart.forEach((productName) => {
      const productAmountInCart = products[productName];

      const currentProduct = productList.find(
        (product) => product.name === productName
      );

      /**
       * Sätt priset
       * genom att gångra produktens pris i "productList"
       * med antalet gånger produkten finns i cart
       */
      totalPrice = totalPrice + currentProduct.price * productAmountInCart;
    });
    return totalPrice;
  };
  const totalPrice = getTotalPrice();

  const clearCart = () => clearProducts();

  return (
    <div className="cart">
      <h1>Din Beställning</h1>

      <div className="orderProductList">
        {/** Bygg statiska element, så att du kan styla. Så gör vi dem dynamiska imorn */}
        {productNamesInCart.map((productName, index) => (
          <SingleCartItem
            productName={productName}
            productAmount={products[productName]}
            key={index}
            addProduct={addProduct}
            removeProduct={removeProduct}
          />
        ))}
      </div>

      <div className="cartSummary">
        <h2>Total</h2>
        <h2>{totalPrice} kr</h2>
        <p>inkl. moms & drönarleverans</p>
      </div>
      <Link to="/order-status" className="takeMoneyBtn" onClick={clearCart}>
        Take My Money!
      </Link>
    </div>
  );
};

const SingleCartItem = (props) => {
  const getTotalPriceForThisProduct = (productName, productAmount) => {
    const currentProduct = productList.find(
      (product) => product.name === productName
    );
    return currentProduct.price * productAmount;
  };

  const totalPriceForThisProduct = getTotalPriceForThisProduct(
    props.productName,
    props.productAmount
  );

  const addThisProduct = () => props.addProduct(props.productName);
  const removeThisProduct = () => props.removeProduct(props.productName);

  return (
    <li className="single-cart-item">
      <div className="product-details">
        <h3>{props.productName}</h3>
        <p>{totalPriceForThisProduct} kr</p>
      </div>
      <div className="product-control">
        <button className="increase" onClick={addThisProduct}>
          +
        </button>
        <p>{props.productAmount}</p>
        <button className="decrease" onClick={removeThisProduct}>
          -
        </button>
      </div>
    </li>
  );
};

SingleCartItem.propTypes = {
  productName: PropTypes.string.isRequired,
  productAmount: PropTypes.number.isRequired,
  addProduct: PropTypes.func,
  removeProduct: PropTypes.func,
};

export default Order;
