import { PriceList } from "./components/PriceList";
import classes from "./styles/index.module.css";
import { priceList } from "./constants/priceList";

export const Price = () => {
  return (
    <section className={classes.price}>
      <div className={classes.container}>
        <h2 className={classes.price_title}>Our Pricing</h2>
        <h3 className={classes.price_subtitle}>Choose Your Plan</h3>
        <PriceList priceList={priceList}/>
      </div>
    </section>
  );
};
