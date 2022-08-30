import classNames from "classnames";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  BookstoreLogo,
  CartIcon,
  CartIconActive,
  FavIcon,
  FavIconActive,
  UserIcon,
} from "../../Assets";
import { MainPage } from "../../Pages/Main/MainPaige";
import { BooksSelectors } from "../../Redux/redusers/book";
import { CartSelectors } from "../../Redux/redusers/cart";
import BookSearch from "../BookSearch/BookSearch";

import styles from "./Nav.module.css";

function Navigation() {
  const favBooksList = useSelector(BooksSelectors.getFavBooks);
  const cartBooksList = useSelector(CartSelectors.getCartBooks);
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
              {favBooksList.length > 0 && <img src={FavIconActive} alt="" />}
              {favBooksList.length === 0 && <img src={FavIcon} alt="" />}
            </Link>
            <Link to={"/cart"}>
              {cartBooksList.cart.length > 0 && (
                <img src={CartIconActive} alt="" />
              )}
              {cartBooksList.cart.length === 0 && <img src={CartIcon} alt="" />}
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
