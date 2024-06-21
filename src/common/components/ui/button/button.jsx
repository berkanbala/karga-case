import classNames from "classnames";
import styles from "./button.module.scss";

export const Button = (props) => {
  const {
    className,
    label,
    onClick,
    type,
    disabled,
    readOnly,
    required,
    checked,
  } = props;

  return (
    <button
      onClick={onClick}
      className={classNames(styles.container, className, styles[className])}
      disabled={disabled}
      type={type}
      checked={checked}
      required={required}
      readOnly={readOnly}
    >
      {label}
    </button>
  );
};
