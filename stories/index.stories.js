import React, { PureComponent } from "react";
import { storiesOf } from "@storybook/react";

import { default as JiEditor } from "../src/components/Editor";

class DemoEditor extends PureComponent {
  state = { editorContent: {} };

  updateEditorContent = editorContent => {
    this.setState({ editorContent });
  };

  render() {
    const { editorContent } = this.state;
    return (
      <React.Fragment>
        <JiEditor
          defaultValue={"<p>testing</p>"}
          onChange={this.updateEditorContent}
          fontFamily={[
            "Assistant",
            "Varela Round",
            "David Libre",
            "Frank Ruhl Libre"
          ]}
        />
        <pre>{JSON.stringify(editorContent.raw, undefined, 4)}</pre>
        <pre>{editorContent.html}</pre>
      </React.Fragment>
    );
  }
}

storiesOf("JI Wysiwyg Editor", module).add("simple editor", () => (
  <DemoEditor />
));
