import { FC } from "react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

import styles from "./Cart.module.css";

import { IconArrowLeft } from "../../Assets";
import IconButton from "../../Components/IconButton/IconButton";
import { Title } from "../../Components/Title/Title";
import Subscribe from "../../Components/Subscribe";
import { IBook } from "../../models";
import { CardCart } from "../../Components/CartCard/CardCart";
import { useSelector, useDispatch } from "react-redux";
// import { BooksSelectors } from "../../Redux/redusers/book";
import { CartSelectors } from "../../Redux/redusers/cart";

const CartPage: FC = () => {
  const cartlist = useSelector(CartSelectors.getCartBooks);
  // const booksList = useSelector(BooksSelectors.getBooks);
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const onStepBackHandler = () => {
    navigate(-1);
  };

  return (
    <div className={classNames(styles.cartContainer)}>
      <div className={classNames(styles.cartWrapper)}>
        <div className={classNames(styles.Detailpage_title)}>
          <IconButton icon={IconArrowLeft} onClick={onStepBackHandler} />
          <Title text="Your Cart" />
        </div>
        <div className={classNames(styles.CartWrapper)}>
          {cartlist.cart.length === 0 && (
            <p className={classNames(styles.noTtwrap)}>No items.</p>
          )}
          {cartlist.cart.map((book: IBook) => (
            <CardCart key={book.isbn13} book={book} cart={[]} />
          ))}
        </div>
        <Subscribe />
      </div>
    </div>
  );
};

export default CartPage;
