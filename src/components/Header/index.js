import { NavLink } from "react-router-dom";
import { ROUTES } from "@constants";
import * as classes from "./index.module.css";

export const Header = () => (
  <ul className={classes.menu}>
    <NavigationLink
      link={ROUTES.pagination}
      title="Pagination"
    />
    <NavigationLink
      link={ROUTES.advancedPagination}
      title="Advanced Pagination"
    />
    <NavigationLink
      link={ROUTES.infiniteScroll}
      title="Infinite Scroll"
    />
  </ul>
);

const NavigationLink = ({ link, title }) => (
  <li>
    <NavLink
      to={link}
      className={({ isActive }) => (isActive ? classes.active : "")}
    >
      {title}
    </NavLink>
  </li>
);
