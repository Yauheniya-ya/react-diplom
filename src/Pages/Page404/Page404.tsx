import { FC } from "react";
import classNames from "classnames";

import styles from "./Page404.module.css";
import { ErrorImg } from "../../Assets";

const Page404: FC = () => {
  return (
    <div className={classNames(styles.pageWrapper)}>
      <div className={classNames(styles.pageContainet)}>
        <img src={ErrorImg} alt="Not Found" />
      </div>
    </div>
  );
};

export default Page404;
