import { fireEvent, render, screen } from "@testing-library/react";
import * as React from "react";
import LoginScreen from "./../loginScreen";
import { Provider } from "react-redux";
import { store } from "./../../../App";
import renderer from "react-test-renderer";

describe("Login Component", () => {
  let LoginComponent = (
    <Provider store={store}>
      <LoginScreen />
    </Provider>
  );
  // render(LoginComponent);
  test("username textInput must set username correctly", () => {
    render(LoginComponent);
    const usernameInput = screen.getByPlaceholderText("eg: john.doe");
    expect(usernameInput).toHaveValue(""); // checks for initial value to be ""

    fireEvent.change(usernameInput, { target: { value: "testName" } });
    expect(usernameInput).toHaveValue("testName"); // checks by passing a value testName
  });

  test("password textInput must set password correctly", () => {
    render(LoginComponent);
    const passwordInput = screen.getByPlaceholderText("Password");
    expect(passwordInput).toHaveValue(""); // checks for initial value to be ""

    fireEvent.change(passwordInput, { target: { value: "testPassword" } });
    expect(passwordInput).toHaveValue("testPassword"); // checks by passing a value testPassword
  });

  it("matches snapshot perfectly for loginscreen", () => {
    const tree = renderer.create(LoginComponent).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
