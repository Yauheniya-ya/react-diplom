import { FC, ForwardedRef } from "react";
import classNames from "classnames";
import styles from "./Input.module.css";

type InputProps = {
  ref?: ForwardedRef<HTMLInputElement>;
  type: string;
  value?: string | number;
  onChange: any;
  placeholder?: string;
  onKeyDown?: any;
  onInput?: any;
  className?: string;
};

export const Input: FC<InputProps> = ({
  ref,
  type,
  value,
  onChange,
  placeholder,
  onKeyDown,
  onInput,
}) => {
  // const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   onChange(event.target.value);
  // };
  return (
    <input
      ref={ref}
      type={type}
      value={value}
      onChange={onChange}
      className={classNames(styles.input)}
      placeholder={placeholder}
      onKeyDown={onKeyDown}
      onInput={onInput}
    />
  );
};

export default Input;
