import React from "react";
import { withNotes } from "@storybook/addon-notes";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "../components/Button";
import withTest from "../tests/withTests";

storiesOf("Button", module)
  .addDecorator(withTest('index'))
  .add("with text", withNotes("something note")(() => <Button onClick={action("clicked")}>Hello Button</Button>))
  .add("with some emoji", () => <Button onClick={action("clicked")}>😀 😎 👍 💯</Button>);
