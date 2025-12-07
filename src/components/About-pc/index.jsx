import classes from "./styles/index.module.css";
import gamepad from "../../assets/images/Group (1).png";

export const AboutPc = () => {
  return (
    <section className={classes.about_pc}>
      <div className={classes.container}>
        <div className={classes.about_pc_content}>
          <h2 className={classes.content_title}>About XBOX, PS</h2>
          <h3 className={classes.content_subtitle}>The New Xbox, Ps Series</h3>
          <p className={classes.content_text}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters as opposed.
          </p>
          <button className={classes.content_btn}>
            <a href="#link" className={classes.content_link}>
              Get Started Now
            </a>
          </button>
        </div>
        <div className={classes.about_pc_scene}>
            <img src={gamepad} alt="Gamepad" />
        </div>
      </div>
    </section>
  );
};
