import React from 'react';
import Button from "./index";
import renderer from 'react-test-renderer';
it("first test", () => {
  const tree = renderer.create(<Button />).toJSON();
  expect(tree).toMatchSnapshot();
});