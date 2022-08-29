import classNames from "classnames";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FavHeart, IconArrowLeft } from "../../Assets";
import { Card } from "../../Components/Card/Card";
import FavCard from "../../Components/FavoriteCard/FavCard";
import IconButton from "../../Components/IconButton/IconButton";
import Subscribe from "../../Components/Subscribe";
import { Title } from "../../Components/Title/Title";
import { IBook } from "../../models";
import { BooksSelectors, removeBookFromFav } from "../../Redux/redusers/book";

import styles from "./FavPage.module.css";

export function FavouritesPage() {
  const favouritesList = useSelector(BooksSelectors.getFavBooks);
  const booksList = useSelector(BooksSelectors.getBooks);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onStepBackHandler = () => {
    navigate(-1);
  };

  return (
    <div className={classNames(styles.pageContainer)}>
      <div className={classNames(styles.favoritesContainer)}>
        <div className={classNames(styles.Detailpage_title)}>
          <IconButton icon={IconArrowLeft} onClick={onStepBackHandler} />
          <Title text="Favorites" />
        </div>
        <div className={classNames(styles.favoritesWrapper)}>
          {favouritesList.length === 0 && (
            <p className={classNames(styles.noTtwrap)}>No items.</p>
          )}
          {favouritesList.map((book: IBook) => (
            <FavCard key={book.isbn13} book={book} />
          ))}
        </div>
        <Subscribe />
      </div>
    </div>
  );
}
