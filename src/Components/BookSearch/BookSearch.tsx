import styles from "../BookSearch/Search.module.css";
import React, { ChangeEvent, FC, useState } from "react";

import classNames from "classnames";
// import { useDebounce } from "../../Hooks/debounce";

const BookSearch: FC = () => {
  const [value, setValue] = useState("");
  // const debounced = useDebounce(value, 500);
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className={classNames(styles.search)}>
      <input
        className={classNames(styles.input)}
        type="text"
        placeholder="Search... "
        value={value}
        onChange={changeHandler}
        // onInput={KeyHandler}
      />
      {/* {dropdown && (
        <ul className={classNames(styles.search_ul)}>
          {isLoading && <p>Loading</p>}
          {data?.map((book) => (
            <li
              className={classNames(styles.search_li)}
              onClick={() => ClickHandler(book.title)}
              key={book.isbn13}
            >
              {book.title}
            </li>
          ))}
        </ul>
      )} */}
      <svg
        className={classNames(styles.icon)}
        enable-background="new 0 0 32 32"
        id="Glyph"
        version="1.1"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z"
          id="XMLID_223_"
        />
      </svg>
      {}
    </div>
  );
};
export default BookSearch;
