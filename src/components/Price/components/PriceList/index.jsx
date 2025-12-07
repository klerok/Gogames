import classes from "./styles/index.module.css";

export const PriceList = ({ priceList }) => {
  return (
    <ul className={classes.price_list}>
      {priceList.map((item) => (
        <li className={classes.price_flex} key={item.id}>
          <div className={classes.price_content}>
            <h4 className={classes.price_name}>{item.priceName}</h4>
            <span className={classes.price_value}>{item.priceValue}</span>
            <span className={classes.price_item}>{item.users}</span>
            <span className={classes.price_item}>{item.storage}</span>
            <span className={classes.price_item}>{item.email}</span>
            <span className={classes.price_item}>{item.help}</span>
            <a href="#link" className={classes.content_link}>
              Get Started Now
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
};
