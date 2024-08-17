import { NavLink } from "react-router-dom";
import { ROUTES } from "./../../constants";

export const Header = () => (
  <ul>
    <NavigationLink
      navigationLink={ROUTES.pagination}
      navigationName="Pagination"
    />
    <NavigationLink
      navigationLink={ROUTES.advancedPagination}
      navigationName="Advanced Pagination"
    />
    <NavigationLink
      navigationLink={ROUTES.infiniteScroll}
      navigationName="Infinite Scroll"
    />
  </ul>
);

const NavigationLink = ({ navigationLink, navigationName }) => (
  <li>
    <NavLink
      to={navigationLink}
      className={({ isActive }) => (isActive ? "active" : "")}
    >
      {navigationName}
    </NavLink>
  </li>
);
