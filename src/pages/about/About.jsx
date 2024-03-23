import "./about.css";
import Owner from "../../assets/Owner.svg";
import PageLayout from "../../combonent/layout/Layout";

const About = () => {
  return (
    <PageLayout parentClass="ourCoffeePageContainer" showNavIcon={true}>
      <section className="ourCoffeeDescriptionContainer">
        <h1 className="ourCoffeeTitle-h1">Vårt Kaffe</h1>
        <br />

        <h3 className="ourCoffeeIngress-h3">
          Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio,
          groounds dripper, crema, strong whipped, variety extra ices id lungo
          half and half mazagran.Pumpkin spice.
        </h3>
        <br />

        <p className="ourCoffee-p1">
          Que dark fair trade, spoon decaffeinated, barista wings whipped, as
          rich aftertaste, con panna milk black, arabica white rich beans single
          shot extra affogato. So affogato macchiato sit extraction instant
          grinder seasonal organic, turkish single shot, single origin, and
          robusta strong to go so dripper. Viennese froth, grounds
          caramelization skinny aromatic cup kopi-luwak, fair trade flavour,
          frappuccino medium, café au lait flavour cultivar ut bar instant
          kopi-luwak.
        </p>
        <br />
        <p className="ourCoffee-p2">
          Roast id macchiato, single shot siphon mazagran milk fair trade est
          aroma a half and half and, so, galão iced to go, whipped as cream cup
          pumpkin spice iced. At extra, rich grinder, brewed to go, steamed half
          and half at, that, percolator macchiato trifecta and body as arabica
          dripper. In galão black java milk sit trifecta, robusta, acerbic café
          au lait instant shop latte. Seasonal bar shop filter aroma id, crema,
          affogato viennese cultivar aftertaste, seasonal, percolator cream
          black, galão flavour, milk aromatic turkish skinny crema.
        </p>
      </section>

      <section className="owner">
        <img src={Owner} alt="Eva Cortado" />
      </section>
    </PageLayout>
  );
};

export default About;
