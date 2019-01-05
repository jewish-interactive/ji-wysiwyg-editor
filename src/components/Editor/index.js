import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const TOOLBAR_CONFIG = {
  options: ["inline", "textAlign", "colorPicker", "fontFamily", "fontSize"],
  inline: {
    options: ["bold", "italic", "underline"]
  }
};

export default () => <Editor toolbar={TOOLBAR_CONFIG} />;
