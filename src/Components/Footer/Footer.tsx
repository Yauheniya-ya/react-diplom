import { FC } from "react";
import classNames from "classnames";

import styles from "./Footer.module.css";

const Footer: FC = () => {
  return (
    <div className={classNames(styles.footerWrapper)}>
      <div className={classNames(styles.userframe)}></div>
      <div className={classNames(styles.infoWrapper)}>
        <span>©2022 Bookstore</span>
        <span>All rights reserved</span>
      </div>
    </div>
  );
};

export default Footer;
