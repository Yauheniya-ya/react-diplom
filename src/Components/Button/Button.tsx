import React, { FC } from "react";
import classNames from "classnames";

import styles from "./Button.module.css";

type ButtonProps = {
  title: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: string;
};

const Button: FC<ButtonProps> = (props) => {
  const { title, onClick, className } = props;
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
