import { FC } from "react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

import styles from "./Cart.module.css";

import { IconArrowLeft } from "../../Assets";
import IconButton from "../../Components/IconButton/IconButton";
import { Title } from "../../Components/Title/Title";

const CartPage: FC = () => {
  const navigate = useNavigate();
  const onStepBackHandler = () => {
    navigate(-1);
  };

  return (
    <div className={classNames(styles.cartContainer)}>
      <div className={classNames(styles.cartWrapper)}>
        <div className={classNames(styles.Detailpage_title)}>
          <IconButton icon={IconArrowLeft} onClick={onStepBackHandler} />
          <Title text="Your Cart" />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
