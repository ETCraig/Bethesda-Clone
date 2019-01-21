import React from 'react';

import Paragraph from '../../../assets/icons8-align-left-24.png';
import SnapFivePng from '../../../assets/TESL_Ashlander_Punisher_MOBILE_633x424.jpg';
import styled from 'styled-components';

const SnapFiveWrapper = styled.div`
    padding: 12px;
    flex-grow: 0;
    max-width: 25%;
    flex-basis: 25%;
    margin: 0;
    box-sizing: border-box;
    display: block;
`;

const SnapFiveInnerWrapper = styled.div`
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

const SnapFiveContainer = styled.div`
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

const SnapFiveImg = styled.img`
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
    left: 0;
    color: #FFF;
    width: 100%;
    bottom: 0;
    padding: 40px;
    position: absolute;
    max-height: 100%;
    background-image: linear-gradient(transparent 0%, rgba(52, 29, 23, 0.5) 25%, rgba(52, 29, 23, 0.75) 60%, rgb(52, 29, 23) 90%);
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
    user-select: nFive;
    flex-shrink: 0;
    box-sizing: border-box;
    overflow: hidden;
`;

const Headline = styled.div`
    font-size: 1.31em;
    font-family: Trade Gothic LT;
    font-weight: 400;
    line-height: 1.06;
    letter-spacing: -0.03em;
    text-transform: nFive;
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

const SnapFive = props => {
    return(
        <SnapFiveWrapper>
            <SnapFiveInnerWrapper>
                <SnapFiveContainer>
                    <a><CardContent>
                        <ImageWrapper>
                            <SnapFiveImg src={SnapFivePng} />    
                        </ImageWrapper>
                        <ImageContentWrapper>
                            <CardText>
                                <NewsWrapper>
                                    <NewsImage src={Paragraph} /><span styled={{ marginLeft: '8px', boxSizing: 'border-box' }}>NEWS</span>
                                </NewsWrapper>
                                <Headline>The Elder Scrolls: Legends - December 2018 Monthly Card</Headline>
                                <Subtitle>The Elder Scrolls: Legends • Dec 27</Subtitle>
                            </CardText>    
                        </ImageContentWrapper>    
                    </CardContent></a>
                </SnapFiveContainer>
            </SnapFiveInnerWrapper>
        </SnapFiveWrapper>
    );
}

export default SnapFive;