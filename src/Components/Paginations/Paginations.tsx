import ReactPaginate from "react-paginate";

import classNames from "classnames";
import styles from "./Pagination.module.css";

export function Paginate() {
  return (
    <>
      <ReactPaginate
        className={classNames(styles.pagination)}
        breakLabel="..."
        // nextLabel={<img src={Next} alt="next" />}
        // previousLabel={<img src={Prev} alt="prev" />}
        // onPageChange={pageChangeHandler}
        // pageRangeDisplayed={pageCount}
        // pageCount={pageCount}
        containerClassName="wrapper"
        pageClassName=""
        pageCount={0}
      />
    </>
  );
}
