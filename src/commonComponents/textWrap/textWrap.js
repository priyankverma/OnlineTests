import { Wrapper, TextWrap, styles } from "./textWrapStyles";
import { Checkbox } from "antd";
import React, { useState } from "react";
function TextWrapper(props) {
  const [checkVal, setcheckVal] = useState(false);
  const { title, placeHolder, type, height, onChangeText, testId } = props;

  return (
    <Wrapper>
      <h4>{title}</h4>
      <TextWrap
        data-testid={testId}
        onChange={(text) => onChangeText(text)}
        height={height ? height : "30px"}
        marginBottom={type === "password" ? "3%" : 0}
        placeholder={placeHolder}
        type={!checkVal || placeHolder === "Confirm Password" ? type : "text"}
        name="name"
      />

      {type === "password" && placeHolder !== "Confirm Password" ? (
        <Checkbox style={styles} onChange={() => setcheckVal(!checkVal)}>
          {" "}
          Show Password
        </Checkbox>
      ) : null}
    </Wrapper>
  );
}

export default TextWrapper;
