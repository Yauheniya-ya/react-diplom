import classNames from "classnames";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ErrorImg } from "../../Assets";
import { Card } from "../../Components/Card/Card";
import { Paginate } from "../../Components/Paginations/Paginations";
import Subscribe from "../../Components/Subscribe";
import { Title } from "../../Components/Title/Title";

import { IBook } from "../../models";
import { BooksSelectors, getBooks } from "../../Redux/redusers/book";
import styles from "./Main.module.css";

export function MainPage() {
  const booksList = useSelector(BooksSelectors.getBooks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div className={classNames(styles.Mainpage_wrapper)}>
      <div className={classNames(styles.Mainpage_container)}>
        <Title text=" New Releases Books" />
        <div className={classNames(styles.Mainpage_book)}>
          {booksList.length === 0 && (
            <>
              <div className={classNames(styles.Mainpageerr_book)}>
                <p className={classNames(styles.noTtwrap)}>No items.</p>
                <img src={ErrorImg} alt="Error api"></img>
              </div>
            </>
          )}
          {booksList?.map((book: IBook) => (
            <Card key={book.isbn13} book={book} />
          ))}
        </div>
        <Paginate />
        <Subscribe />
      </div>
    </div>
  );
}
