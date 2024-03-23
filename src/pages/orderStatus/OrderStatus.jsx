import "./order-status.css";
import Drone from "../../assets/Drone.svg";
import PageLayout from "../../combonent/layout/Layout";

const OrderStatus = () => {
  return (
    <PageLayout parentClass="orangeBackground" showNavIcon={false}>
      <section className="orderOnItsWayContainer">
        <p className="orderOnItsWay-p">Ordernummer #12DV23F</p>

        <img src={Drone} className="drone-img" alt="Drone" />

        <h1 className="orderOnItsWay-h1">
          Din beställning <br /> är på väg!
        </h1>

        <h3 className="orderOnItsWay-h3">13 minuter</h3>

        <button className="orderOnItsWay-btn">Ok, cool!</button>
      </section>
    </PageLayout>
  );
};

export default OrderStatus;
