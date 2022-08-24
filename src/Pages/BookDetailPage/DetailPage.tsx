import { FC, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import classNames from "classnames";
import styles from "./Detail.module.css";
import {
  IconArrowLeft,
  IconArrowSmall,
  IconArrowRightSmall,
} from "../../Assets";
import IconButton from "../../Components/IconButton/IconButton";
import Subscribe from "../../Components/Subscribe";
import { Title } from "../../Components/Title/Title";
import {
  BooksSelectors,
  getBooks,
  setSelectedBook,
} from "../../Redux/redusers/book";
import { useDispatch, useSelector } from "react-redux";
import PageCard from "../../Components/Book/PageCard";

const BookPage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const book = useSelector(BooksSelectors.getSelectedBook);
  const { isbn13 } = useParams<{ isbn13: string }>();
  const onStepBackHandler = () => {
    navigate(-1);
  };
  useEffect(() => {
    dispatch(setSelectedBook(isbn13));
  }, [dispatch, isbn13]);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  return (
    <div className={classNames(styles.detailbook_wrapper)}>
      <div className={classNames(styles.bookPageContainer)}>
        <div className={classNames(styles.Detailpage_title)}>
          <IconButton icon={IconArrowLeft} onClick={onStepBackHandler} />
          <Title text={book?.title ?? "Detail Page"} />
        </div>
        <PageCard />
        <Subscribe />

        <div className={classNames(styles.secondTitleContainer)}>
          <h2>SIMILAR BOOKS</h2>
          <div className={classNames(styles.arrowsWrapper)}>
            <IconButton icon={IconArrowSmall} onClick={() => {}} />
            <IconButton icon={IconArrowRightSmall} onClick={() => {}} />
          </div>
        </div>
        <div className={classNames(styles.popularBooksContainer)}></div>
      </div>
    </div>
  );
};

export default BookPage;
