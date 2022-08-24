import classNames from "classnames";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IconArrowLeft } from "../../Assets";
import { Card } from "../../Components/Card/Card";
import IconButton from "../../Components/IconButton/IconButton";
import Subscribe from "../../Components/Subscribe";
import { Title } from "../../Components/Title/Title";
import { IBook } from "../../models";
import { BooksSelectors } from "../../Redux/redusers/book";

import styles from "./FavPage.module.css";

export function FavouritesPage() {
  const navigate = useNavigate();
  const onStepBackHandler = () => {
    navigate(-1);
  };
  const favouritesList = useSelector(BooksSelectors.getFavBooks);
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
            <Card key={book.isbn13} book={book} />
          ))}
        </div>
        <Subscribe />
      </div>
    </div>
  );
}
