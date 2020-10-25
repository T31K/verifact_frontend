import React, { useState } from "react";
import styled from "styled-components";
import { IoMdCloseCircle } from "react-icons/io";

const close = (isVisible, setIsVisible) => {
  setIsVisible(!isVisible);
}

export default function Hero(props) {
  const [isVisible, setIsVisible] = useState(true)
  const welcomeTitle = "Your home for verifying credible news"
  const welcomeContent = "Post a question to our community of news sleuths to get answers and new perspectives about the news your reading"

  return <>{isVisible ? (<Wrapper>
    <HeaderWrapper>
      <Button onClick={() => close(isVisible, setIsVisible)}><IoMdCloseCircle style={{ fontSize: '20px' }} /></Button>
    </HeaderWrapper>
    <ContentWrapper>
      <h1>{welcomeTitle}</h1>
      <p>{welcomeContent}</p>
    </ContentWrapper>
  </Wrapper>) : null}</>
    ;
}

const Button = styled.button`
  background: none;
  border: none;
`;

const HeaderWrapper = styled.div`
  height: 54px;
  text-align: right;
  padding-right: 15px;
  padding-top: 17px;
  padding-bottom: 17px;
`;

const ContentWrapper = styled.div`
  display: grid;
  justify-items: center;
  text-align: center;
  padding-top: 80px;
  padding-bottom: 118px;
  @media only screen and (max-width: 600px){
    padding-top: 0;
    padding-bottom: 0;
  }
`;

const Wrapper = styled.div`
  background: #FFB800;
`;