import React from 'react';

import Chats from '../../../assets/icons8-speech-bubble-24 (2).png';
import Coment from '../../../assets/icons8-comments-24.png';
import SnapFourImg from '../../../assets/c04d6c2a-1cfc-4601-877b-622f12af73ca.jpg';
import ProfilePic from '../../../assets/69a61c5f-9164-471f-9d9d-b36094b3a75b.JPG';
import styled from 'styled-components';

const SnapFourWrapper = styled.div`
    padding: 12px;
    flex-grow: 0;
    max-width: 50%;
    flex-basis: 50%;
    margin: 0;
    box-sizing: border-box;
    display: block;
`;

const SnapFourInnerWrapper = styled.div`
    width: 100%;
    max-width: 100%;
    max-height: 469.975px;
    height: 28vw;
    overflow: hidden;
    border-radius: 4px;
    display: flex;
    transition: all 0.2s ease-in-out;
    box-sizing: border-box;
    &:hover {
        cursor: pointer;
        position: relative;
        transform: translateY(-6px);
        box-shadow: 0px 3px 15px rgba(0,0,0,0.5);
        width: 100%;
        max-width: 100%;
        max-height: 469.975px;
        height: 28vw;
        overflow: hidden;
        border-radius: 4px;
        display: flex;
        transition: all 0.2s ease-in-out;
        box-sizing: border-box;
    }
`;

const SnapFourContainer = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: block;
`;

const CardContent = styled.div`
    width: 100%;
    height: 100%;
    display: inline-block;
    position: relative;
    box-sizing: border-box;
`;

const ImageWrapper = styled.div`
    background-image: none;
    min-height: unset;
    top: 0;
    width: 100%;
    position: absolute;
    box-sizing: border-box;
    display: block;
`;  

const ImageInnerWrapper = styled.div`
    float: left;
    margin-top: 20px;
    margin-left: 20px;
    box-sizing: border-box;
    display: block;
`;

const InnerContainer = styled.div`
    color: rgb(0, 0, 0);
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
`;

const InnerContainerImg = styled.img`
    width: 34px;
    height: 34px;
    clip-path: circle(50%);
    vertical-align: middle;
    border: 0;
    display: inline-block;
`;

const InnerContainerName = styled.span`
    font-size: .63em;
    font-family: Trade Gothic LT Extended;
    font-weight: 700;
    line-height: 1.63;
    letter-spacing: .1em;
    text-transform: uppercase;
    box-sizing: border-box;
`;

const ImageInnerWrapperTwo = styled.div`
    float: right;
    margin-top: 20px;
    margin-right: 20px;
    box-sizing: border-box;
    display: block;
`;

const ImageContainerTwo = styled.div`
    border-color: rgb(35, 193, 187);
    border-style: solid;
    height: 30px;
    overflow: hidden;
    box-shadow: -2px 2px 20px rgba(0, 0, 0, 0.25);
    border-width: 1px;
    border-radius: 5px;
    box-sizing: border-box;
    display: block;
`;

const ImageContainerInnerTwo = styled.div`
    background-color: rgb(35, 193, 187);
    color: #FFF;
    height: 100%;
    display: inline-block;
    padding-right: 9px;
    box-sizing: border-box;
`;

const ContainerImgTwo = styled.img`
    width: 16px;
    height: 16px;
    margin-top: 4px;
    margin-left: 10px;
    vertical-align: middle;
    fill: currentColor;
    display: inline-block;
    font-size: 24px;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    user-select: none;
    flex-shrink: 0;
    box-sizing: border-box;
`;

const ContainerTwoNumber = styled.span`
    font-size: .63em;
    font-family: Trade Gothic LT Extended;
    font-weight: 700;
    line-height: 1.63;
    letter-spacing: .1em;
    text-transform: uppercase;
    display: inline-block;
    margin-top: 0;
    margin-left: 10px;
    margin-bottom: 2px;
`;

const ContainerTwoSpan = styled.span`
    font-size: .63em;
    font-family: Trade Gothic LT Extended;
    font-weight: 700;
    line-height: 1.63;
    letter-spacing: .1em;
    display: inline-block;
    padding-top: 2px;
    padding-left: 8px;
    text-transform: uppercase;
    vertical-align: middle;
    box-sizing: border-box;
`;

const ImageContentWrapper = styled.div`
    color: #FFF;
    width: 100%;
    bottom: 0;
    height: 100%;
    position: absolute;
    box-sizing: border-box;
    display: block;
`;

const ImageContentInnerWrapper = styled.div`
    height: 80%;
    color: rgb(0, 0, 0);
    background-image: none;
    left: 0;
    width: 100%;
    bottom: 0;
    padding: 40px;
    position: absolute;
    max-height: 100%;
    box-sizing: border-box;
    display: block;
`;

const ContentUpdateWrapper = styled.div`
    margin-left: 0px;
    font-size: .63em;
    font-family: Trade Gothic LT Extended;
    font-weight: 700;
    line-height: 1.63;
    letter-spacing: .1em;
    text-transform: uppercase;
    color: #FFF;
    align-items: center;
    padding-bottom: 15px;
    justify-content: center;
    box-sizing: border-box;
    display: block;
`;

const CommentImg = styled.img`
    color: rgb(0, 0, 0);
    font-size: 16px;
    width: 16px;
    height: 16px;
    vertical-align: middle;
    fill: currentColor;
    display: inline-block;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    user-select: none;
    flex-shrink: 0;
    box-sizing: border-box;
    overflow: hidden;
`;

const CommunitySpan = styled.span`
    color: rgb(0, 0, 0);
    margin-left: 8px;
    box-sizing: border-box;
    font-size: .63em;
    font-family: Trade Gothic LT Extended;
    font-weight: 700;
    line-height: 1.63;
    letter-spacing: .1em;
    text-transform: uppercase;
`;

const PatchNotes = styled.div`
    color: rgb(0, 0, 0);
    font-size: 1.31em;
    font-family: Trade Gothic LT;
    font-weight: 400;
    line-height: 1.06;
    letter-spacing: -0.03em;
    text-transform: none;
    padding-bottom: 15px;
    box-sizing: border-box;
`;

const SubtitleWrapper = styled.div`
    color: rgb(0, 0, 0);
    font-size: 10px;
    font-weight: 300;
    opacity: 0.85;
    text-transform: uppercase;
    box-sizing: border-box;
    display: block;
`;

const BackgroundImg = styled.img`
    border: 0;
    display: inline-block;
    height: auto;
    max-width: 100%;
    vertical-align: middle;
`;


const SnapFour = props => {
    return(
        <SnapFourWrapper>
            <SnapFourInnerWrapper>
                <SnapFourContainer>
                    <a><CardContent>
                        <ImageWrapper>
                            <ImageInnerWrapper>
                                <InnerContainer>
                                    <InnerContainerImg src={ProfilePic} /><InnerContainerName>jurassica</InnerContainerName>
                                </InnerContainer>
                            </ImageInnerWrapper>
                            <ImageInnerWrapperTwo>
                                <ImageContainerTwo>
                                    <ImageContainerInnerTwo>
                                        <ContainerImgTwo src={Chats} />
                                        <ContainerTwoNumber>1</ContainerTwoNumber>
                                        <ContainerTwoSpan>Posts</ContainerTwoSpan>
                                    </ImageContainerInnerTwo>
                                </ImageContainerTwo>
                            </ImageInnerWrapperTwo>
                        </ImageWrapper>
                        <ImageContentWrapper>
                            <ImageContentInnerWrapper>
                                <ContentUpdateWrapper>
                                    <CommentImg src={Coment} />
                                    <CommunitySpan>Community</CommunitySpan>
                                </ContentUpdateWrapper>   
                                <PatchNotes>Patch Notes Hub</PatchNotes>
                                <SubtitleWrapper>
                                    <BackgroundImg src={SnapFourImg} />
                                </SubtitleWrapper>
                            </ImageContentInnerWrapper>  
                        </ImageContentWrapper>    
                    </CardContent></a>
                </SnapFourContainer>
            </SnapFourInnerWrapper>
        </SnapFourWrapper>
    );
}

export default SnapFour;