import React from 'react';

import styled from 'styled-components';
import Img from '../../assets/Large-Hero.jpg';

const ImageDragon = styled.img`
    vertical-align: middle;
    background-position: 0% 0%;
    word-spacing: 0px;
    height: 691.2px;
    width: 65.9vw;
    max-width: 100%;
    display: inline-block;
`;

const BlackRight = styled.div`
    text-align: center;
    word-spacing: 0px;
    background-position: 0% 0%;
    height: 691.2px;
    width: 33vw;
    position: relative;
    top: 0px;
    bottom: 0px;
    right: 0px;
    left: 0px;
    display: flex;
    background-color: black;
`;

const InnerWrapper = styled.div`
    height: 577.4px;
    width: 501.325px;
    padding: 48px 32px 32px 32px;
    min-height: auto;
    min-width: auto;
    display: block;
`;

const News = props => {
    return(
    <div style={{display: 'flex', flexDirection: 'row'}}>
        <ImageDragon src={Img} />
        <BlackRight>
            <InnerWrapper>

            </InnerWrapper>
        </BlackRight>
    </div>
    )
}

export default News;