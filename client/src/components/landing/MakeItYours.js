import React from 'react';

import MakeItYoursPng from '../../assets/incentive-breaker.jpg';
import styled from 'styled-components';

const MakeItYoursWrapper = styled.div`
    width: 100%;
    margin: 0px auto;
    background-color: rgb(248, 248, 248);
    max-width: 1680px;
    box-sizing: border-box;
    display: block;
`;

const MakeItYoursInner = styled.div`
    max-width: 100%;
    width: 100%;
    margin: 0 auto;
    padding: 4vw 0 0;
    background-color: #F8F8F8;
    box-sizing: border-box;
    display: block;
`;

const MakeItYoursContainer = styled.div`
    padding: 0;
    width: 100%;
    box-sizing: border-box;
    display: block;
`;

const ImageWrapper = styled.div`
    width: 100%;
    padding: 2vw 0;
    display: flex;
    position: relative;
    overflow: hidden;
    max-height: 630px;
    align-items: center;
    box-sizing: border-box;
`;

const TextContentWrapper = styled.div`
    align-self: center;
    order: 1;
    flex: 1 1 50%;
    width: 100%;
    display: flex;
    padding: 0;
    position: static;
    justify-content: flex-start;
    box-sizing: border-box;
`;

const ImageContainer = styled.div`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    box-sizing: border-box;
    display: block; 
`;

const Overlay = styled.div`
    background-image: linear-gradient(0.25turn, transparent 0%, rgba(15, 17, 23, 0.5) 40%, rgba(15, 17, 23, 0.75) 65%, rgb(15, 17, 23) 95%);
    top: 0;
    left: 0;
    right: 0;
    bottom: -5px;
    position: absolute;
    box-sizing: border-box;
    display: block; 
`;

const TextContainer = styled.div`
    color: rgb(255, 255, 255);
    justify-content: center;
    margin: 3vw;
    width: 100%;
    display: flex;
    position: relative;
    align-items: flex-start;
    padding-bottom: 10px;
    flex-direction: column;
    box-sizing: border-box;
`;

const BackgroundImage = styled.img`
    filter: blur(0px);
    transition: filter 500ms linear 0s;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 0;
    display: inline-block;
    max-width: 100%;
    vertical-align: middle;
`;

const BreakerContainer = styled.div`
    background-color: transparent !important;
    flex: 1 1 50%;
    display: flex;
    padding: 12px;
    position: relative;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
`;

const Breaker = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
`;

const Headline = styled.div`
    font-size: .63em;
    font-family: Trade Gothic LT Extended;
    font-weight: 700;
    line-height: 1.63;
    letter-spacing: .1em;
    text-transform: uppercase;
    margin: 0 0 10px 0;
    box-sizing: border-box;
    display: block; 
`;

const Title = styled.h1`
    color: #fff;
    font-size: 4.38em;
    margin-bottom: 10px;
    font-weight: 700;
    font-family: Trade Gothic LT;
    line-height: 1.06;
    margin-left: -.02em;
    letter-spacing: -0.03em;
    text-transform: uppercase;
    margin: 0 0 10px 0;
    padding: 0;

    margin-block-start: 1em;
    margin-block-end: 1em;
`;

const SubtitleDesc = styled.div`
    opacity: 0.5;
    font-size: 14px;
    width: 60%;
    margin: 0 0 22px 0;
    box-sizing: border-box;
    display: block;
`;

const ButtonContainer = styled.div`
    width: 100%;
    margin: 0 0 10px 0;
    overflow: hidden;
    box-sizing: border-box;
    display: block;
`;

const ButtonInnerContainer = styled.div`
    margin: -8px;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
`;

const LoginContainer = styled.div`
    flex: 0 1 150px;
    margin: 8px;
    white-space: nowrap;
    height: 48px;
    background-color: #fff;
    border-radius: 2px;
    border: 1px solid #fff;
    cursor: pointer;
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    &:hover {
        opacity: 0.75;
    }
`;

const LoginContents = styled.div`
    padding-top: 10px;
    padding-bottom: 10px;
    height: 100%;
    display: flex;
    text-align: center;
    align-items: center;
    line-height: 1.2;
    padding-left: 30px;
    padding-right: 30px;
    justify-content: center;
    box-sizing: border-box;
`;

const LoginText = styled.span `
    font-size: .75em;
    font-family: Trade Gothic LT Extended;
    font-weight: 700;
    line-height: 1.75;
    letter-spacing: .1em;
    text-transform: uppercase;
    color: #202020;
    box-sizing: border-box;
`;

const SignUpContainer = styled.div`
    flex: 0 1 150px;
    margin: 8px;
    white-space: nowrap;
    height: 48px;
    background-color: transparent;
    border-radius: 2px;
    border: 1px solid #fff;
    cursor: pointer;
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    &:hover {
        box-shadow: inset 0 0 0 1px #fff;
        background-color: rgba(255,255,255,0.1);
    }
`;

const SignUpContents = styled.div`
    padding-top: 10px;
    padding-bottom: 10px;
    height: 100%;
    display: flex;
    text-align: center;
    align-items: center;
    line-height: 1.2;
    padding-left: 30px;
    padding-right: 30px;
    justify-content: center;
    box-sizing: border-box;
`;

const SignUpText = styled.span`
    font-size: .75em;
    font-family: Trade Gothic LT Extended;
    font-weight: 700;
    line-height: 1.75;
    letter-spacing: .1em;
    text-transform: uppercase;
    color: #fff;
    box-sizing: border-box;
`;

const MakeItYours = props => {
    return(
        <MakeItYoursWrapper>
            <MakeItYoursInner>
                <MakeItYoursContainer>
                    <ImageWrapper>
                        <TextContentWrapper>
                            <ImageContainer>
                                <Overlay></Overlay>
                                <BackgroundImage src={MakeItYoursPng} />
                            </ImageContainer>
                            <TextContainer>
                                <Headline>JOIN THE COMMUNITY</Headline>
                                <Title>MAKE IT YOURS</Title>
                                <SubtitleDesc>
                                With a Bethesda.net account, you can customize your experience by following games, videos, and other content.
                                </SubtitleDesc>
                                <ButtonContainer>
                                    <ButtonInnerContainer>
                                        <LoginContainer>
                                            <LoginContents>
                                                <LoginText>Log In</LoginText>
                                            </LoginContents>
                                        </LoginContainer>
                                        <SignUpContainer>
                                            <SignUpContents>
                                                <SignUpText>Sign Up</SignUpText>
                                            </SignUpContents>
                                        </SignUpContainer>
                                    </ButtonInnerContainer>
                                </ButtonContainer>
                            </TextContainer>
                        </TextContentWrapper>
                        <BreakerContainer>
                            <Breaker></Breaker>
                        </BreakerContainer>
                    </ImageWrapper>
                </MakeItYoursContainer>
            </MakeItYoursInner>
        </MakeItYoursWrapper>
    );
}

export default MakeItYours;