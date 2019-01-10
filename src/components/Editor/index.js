import React, { Component } from "react";
import PropTypes from "prop-types";
import { Editor } from "react-draft-wysiwyg";
import {
  EditorState,
  convertToRaw,
  convertFromRaw,
  ContentState
} from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import KeyboardButton from "../KeyboardButton";
import VirtualKeyboard from "../VirtualKeyboard";
import "./styles.css";

const TOOLBAR_CONFIG = {
  options: ["inline", "textAlign", "colorPicker", "fontFamily", "fontSize"],
  inline: {
    options: ["bold", "italic", "underline"]
  }
};

const convertFromHtml = html => {
  const blocksFromHTML = htmlToDraft(html);
  const { contentBlocks, entityMap } = blocksFromHTML;
  return ContentState.createFromBlockArray(contentBlocks, entityMap);
};

export default class JiEditor extends Component {
  getInitialState = () => {
    const { defaultValue } = this.props;
    if (!defaultValue) return EditorState.createEmpty();
    const contentState =
      typeof defaultValue !== "string"
        ? convertFromRaw(defaultValue)
        : convertFromHtml(defaultValue);
    return EditorState.createWithContent(contentState);
  };

  state = { virtualKeyboard: false, editorState: this.getInitialState() };

  updateEditorState = editorState => {
    this.setState({ editorState });
    const raw = convertToRaw(editorState.getCurrentContent());
    const html = draftToHtml(raw);
    this.props.onChange({ raw, html });
  };

  toggleVirtualKeyboard = () => {
    const virtualKeyboard = !this.state.virtualKeyboard;
    this.setState({ virtualKeyboard });
  };

  render() {
    const { virtualKeyboard, editorState } = this.state;
    return (
      <div className="ji-editor-wrapper">
        <Editor
          editorClassName="ji-editor"
          editorState={editorState}
          onEditorStateChange={this.updateEditorState}
          toolbar={TOOLBAR_CONFIG}
          wrapperClassName="ji-wrapper"
          toolbarCustomButtons={[
            <KeyboardButton onClick={this.toggleVirtualKeyboard} />
          ]}
        />
        {virtualKeyboard && (
          <VirtualKeyboard
            editorState={editorState}
            onEditorStateChange={this.updateEditorState}
            toggleVirtualKeyboard={this.toggleVirtualKeyboard}
          />
        )}
      </div>
    );
  }
}

JiEditor.proptypes = {
  defaultValue: PropTypes.any,
  onChange: PropTypes.func
};
