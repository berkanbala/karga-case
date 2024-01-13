import classNames from "classnames";
import styles from "./button.module.scss";

export const Button = (props) => {
  const { className, label, onClick, type, disabled } = props;

  return (
    <button
      onClick={onClick}
      className={classNames(styles.container, className, styles[className])}
      disabled={disabled}
      type={type}
    >
      {label}
    </button>
  );
};
