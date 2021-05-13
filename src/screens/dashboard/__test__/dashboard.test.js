import { render } from "@testing-library/react";
import * as React from "react";
import { Provider } from "react-redux";
import { store } from "./../../../App";
import { Dashboard } from "../dashboard";
import { shallow } from "./../../../utils/enzyme";
import { NextButton } from "../dashboardStyles";
import renderer from "react-test-renderer";

describe("Login Component", () => {
  let DashComponent = (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );

  it("renders header correctly", () => {
    const { getByTestId } = render(DashComponent);
    expect(getByTestId("headerComponent")).toBeVisible();
  });

  it("previous button is initially disabled", () => {
    const { getByText } = render(DashComponent);
    expect(getByText(/Previous/i).closest("button")).toBeDisabled();
  });
  it("next button is initially enabled", () => {
    const { getByText } = render(DashComponent);
    expect(getByText(/Next/i).closest("button")).toBeEnabled();
  });
  it("submit button is always enabled", () => {
    const { getByText } = render(DashComponent);
    expect(getByText(/Submit/i).closest("button")).toBeEnabled();
  });
  it("next button is disabled on swiping to last question", () => {
    const { getByText } = render(DashComponent);
    expect(getByText(/Next/i).closest("button")).toBeEnabled();
  });

  it("custom button click event works fine", () => {
    const mockCallBack = jest.fn();

    const button = shallow(<NextButton onClick={mockCallBack}>Ok!</NextButton>);
    button.find("button").simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  it("props are not available initially", () => {
    const wrapper = shallow(DashComponent);
    expect(wrapper.prop("questionSet")).toBeUndefined();
  });
  it("matches snapshot perfectly", () => {
    const tree = renderer.create(DashComponent).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
