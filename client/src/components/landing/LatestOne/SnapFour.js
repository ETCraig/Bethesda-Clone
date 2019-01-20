import React from 'react';

import Paragraph from '../../../assets/icons8-align-left-24.png';
import SnapImagePng from '../../../assets/RAGE2_MobileCard_OpenWorld.png';
import styled from 'styled-components';

const SnapFourWrapper = styled.div`
    padding: 12px;
    flex-grow: 0;
    max-width: 25%;
    flex-basis: 25%;
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
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: block;
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

const SnapFourImage = styled.img`
    filter: blur(0px);
    transition: filter 500ms linear 0s;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 0;
    display: inline-block;
    max-width: 100%;
    vertical-align: middle;
    box-sizing: border-box;
`;

const CardText = styled.div`
    background-image: linear-gradient(transparent 0%, rgba(83, 29, 9, 0.5) 25%, rgba(83, 29, 9, 0.75) 60%, rgb(83, 29, 9) 90%);
    left: 0;
    color: #FFF;
    width: 100%;
    bottom: 0;
    padding: 40px;
    position: absolute;
    max-height: 100%;
    box-sizing: border-box;
    display: block;
`;

const NewsWrapper = styled.div`
    font-size: .63em;
    font-family: Trade Gothic LT Extended;
    font-weight: 700;
    line-height: 1.63;
    letter-spacing: .1em;
    color: #FFF;
    align-items: center;
    margin-left: -5px;
    text-transform: uppercase;
    padding-bottom: 15px;
    justify-content: center;
    box-sizing: border-box;
    display: block;
`;

const NewsImage = styled.img`
    width: 16px;
    height: 16px;
    vertical-align: middle;
    fill: currentColor;
    display: inline-block;
    font-size: 24px;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    user-select: none;
    flex-shrink: 0;
    box-sizing: border-box;
    display: block;
`;

const Headline = styled.div`
    font-size: 1.31em;
    font-family: Trade Gothic LT;
    font-weight: 400;
    line-height: 1.06;
    letter-spacing: -0.03em;
    text-transform: none;
    color: #FFF;
    padding-bottom: 15px;
    box-sizing: border-box;
    display: block;
`;

const Subtitle = styled.div`
    font-size: 10px;
    font-weight: 300;
    color: #FFF;
    opacity: 0.85;
    text-transform: uppercase;
    box-sizing: border-box;
    display: block;
`;

const SnapFour = props => {
    return(
        <SnapFourWrapper>
            <SnapFourInnerWrapper>
                <SnapFourContainer>
                    <a><CardContent>
                        <ImageWrapper>
                            <SnapFourImage src={SnapImagePng} />
                        </ImageWrapper>
                        <ImageContentWrapper>
                            <CardText>
                                <NewsWrapper>
                                    <NewsImage src={Paragraph} /><span styled={{ marginLeft: '8px', boxSizing: 'border-box' }}>NEWS</span>
                                </NewsWrapper>
                                <Headline>RAGE 2 – The Wild, Wild Wasteland</Headline>
                                <Subtitle>Rage 2 • Dec 6</Subtitle>
                            </CardText>
                        </ImageContentWrapper>
                    </CardContent></a>
                </SnapFourContainer>
            </SnapFourInnerWrapper>
        </SnapFourWrapper>
    );
}

export default SnapFour;