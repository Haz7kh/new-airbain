import "./menu.css";
import addIcon from "../../assets/add-icon.png";
import PageLayout from "../../combonent/layout/Layout";

import { useProductStore, productList } from "../../data/Drinks";

const Menu = () => {
  const addProduct = useProductStore((state) => state.addProduct);

  return (
    <PageLayout
      parentClass="menuPageContainer"
      showNavIcon={true}
      showCartIcon={true}
    >
      <section className="menuContainer pageContent">
        <h1 className="menuPage-h1">Meny</h1>

        {productList.map((product, index) => (
          <article key={index} className="addChoice">
            <button
              onClick={() => addProduct(product.name)}
              className="addProduct"
            >
              <img src={addIcon} className="add-icon" alt="Add icon" />
            </button>
            <div className="menu-description">
              <h3 className="menuPage-h3">
                {product.name}......{product.price} kr
              </h3>
              <p className="menuPage-p">{product.description}</p>
            </div>
          </article>
        ))}
      </section>
    </PageLayout>
  );
};

export default Menu;
