import React, { useEffect } from "react";
import classNames from "classnames";
import styles from "./PageCard.module.css";
import { IBook } from "../../models";
import { Heart, FBIcon, TwitterIcon, MoreIcon } from "../../Assets";
import {
  BooksSelectors,
  getBooks,
  setFavBooks,
} from "../../Redux/redusers/book";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button";
import IconButton from "../IconButton/IconButton";
import StarRating from "../StarRating/StarRating";

const PageCard = () => {
  const dispatch = useDispatch();
  const book = useSelector(BooksSelectors.getSelectedBook);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const addToFavHandler = (book: IBook) => {
    dispatch(setFavBooks(book));
    alert("Added to Favorites!");
  };

  return (
    <>
      <div className={classNames(styles.pageCardWrapper)}>
        <div className={classNames(styles.bookInfoContainer)}>
          <div className={classNames(styles.bookImageContainer)}>
            <div className={classNames(styles.bookBackground)}>
              <img src={book?.image} alt="book-preview" />
              <div>
                <IconButton
                  icon={Heart}
                  onClick={() => {
                    addToFavHandler(book!);
                  }}
                />
              </div>
            </div>
          </div>
          <div className={classNames(styles.bookInfoWrapper)}>
            <div className={classNames(styles.dividerLineSmall)}></div>
            <div className={classNames(styles.detailsWrapper)}>
              <div className={classNames(styles.priceWrapper)}>
                {book?.price}
              </div>
              {/* <div>{book?.rating}</div> */}
              {/* <StarRating rating={book?.rating} /> */}
            </div>

            <div className={classNames(styles.detailsWrapper)}>
              <p className={classNames(styles.textWrapper)}>Authors</p>
              <div className={classNames(styles.authorWrapper)}>
                {book?.authors}
              </div>
            </div>

            <div className={classNames(styles.detailsWrapper)}>
              <p className={classNames(styles.textWrapper)}>Publisher</p>
              <div>{book?.publisher}</div>
            </div>

            <div className={classNames(styles.detailsWrapper)}>
              <p className={classNames(styles.textWrapper)}>Language</p>
              <p>English</p>
            </div>

            <div className={classNames(styles.detailsWrapper)}>
              <p className={classNames(styles.textWrapper)}>Format</p>
              <p>Paper book / ebook (PDF)</p>
            </div>
            <p>More details...</p>
            <Button
              title="ADD TO CART"
              onClick={() => {}}
              className={classNames(styles.buttonWrapper)}
              type={""}
            />
            <div className={classNames(styles.previewWrapper)}>
              <a href={book?.url} target="_blank" rel="noreferrer">
                Preview book
              </a>
            </div>
          </div>
        </div>

        <div className={classNames(styles.titlesWrapper)}>
          <div className={classNames(styles.oneTitleWrapper)}>
            <p>Description</p>
            <div className={classNames(styles.dividerLine)}></div>
          </div>

          <p>Authors</p>
          <p>Reviews</p>
        </div>

        <div className={classNames(styles.descWrapper)}>{book?.desc}</div>

        <div className={classNames(styles.IconsWrapper)}>
          <IconButton icon={FBIcon} onClick={() => {}} />
          <IconButton icon={TwitterIcon} onClick={() => {}} />
          <IconButton icon={MoreIcon} onClick={() => {}} />
        </div>
      </div>
    </>
  );
};
export default PageCard;
