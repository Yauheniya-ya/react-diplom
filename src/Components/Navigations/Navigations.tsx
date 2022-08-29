import classNames from "classnames";
import { Link } from "react-router-dom";
import { BookstoreLogo, CartIcon, FavIcon, UserIcon } from "../../Assets";
import { MainPage } from "../../Pages/Main/MainPaige";
import BookSearch from "../BookSearch/BookSearch";

import styles from "./Nav.module.css";

function Navigation() {
  return (
    <>
      <div className={classNames(styles.wrappernavigations)}>
        <nav className={classNames(styles.navigations)}>
          <Link to={"/"} {...MainPage}>
            <img src={BookstoreLogo} alt="" />
          </Link>
          <div className={classNames(styles.userSearch)}>
            <BookSearch />
          </div>

          <div className={classNames(styles.userContainer)}>
            <Link to={"/favorites"}>
              <img src={FavIcon} alt="" />
            </Link>
            <Link to={"/cart"}>
              <img src={CartIcon} alt="" />
            </Link>
            <Link to={"/account"}>
              <img src={UserIcon} alt="" />
            </Link>
          </div>
          <div className={classNames(styles.userframe)}></div>
        </nav>
      </div>
    </>
  );
}
export default Navigation;
