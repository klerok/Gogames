import classes from "./styles/index.module.css";
import logo from "../../assets/images/Final logo 1 1.png";
import iconFace from "../../assets/images/Icon awesome-facebook-f.png";
import iconX from "../../assets/images/Icon awesome-twitter.png";
import iconInst from "../../assets/images/Icon awesome-instagram.png";

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <a href="#logo" className={classes.footer_logo}>
          <img src={logo} alt="Logo" className={classes.logo} />
        </a>
        <div className={classes.copyright}>
          Copyright © 2022 HEALAS.LT. All Rights Reserved.
        </div>
        <div className={classes.links}>
          <a href="#facebook" className={classes.link_item}>
            <img src={iconFace} alt="Facebook" />
          </a>
          <a href="#X" className={classes.link_item}>
            <img src={iconX} alt="X" />
          </a>
          <a href="#instagram" className={classes.link_item}>
            <img src={iconInst} alt="Instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
};
