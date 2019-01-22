import React from 'react';

import ESRB from '../../assets/RP-M.png';
import Privacy from '../../assets/privacy_certified_globe_color.gif';
import styled from 'styled-components';

const SectionThreeWrapper = styled.div`
    display: flex;
    padding: 30px 5vw;
    border-top: 2px solid rgb(41, 41, 41);
    flex-direction: column;
    background-color: rgb(29, 29, 29);
    box-sizing: border-box;
`;

const TopWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;
    justify-content: space-between;
    box-sizing: border-box;
`;

const BethesdaWrapper = styled.div`
    width: 125px;
    padding: 20px 0;
    box-sizing: border-box;
    display: block;
`;

const BethesdaLogo = styled.h2`
    fill: #fff;
    width: 125px;
    height: 100%;
    box-sizing: border-box;
    overflow: hidden;
`;

const ESRBWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
`;

const FirstIcon = styled.div`
    margin: 5px;
    box-sizing: border-box;
    display: block;
`;

const PrivacyIcon = styled.img`
    height: 90px;
    border: 0;
    display: inline-block;
    max-width: 100%;
    vertical-align: middle;
    box-sizing: border-box;
`;

const SecondIcon = styled.div`
    margin: 5px;
    box-sizing: border-box;
    display: block;
`;

const ESRBIcon = styled.img`
    height: 90px;
    border: 0;
    display: inline-block;
    max-width: 100%;
    vertical-align: middle;
    box-sizing: border-box;
`;

const BorderDiv = styled.div`
    color: #b3b3b3;
    box-sizing: border-box;
    display: block;
`;

const BottomWrapper = styled.div`
    box-sizing: border-box;
    display: block;
`;

const InnerBottom = styled.div`
    color: #b3b3b3;
    font-size: 12px;
    line-height: 1.2em;
    box-sizing: border-box;
    display: block;
`;

const SectionThree = props => {
    return(
        <SectionThreeWrapper>
            <TopWrapper>
                <BethesdaWrapper>
                    <BethesdaLogo>Bethesda</BethesdaLogo>
                </BethesdaWrapper>
                <ESRBWrapper>
                    <FirstIcon>
                        <PrivacyIcon src={Privacy} />
                    </FirstIcon>
                    <SecondIcon>
                        <ESRBIcon src={ESRB} />
                    </SecondIcon>
                </ESRBWrapper>
            </TopWrapper>
            <BorderDiv></BorderDiv>
            <BottomWrapper>
                <InnerBottom>
                © 2019 Bethesda Softworks LLC, a ZeniMax Media company. Trademarks belong to their respective owners. All Rights Reserved.
                </InnerBottom>
            </BottomWrapper>
        </SectionThreeWrapper>
    );
}

export default SectionThree;