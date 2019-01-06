import React from "react";
import { Keyboard } from "../../icons";
import "./styles.css";

const KeyboardButton = ({ onClick }) => (
  <button className="ji-keyboard-btn-wrapper" onClick={onClick}>
    <Keyboard />
  </button>
);

export default KeyboardButton;
