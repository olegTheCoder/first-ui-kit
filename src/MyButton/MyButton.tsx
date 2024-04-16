import React, { FC } from "react";
import "./MyButton.css";

type Props = {
  children: string;
  color: string;
  isBig?: boolean;
};

const MyButton: FC<Props> = ({ children, color, isBig, ...props }) => {
  const rootClasses = ["myButton"];
  if (isBig) rootClasses.push("isBig");

  return (
    <button {...props} style={{ color }} className={rootClasses.join(" ")}>
      {children}
    </button>
  );
};

export default MyButton;
