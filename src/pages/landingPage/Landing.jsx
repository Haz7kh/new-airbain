import Pagelayout from "../../combonent/layout/Layout";
import "./land.css";
import Vector from "../../assets/LogoMain.svg";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/menu"); // Navigate to '/menu' after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Clear timeout on component unmount
  }, [navigate]);

  return (
    <Pagelayout parentClass="landingPageContainer" showNavIcon={false}>
      <div className="landingPageHeader pageContent">
        <img src={Vector} alt="" className="airbeanIcon" />
        <h1 className="landingPageTitle">AIR BEAN</h1>
        <p className="landingPageSubtitle">DRONEDELIVERED COFFEE</p>
      </div>
    </Pagelayout>
  );
};

export default Landing;
