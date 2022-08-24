import React, { FC } from "react";
import classNames from "classnames";
import styles from "./Title.module.css";

type TitleProps = {
  text?: string;
  isbn13?: string;
};

export const Title: FC<TitleProps> = (props) => {
  const { text } = props;
  return <div className={classNames(styles.main)}>{text}</div>;
};
