import { FC } from "react";
import styles from "./text.module.css";
import { TextProps } from "./text.props";

const Text: FC<TextProps> = ({ text }) => {
  return <p className={styles.text}>{text}</p>;
};

export default Text;
  