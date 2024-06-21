import styles from "./input.module.scss";

export const Input = (props) => {
  const { type, placeholder, className, onChange, value, required, name } =
    props;

  return (
    <div className={styles.container}>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
        value={value}
        required={required}
      />
    </div>
  );
};
