import classes from "./styles/index.module.css";
import man from "../../assets/images/men.png";
import screen from "../../assets/images/screen.png";
import shadow from "../../assets/images/Group.png";

export const About = () => {
  return (
    <section className={classes.about}>
      <div className={classes.container}>
        <div className={classes.about_scene}>
          <img src={man} alt="Man" className={classes.about_scene_man} />
          <img
            src={shadow}
            alt="Shadow"
            className={classes.about_scene_shadow}
          />
          <img
            src={screen}
            alt="Screen"
            className={classes.about_scene_screen}
          />
        </div>
        <div className={classes.about_content}>
          <h2 className={classes.content_title}>About VR Glasses</h2>
          <h3 className={classes.content_subtitle}>
            The New VR Glasses Series
          </h3>
          <p className={classes.content_text}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters as opposed.
          </p>
          <button className={classes.content_btn}>
            <a href="#link" className={classes.content_link}>Get Started Now</a>
          </button>
        </div>
      </div>
    </section>
  );
};
