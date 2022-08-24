import { FC } from "react";
import classNames from "classnames";
import styles from "./IconButton.module.css";

type IconButtonProps = {
  icon: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const IconButton: FC<IconButtonProps> = (props) => {
  const { icon, onClick } = props;

  return (
    <button onClick={onClick} className={classNames(styles.iconLogo)}>
      <img src={icon} alt="icon" />
    </button>
  );
};
export default IconButton;
