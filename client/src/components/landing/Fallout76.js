import React, {Component} from 'react';

import Heart from '../../assets/icons8-heart-outline-30.png';
import styled from 'styled-components';
import Video from '../../assets/Fallout76_LargeCard_LiveActionTrailer.jfif';

const Fallout76Wrapper = styled.div`
    margin: 0 auto;
    position: relative;
    max-width: 1680px;
    background-color: #F8F8F8;
    box-sizing: border-box;
    display: block;
`;

const Fallout76InnerWrapper = styled.div`
    padding: 4vw 0;
    min-height: 30vw;
    background-color: transparent;
    box-sizing: border-box;
    display: block;
`;

const Fallout76Container = styled.div`
    width: 50%;
    display: flex;
    position: relative;
    align-items: flex-start;
    flex-direction: column;
    box-sizing: border-box;
`;

const OuterImage = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    border: 0;
    display: inline-block;
    max-width: 100%;
    vertical-align: middle;
    box-sizing: border-box;
`;

const Fallout76TitleWrapper = styled.div`
    position: relative;
    padding-top: 3em;
    background-color: #688999;
    width: 100%;
    padding-left: 4vw;
    box-sizing: border-box;
    display: block;
`;

const ActionsWrapper = styled.div`
    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, .4));
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
`;

const Fallout76HeartsWrapper = styled.div`
    border-color: #fff;
    cursor: pointer;
    border: 1px solid #fff;
    height: 36px;
    margin: 0 10px 10px 0;
    display: flex;
    overflow: hidden;
    align-items: center;
    border-radius: 4px;
    text-transform: uppercase;
    box-sizing: border-box;
`;

const HeartLink = styled.a`
    color: #fff;
    font-size: .63em;
    font-family: Trade Gothic LT Extended;
    font-weight: 700;
    line-height: 1.63;
    letter-spacing: .1em;
    text-transform: uppercase;
    height: 100%;
    text-decoration: none;
    background-color: transparent;
    box-sizing: border-box;
    cursor: pointer;
`;

const HeartsTitle = styled.div`
    height: 100%;
    display: flex;
    padding: 0 10px;
    align-items: center;
    font-family: Trade Gothic LT Extended;
    line-height: .75rem;
    box-sizing: border-box;
`;

const HeartWrapper = styled.div`
    padding: 0;
    height: 100%;
    display: flex;
    align-items: center;
    font-family: Trade Gothic LT Extended;
    line-height: .75rem;
    box-sizing: border-box;
`;

const HeartsInnerWrapper = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: block;
`;

const HeartsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 0 10px;
    align-items: center;
    box-sizing: border-box;
`;

const HeartImg = styled.img`
    color: #fff;
    width: .75em;
    height: .75em;
    display: block;
    fill: currentColor;
    font-size: 24px;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    user-select: none;
    flex-shrink: 0;
    box-sizing: border-box;
    overflow: hidden;
`;

const Title = styled.h3`
    width: 50%;
    color: #fff;
    margin: 0;
    padding-top: 1em;
    font-size: 2.94em;
    font-weight: 700;
    font-family: Trade Gothic LT;
    line-height: 1.06;
    letter-spacing: -0.03em;
    box-sizing: border-box;
    text-transform: uppercase;
    padding: 0;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`;

const Subtitle = styled.p`
    font-size: .63em;
    font-family: Trade Gothic LT Extended;
    font-weight: 700;
    line-height: 1.63;
    letter-spacing: .1em;
    text-transform: uppercase;
    color: #fff;
    margin: 0;
    padding: 1em 0 6em 0;
    width: 70%;
    list-style-position: outside;
    box-sizing: border-box;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`;

const VideoImgWrapper = styled.div`
    top: 50%;
    left: 133%;
    width: 55vw;
    height: 30.9375vw;
    filter: drop-shadow(5px 10px 12px rgb(0, 0, 0, .4));
    position: absolute;
    transform: translate(-50%, -50%);
    display: flex;
    z-index: 1099;
    align-items: center;
    justify-content: center;
    background-color: #202020;
    box-sizing: border-box;
`;

const VideoImgContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: #202020;
    box-sizing: border-box;
`;

const VideoImg = styled.img`
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

class Fallout76 extends Component {
    render() {
        return(
            <Fallout76Wrapper>
                <Fallout76InnerWrapper>
                    <Fallout76Container>
                        <OuterImage />
                        <Fallout76TitleWrapper>
                            <ActionsWrapper>
                                <Fallout76HeartsWrapper>
                                    <HeartLink>
                                    <HeartsTitle>
                                        #Fallout 76
                                    </HeartsTitle>
                                    </HeartLink>
                                    <HeartWrapper>
                                        <HeartsInnerWrapper>
                                            <HeartsContainer>
                                                <HeartImg src={Heart} />
                                            </HeartsContainer>
                                        </HeartsInnerWrapper>
                                    </HeartWrapper>
                                </Fallout76HeartsWrapper>
                                <Fallout76HeartsWrapper>
                                    <HeartLink>
                                    <HeartsTitle>
                                        #Video
                                    </HeartsTitle>
                                    </HeartLink>
                                    <HeartWrapper>
                                        <HeartsInnerWrapper>
                                            <HeartsContainer>
                                                <HeartImg src={Heart} /> 
                                            </HeartsContainer>
                                        </HeartsInnerWrapper>
                                    </HeartWrapper>
                                </Fallout76HeartsWrapper>
                                <Fallout76HeartsWrapper>
                                    <HeartLink>
                                    <HeartsTitle>
                                        #Bethesda Game Studios
                                    </HeartsTitle>
                                    </HeartLink>
                                    <HeartWrapper>
                                        <HeartsInnerWrapper>
                                            <HeartsContainer>
                                                <HeartImg src={Heart} />
                                            </HeartsContainer>
                                        </HeartsInnerWrapper>
                                    </HeartWrapper>
                                </Fallout76HeartsWrapper>
                            </ActionsWrapper>
                            <Title>Fallout 76 Videos</Title>
                            <Subtitle>9 Videos</Subtitle>
                        </Fallout76TitleWrapper>


                        <VideoImgWrapper>
                            <VideoImgContainer>
                                <VideoImg src={Video} />
                            </VideoImgContainer>
                        </VideoImgWrapper>

                    </Fallout76Container>
                </Fallout76InnerWrapper>
            </Fallout76Wrapper>
        );
    }
}

export default Fallout76;