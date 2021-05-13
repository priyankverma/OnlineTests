import React from "react";
import { Wrapper, TextContent } from "./followButtonStyles";
const FollowButton = (props) => {
  const { buttonTitle, link, buttonImage, textColor } = props;
  return (
    <Wrapper onClick={() => window.open(link, "_blank", "resizable=yes")}>
      <TextContent textColor={textColor}>
        <img alt={{}} src={buttonImage} />
        {buttonTitle}
      </TextContent>
    </Wrapper>
  );
};

export default FollowButton;
