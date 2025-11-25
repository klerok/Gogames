import classes from "./styles/index.module.css";
import logo from "../../assets/images/Final logo 1 1.png";
import { ListNavigation } from "./components/ListNavigation";
import { linksData } from "./constants/linksData.js";

export const Header = () => {
  return (
    <header className={classes.header}>
      <div className={`${classes.container} ${classes.header_container}`}>
        <a href="#logo" className={classes.logo}>
          <img src={logo} alt="logo" className={classes.img_logo}/>
        </a>
        <nav className={classes.nav}>
          <ListNavigation linksData={linksData} />
        </nav>
        <button className={classes.btn_start}>
          <a href="#start" className={classes.btn_link}>Get Started Now</a>
        </button>
      </div>
    </header>
  );
};
