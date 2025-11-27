import classes from "./styles/index.module.css";
import character from '../../assets/images/character.png'

export const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.container}>
        <div className={classes.hero_content}>
          <h2 className={classes.content_title}>Gaming Consoles</h2>
          <h3 className={classes.content_subtitle}>
            Try It, Rent It, Save $50!
          </h3>
          <p className={classes.content_text}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters as opposed.
          </p>
          <button className={classes.hero_btn}>
            <a href="#price" className={classes.content_link}>
              Get Started Now
            </a>
          </button>
        </div>
        <div className={classes.hero_img}>
            <img src={character} alt="Hero Character" />
        </div>

      </div>
    </section>
  );
};
