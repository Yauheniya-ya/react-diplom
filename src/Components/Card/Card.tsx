import React, { FC } from "react";
import classNames from "classnames";
import styles from "./Card.module.css";

import { useNavigate } from "react-router-dom";
import { IBook } from "../../models";
import StarRating from "../StarRating/StarRating";

type BookCardProps = {
  book: IBook;
};

export const Card: FC<BookCardProps> = (props) => {
  const { book } = props;
  const navigate = useNavigate();

  const clickHandler = () => navigate(`/books/${book.isbn13}`);

  return (
    <div className={classNames(styles.card_main)}>
      <div className={classNames(styles.card_container)}>
        <div className={classNames(styles.card_view)} onClick={clickHandler}>
          <img
            className={classNames(styles.card_image)}
            src={book.image}
            alt="book_image"
          />
        </div>
        <div className={classNames(styles.card_info)}>
          <div className={classNames(styles.card_auth_info)}>
            <div className={classNames(styles.card_title)}>{book?.title}</div>
            <div className={classNames(styles.card_subtitle)}>
              {book?.subtitle}
              {book.publisher}
            </div>
          </div>
          <div className={classNames(styles.card_price)}>
            <div className={classNames(styles.price)}>{book.price}</div>
            <div className={classNames(styles.rating)}>
              <StarRating rating={book.rating} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
