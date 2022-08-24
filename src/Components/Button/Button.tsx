import React, { FC } from "react";
import classNames from "classnames";

import styles from "./Button.module.css";

type ButtonProps = {
  title: string;
  className?: string;
  onClick: () => void;
  type: string;
};

const Button: FC<ButtonProps> = ({ title, className, onClick, type }) => {
  return (
    <button
      className={classNames(styles.button, className)}
      onClick={onClick}
      type="submit"
    >
      {title}
    </button>
  );
};

export default Button;
