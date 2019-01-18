import React from 'react';

import Arrow from '../../assets/icons8-next-page-24.png';
import styled from 'styled-components';
import Img from '../../assets/Large-Hero.jpg';
import Paragraph from '../../assets/icons8-align-left-24.png';

const NewsWrapper = styled.div`
    width: 100%;
    min-height: 45vw;
    display: block;
`;

const DragonContainer = styled.div`
    width: 66%;
    float: left;
    height: 100%;
    position: relative;
`;

const ImageDragon = styled.img`
    vertical-align: middle;
    background-position: 0% 0%;
    word-spacing: 0px;
    height: 691.2px;
    width: 65.9vw;
    max-width: 100%;
    display: initial;
`;

const NewsRight = styled.div`
    height: 100%;
    display: flex;
    position: relative;
    align-items: center;
    align-content: center;
    background-color: #202020;
    height: 691.2px
    box-sizing: border-box;
    padding: 3em 2em 2em;
`;

const InnerWrapper = styled.div`
    padding: 3em 2em 2em;
    box-sizing: border-box;
    font-size: 16px;
    font-family: Montserrat;
    font-weight: 400;
    line-height: 1.63;
    letter-spacing: 0;
`;

const H2News = styled.h2`
    color: rgb(255, 255, 255);
    font-size: 58.08px;
    display: inline-block;
    margin-left: -30%;
    cursor: pointer;
    margin-bottom: 30px;
    font-weight: 700;
    font-family: 'Pathway Gothic One', sans-serif;
    line-height: 1.06;
    letter-spacing: -0.03em;
    line-height: 61.5648px;
    max-width: 430px;
    height: 182.4px;
`;

const NewsContainer = styled.div`
    display: block;
    margin-left: -5px;
    align-items: center;
    justify-content: center;
    color: rgb(255, 255, 255);
    box-sizing: border-box;
`;

const NewsPar = styled.img`
    width: 18px;
    height: 18px;
    vertical-align: middle;
    display: inline-block;
    font-size: 24px;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    user-select: none;
    flex-shrink: 0;
`;

const NewsEos = styled.span`
    font-size: 10.08px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    line-height: 1.63;
    letter-spacing: .1em;
    text-transform: uppercase;
    vertical-align: middle;
    color: rgb(255, 255, 255);
`;

const EosCont = styled.div`
    font-size: 14px;
    margin-top: 20px;
    font-weight: 400;
    box-sizing: border-box;
    display: block;
    line-height: 1.63;
    letter-spacing: 0;
    color: rgb(255, 255, 255);
    font-family: 'Montserrat', sans-serif;
`;

const Jan15 = styled.span`
    font-size: 10px;
    font-weight: 300;
    padding: 0;
    margin-top: 10px;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 0;
    vertical-align: middle;
    text-transform: uppercase
    color: rgb(255, 255, 255);
`;

const ReadMoreCont = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`;

const ReadMoreInner = styled.div`
    margin-top: 30px;
    margin-bottom: 30px;
    display: block;
`;

const ArrowIcon = styled.img`
    fill: #202020;
    border-radius: 1em;
    vertical-align: middle;
    background-color: #F8F8F8;
    width: 1em;
    height: 1em;
    display: inline-block;
    font-size: 24px;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    user-select: none;
    flex-shrink: 0;
`;

const ReadMore = styled.span`
    font-size: .75em;
    font-family: 'Pathway Gothic One', sans-serif;
    font-weight: 700;
    line-height: 1.75;
    letter-spacing: .1em;
    text-transform: uppercase;
    color: #fff;
    box-sizing: border-box;
    margin-left: 1em;
`;

const News = props => {
    return(
    <NewsWrapper>
        <DragonContainer>
            <ImageDragon src={Img} />
        </DragonContainer>

        <NewsRight>
            <InnerWrapper>
                <a><H2News>ANNOUNCING ESO: ELSWEYR & THE SEASON OF THE DRAGON</H2News></a>
                <NewsContainer>
                    <NewsPar src={Paragraph} /><NewsEos>News</NewsEos>
                </NewsContainer>
                <EosCont>
                    We are happy to announce the next Chapter in The Elder Scrolls Online saga, The Elder Scrolls Online: Elsweyr, coming to PC/Mac, Xbox One and PlayStation 4 on June 4. Learn about this exciting new adventure and the year-long Season of the Dragon storyline right here.
                </EosCont>
                <Jan15>The Elder Scrolls Online Elsweyr - Jan 15</Jan15>
                <ReadMoreCont>
                    <a>
                        <ReadMoreInner>
                            <ArrowIcon src={Arrow} /><ReadMore>Read More</ReadMore>
                        </ReadMoreInner>
                    </a>
                </ReadMoreCont>
            </InnerWrapper>
        </NewsRight>
    </NewsWrapper>
    )
}

export default News;