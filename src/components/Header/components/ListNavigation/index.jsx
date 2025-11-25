import classes from './styles/index.module.css'

export const ListNavigation = ({ linksData }) => {
  return (
    <ul className={classes.nav_list}>
      {linksData.map((item) => (
        <li key={item.id} className={classes.list_item}>
          <a href={item.link} className={classes.list_link}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
};
