import React, { FC } from "react";
import classNames from "classnames";
import styles from "./Card.module.css";

import { useNavigate } from "react-router-dom";

import IconButton from "../IconButton/IconButton";
import { IconArrowLeft } from "../../Assets";
import { IBook } from "../../models";

type BookCardProps = {
  book: IBook;
};

const CardDetail: FC<BookCardProps> = (props) => {
  const { book } = props;
  const navigate = useNavigate();

  const onStepBackHandler = () => {
    navigate(-1);
  };

  return (
    <>
      <div className={classNames(styles.titleContainer)}>
        <IconButton icon={IconArrowLeft} onClick={onStepBackHandler} />
        <h1>{book.title}</h1>
      </div>
      <div className={classNames(styles.bookContainer)}>
        <div className={classNames(styles.imageContainer)}></div>
        <div className={classNames(styles.informContainer)}></div>
      </div>
    </>
  );
};
export default CardDetail;
