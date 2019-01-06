import React, { Component } from "react";
import { EditorState, Modifier } from "draft-js";

import { Cross } from "../../icons";
import "./styles.css";

const letters = [
  ["~", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "="],
  ["/", "'", "ק", "ר", "א", "ט", "ו", "ן", "ם", "פ", "\\"],
  ["ש", "ד", "ג", "כ", "ע", "י", "ח", "ל", "ך", "ף", ",", "]", "["],
  ["ז", "ס", "ב", "ה", "נ", "מ", "צ", "ת", "ץ", "."]
];

export default class VirtualKeyboard extends Component {
  enterTextInEditor = () => {
    const { editorState, onEditorStateChange } = this.props;
    const contentState = Modifier.replaceText(
      editorState.getCurrentContent(),
      editorState.getSelection(),
      event.target.id,
      editorState.getCurrentInlineStyle()
    );
    onEditorStateChange(
      EditorState.push(editorState, contentState, "insert-characters")
    );
  };

  render() {
    return (
      <div className="ji-keyboard-wrapper" onMouseDown={this.enterTextInEditor}>
        <button
          onClick={this.props.toggleVirtualKeyboard}
          className="ji-cross-btn"
        >
          <Cross />
        </button>
        {letters.map((row, index) => (
          <div key={`row-${index}`} className="ji-keyboard-row">
            {row.map(ch => (
              <span key={ch} className="ji-hebrew-char" id={ch}>
                {ch}
              </span>
            ))}
          </div>
        ))}
      </div>
    );
  }
}
