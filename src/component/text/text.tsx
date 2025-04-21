import { FC } from "react";
import './text.css'
import { TextProps } from "./text.props";

const Text: FC<TextProps> = ({ text }) => {
  return <p className="text">{text}</p>;
};

export default Text;
  