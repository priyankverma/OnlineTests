import React from "react";
import { Wrapper } from "./gradientButtonStyles";
function GradientButton(props) {
  const {
    buttonHeight,
    buttonWidth,
    onPress,
    title,
    opacity,
    disabled,
  } = props;
  return (
    <Wrapper
      data-testid="button"
      opacity={opacity}
      height={buttonHeight ? buttonHeight : "15px"}
      width={buttonWidth ? buttonWidth : "30%"}
      onClick={() => (disabled ? null : onPress())}
    >
      <b>{title}</b>
    </Wrapper>
  );
}

export default GradientButton;
