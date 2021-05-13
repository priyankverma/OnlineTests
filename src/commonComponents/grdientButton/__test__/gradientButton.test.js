import React from "react";
import ReactDOM from "react-dom";
import GradientButton from "../gradientButton";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<GradientButton></GradientButton>, div);
});

it("renders correctly", () => {
  const { getByTestId } = render(
    <GradientButton title="Continue"></GradientButton>
  );
  expect(getByTestId("button")).toHaveTextContent("Continue");
});

it("renders correctly", () => {
  const { getByTestId } = render(
    <GradientButton title="Proceed"></GradientButton>
  );
  expect(getByTestId("button")).toHaveTextContent("Proceed");
});

it("Matches Snapshot Continue", () => {
  const tree = renderer
    .create(<GradientButton title="Continue"></GradientButton>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
it("Matches Snapshot Proceed", () => {
  const tree = renderer
    .create(<GradientButton title="Proceed"></GradientButton>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
