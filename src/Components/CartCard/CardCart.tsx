import { FC } from "react";
import classNames from "classnames";
import styles from "./CardCart.module.css";

import { IBook } from "../../models";
import { IconCancel } from "../../Assets";
import IconButton from "../IconButton/IconButton";

type BookCartProps = {
  book: IBook;
  cart: [];
};

export const CardCart: FC<BookCartProps> = (props) => {
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
          <div className={classNames(styles.Cart_price)}>{book.price}</div>
        </div>
        <div className={classNames(styles.Cart_butt)}>
          <IconButton
            icon={IconCancel}
            // onClick={removeFromFavHandler}
          />
        </div>
      </div>
    </div>
  );
};
