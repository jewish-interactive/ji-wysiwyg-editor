import React from "react";
import { Keyboard } from "../../icons";

const KeyboardButton = ({ onClick }) => (
  <button className="ji-toolbar-btn-wrapper" onClick={onClick}>
    <Keyboard />
  </button>
);

export default KeyboardButton;
