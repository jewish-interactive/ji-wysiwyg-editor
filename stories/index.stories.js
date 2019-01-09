import React from "react";
import { storiesOf } from "@storybook/react";

import { default as JiEditor } from "../src/components/Editor";

storiesOf("JI Wysiwyg Editor", module).add("simple editor", () => <JiEditor />);
