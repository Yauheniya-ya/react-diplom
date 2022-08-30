import { FC, useEffect } from "react";
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
import {
  CartSelectors,
  removeAllBooksFromCart,
  setBookToCart,
} from "../../Redux/redusers/cart";
import Button from "../../Components/Button";

const CartPage: FC = () => {
  const cartlist = useSelector(CartSelectors.getCartBooks);

  const totalPrice = cartlist.cart.reduce(
    (acc, book) => acc + +book.price.replace(/[^\d.-]/g, ""),
    0
  ); // ???
  const vat = +(totalPrice * 0.185).toFixed(2);
  const total = +(totalPrice + vat).toFixed(2);
  // const booksList = useSelector(BooksSelectors.getBooks);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onStepBackHandler = () => {
    navigate(-1);
  };
  // useEffect(() => {
  //   dispatch(removeAllBooksFromCart());
  // }, [dispatch]);

  const CheckOutHandler = () => {
    dispatch(removeAllBooksFromCart());
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
          <div className={classNames(styles.Line)}></div>
        </div>

        <div className={classNames(styles.Total)}>
          <span>
            <p>Sum total: {totalPrice}</p>
            <p>VAT : {vat}</p>
          </span>

          <h1>TOTAL: {total} </h1>

          <Button
            title={"check out"}
            className={classNames(styles.cart_button)}
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
