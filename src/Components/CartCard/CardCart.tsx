import { FC, useState } from "react";
import classNames from "classnames";
import styles from "./CardCart.module.css";

import { IBook } from "../../models";
import { IconCancel, IconMinus, IconPlus } from "../../Assets";
import IconButton from "../IconButton/IconButton";
import { useDispatch } from "react-redux";
import { removeBookFromCart } from "../../Redux/redusers/cart";

type BookCartProps = {
  book: IBook;
  cart: [];
};

export const CardCart: FC<BookCartProps> = (props) => {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const removeFromCart = (book: IBook) => {
    dispatch(removeBookFromCart(book.isbn13));
  };
  const { book } = props;

  return (
    <div className={classNames(styles.Cart_card_wrapper)}>
      <div className={classNames(styles.Cart_card)}>
        <div className={classNames(styles.Cart_image)}>
          <img
            className={classNames(styles.Cart_view)}
            src={book.image}
            alt=""
          />
        </div>
        <div className={classNames(styles.Cart_info)}>
          <div className={classNames(styles.Cart_title)}>
            {book.title}
            <p>{book.authors}</p>
          </div>
          <div className={classNames(styles.Cart_count)}>
            <IconButton
              icon={IconMinus}
              onClick={() => {
                setCount(count - 1);
              }}
            />
            <h1>{count}</h1>
            <IconButton
              icon={IconPlus}
              onClick={() => {
                setCount(count + 1);
              }}
            />
          </div>
        </div>
        <div className={classNames(styles.Cart_price)}>
          <h1>{book.price}</h1>
        </div>
        <div className={classNames(styles.Cart_butt)}>
          <IconButton
            icon={IconCancel}
            onClick={() => {
              removeFromCart(book!);
            }}
            // onClick={removeFromFavHandler}
          />
        </div>
      </div>
    </div>
  );
};
