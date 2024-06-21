import styles from "./checkbox.module.scss";

export const Checkbox = (props) => {
  const { name, checked, onChange } = props;
  return (
    <div className={styles.container}>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
      />
    </div>
  );
};
