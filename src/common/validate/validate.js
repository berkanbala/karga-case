export const validate = (props) => {
  if (
    props.text === "" ||
    props.phone === "" ||
    props.message === "" ||
    props.checkbox === ""
  ) {
    return false;
  }
  return true;
};
