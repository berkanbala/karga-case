import styles from "./input.module.scss";

export const Input = (props) => {
  const {
    type,
    placeholder,
    className,
    onChange,
    value,
    required,
    id,
    readOnly,
  } = props;
  return (
    <div className={styles.container}>
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
        value={value}
        required={required}
        id={id}
        readOnly={readOnly}
      />
    </div>
  );
};
