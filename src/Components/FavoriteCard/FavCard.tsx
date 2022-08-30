import react, { FC } from "react";
import classNames from "classnames";

import styles from "./FavCard.module.css";

import { FavHeart, FavIcon } from "../../Assets";
import { IBook } from "../../models";
import IconButton from "../IconButton/IconButton";
import { useDispatch } from "react-redux";
import { removeBookFromFav } from "../../Redux/redusers/book";

type FavCardProps = {
  book: IBook;
};

const FavCard: FC<FavCardProps> = (props) => {
  const { book } = props;
  const dispatch = useDispatch();
  const removeFromFavourite = (book: IBook) => {
    dispatch(removeBookFromFav(book.isbn13));
  };
  return (
    <div className={classNames(styles.Fav_card_wrapper)}>
      <div className={classNames(styles.Fav_card)}>
        <div className={classNames(styles.Fav_image)}>
          <img
            className={classNames(styles.Fav_view)}
            src={book.image}
            alt=""
          />
        </div>
        <div className={classNames(styles.Fav_info)}>
          <div className={classNames(styles.Fav_title)}>
            {book.title}
            <p>{book.authors}</p>
          </div>
          <div className={classNames(styles.Fav_price)}>{book.price}</div>
        </div>
        <div className={classNames(styles.Fav_butt)}>
          <IconButton
            icon={FavHeart}
            onClick={() => {
              removeFromFavourite(book!);
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default FavCard;
