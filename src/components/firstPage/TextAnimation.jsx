import React, { useEffect, useState } from "react";
import { Cursor, Typewriter } from "react-simple-typewriter";
import RandomColor from "./CustomHock";
import style from "./firstPage.module.css";

const TextAnimation = () => {
  const { boxColor } = RandomColor();

  return (
    <div
      style={boxColor == "#FAE053" ? { color: "black" } : { color: boxColor }}
    >
      <Typewriter
        words={[
          `Everywhere Online`,
          "on a Website",
          "on  Facebook",
          "on  Instagram",
          "on  TikTok",
          "on  Google",
          "on  Amazon",
        ]}
        loop={{}}
        cursor
        cursorColor={boxColor}
      />
    </div>
  );
};

export default TextAnimation;
