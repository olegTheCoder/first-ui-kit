import React, { FC } from "react";
import "./MyInput.css";

type Props = {
  isBig: boolean;
  placeholder: string;
  label: string;
};

const MyInput: FC<Props> = ({ isBig, placeholder, label, ...props }) => {
  const rootClasses = ["myInput"];
  if (isBig) rootClasses.push("isBig");

  return (
    <label>
      {label}
      <input
        placeholder={placeholder}
        {...props}
        className={rootClasses.join(" ")}
      />
      ;
    </label>
  );
};

export default MyInput;
