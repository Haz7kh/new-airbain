import Pagelayout from "../../combonent/layout/Layout";
import "./profile.css";
import LogoMain from "../../assets/LogoMain.svg";

const Profile = () => {
  return (
    <Pagelayout parentClass="welcomePageContainer" showNavIcon={true}>
      <div className="welcomeContainer">
        <section className="topSection">
          <img className="logoMain" src={LogoMain} alt="" />
          <h1>
            Välommen till
            <br />
            AirBean-familjen!
          </h1>
          <p>
            Genom att skapa ett konto nedan kan du spara och se din
            orderhistorik
          </p>
        </section>

        <form className="registerForm">
          <label className="textInputLabel" htmlFor="name">
            Namn
          </label>
          <input type="text" name="name" />

          <label className="textInputLabel" htmlFor="email">
            Epost
          </label>
          <input type="text" name="email" />

          <input type="checkbox" name="gdpr" id="" />
          <label htmlFor="gdpr">Gdpr ok</label>

          <input type="submit" value="Brew me a cup!" />
        </form>
      </div>
    </Pagelayout>
  );
};

export default Profile;
