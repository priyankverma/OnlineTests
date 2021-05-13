import React from "react";
import logo from "./../../assets/images/logo.png";
import { Wrapper, RowDiv } from "./headerStyles";
import { useHistory } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";

export const Header = (props) => {
  const { userInfo, testid } = props;
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  let dateToUse = new Date().toLocaleDateString("en-US", options);
  const history = useHistory();

  return (
    <Wrapper data-testid={testid}>
      <RowDiv
        canbeHidden={true}
        // style={{ backgroundColor: "green" }}
        flex={0.2}
        onClick={() => history.push("/users")}
      >
        <img alt={{}} src={logo} />
      </RowDiv>

      <RowDiv flex={0.6} onClick={() => history.push("/about")}>
        <b>{dateToUse}</b>
      </RowDiv>

      <RowDiv
        justifyContent="center"
        flex={0.2}
        onClick={() => history.push("/home")}
        paddingRight={"20px"}
      >
        <b>
          <UserOutlined /> {" " + userInfo}
        </b>
      </RowDiv>
    </Wrapper>
  );
};

export default Header;
