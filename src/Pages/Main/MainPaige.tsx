import classNames from "classnames";
import { useEffect } from "react";
// import ReactPaginate from "react-paginate";
import { useSelector, useDispatch } from "react-redux";
import { ErrorImg } from "../../Assets";
import { Card } from "../../Components/Card/Card";
import { Paginate } from "../../Components/Paginations/Paginations";
import Subscribe from "../../Components/Subscribe";
import { Title } from "../../Components/Title/Title";

import { IBook } from "../../models";
import { BooksSelectors, getBooks } from "../../Redux/redusers/book";
import styles from "./Main.module.css";

// const ITEMS_PER_PAGE = 12;

export function MainPage() {
  const booksList = useSelector(BooksSelectors.getBooks);

  // const pageCount = 12;
  // const [page] = useState(1);
  // const pageChangeHandler = ({selected}:{selected: number}) =>{

  // };

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
        {/* <ReactPaginate
          className={classNames(styles.pagination)}
          breakLabel="..."
          nextLabel={<img src={Prev} alt="next" />}
          previousLabel={<img src={Next} alt="prev" />}
          onPageChange={pageChangeHandler}
          pageRangeDisplayed={pageCount}
          containerClassName="wrapper"
          pageClassName=""
          pageCount={2}
        /> */}
        <Subscribe />
      </div>
    </div>
  );
}
