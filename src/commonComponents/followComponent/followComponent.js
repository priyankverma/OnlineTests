import React from "react";
import twitterImage from "../../assets/images/twitter.png";
import fbImage from "../../assets/images/facebook.png";
import { Wrapper, ContentWrapper, ButtonWrap } from "./followCompStyles";
import FollowButton from "./followButton";
const FollowComponent = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <hr />
        <b>FOLLOW US ON</b>
        <hr />
      </ContentWrapper>
      <ButtonWrap>
        <FollowButton
          buttonTitle="Twitter"
          link="https://twitter.com/3pillarglobal?lang=en"
          buttonImage={twitterImage}
          textColor="#69abe1"
        />
        <FollowButton
          buttonTitle="Facebook"
          link="https://www.facebook.com/3PillarGlobalIndia/"
          buttonImage={fbImage}
          textColor="#527ef6"
        />
      </ButtonWrap>
    </Wrapper>
  );
};

export default FollowComponent;
