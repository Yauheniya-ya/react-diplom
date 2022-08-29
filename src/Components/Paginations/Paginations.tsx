import ReactPaginate from "react-paginate";

import classNames from "classnames";
import styles from "./Pagination.module.css";
import { Next, Prev } from "../../Assets";
import { useSelector } from "react-redux";
import { BooksSelectors } from "../../Redux/redusers/book";

export function Paginate() {
  return (
    <>
      <ReactPaginate
        className={classNames(styles.pagination)}
        breakLabel="..."
        nextLabel={<img src={Prev} alt="next" />}
        previousLabel={<img src={Next} alt="prev" />}
        // onPageChange={pageChangeHandler}
        // pageRangeDisplayed={pageCount}
        // pageCount={pageCount}
        containerClassName="wrapper"
        pageClassName=""
        pageCount={2}
      />
    </>
  );
}
