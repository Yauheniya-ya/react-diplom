import { FC } from "react";
import classNames from "classnames";
import styles from "./CardCart.module.css";

import { IBook } from "../../models";

type BookCardProps = {
  book: IBook;
  favourites: [];
};

export const CardCatr: FC<BookCardProps> = (props) => {
  const { book } = props;
  return <div className={classNames(styles.card_main)}>{book.authors}</div>;
};
