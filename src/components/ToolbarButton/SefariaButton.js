import React from "react";
import { Sefaria } from "../../icons";

const SefariaButton = ({ onClick }) => (
  <a
    className="ji-toolbar-btn-wrapper"
    href="https://www.sefaria.org/texts"
    onClick={onClick}
    target="blank"
  >
    <Sefaria />
  </a>
);

export default SefariaButton;
