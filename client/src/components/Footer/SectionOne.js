import React from 'react';

import Download from '../../assets/icons8-download-24.png';
import Globe from '../../assets/icons8-globe-earth-30.png';
import styled from 'styled-components';

const SectionOneWrapper = styled.div`
    margin: -0.625rem;
    display: flex;
    padding: 1.25rem;
    flex-wrap: wrap;
    min-height: 22.56rem;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(36, 36, 36);
    box-sizing: border-box;
`;

const LanguageWrapper = styled.div`
    flex: 1 1 auto;
    margin: 0.625rem;
    height: 14.63rem;
    display: flex;
    padding: 1.25rem 0;
    position: relative;
    text-align: center;
    min-height: 14.63rem;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
`;

const LanguageContainer = styled.div`
    margin: 0 0 0.625rem 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
`;

const GlobeImg = styled.img`
    fill: currentColor;
    width: 1em;
    height: 1em;
    display: inline-block;
    font-size: 24px;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    user-select: none;
    flex-shrink: 0;
    box-sizing: border-box;
    overflow: hidden;
`;

const LanguageText = styled.p`
    font-family: Montserrat,sans-serif;
    font-size: 1em;
    font-weight: 600;
    padding-top: 10px;
    line-height: 1.4;
    list-style-position: outside;
    margin: 0 0 15px;
    padding: 0;
    box-sizing: border-box;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`;

const SpacingDiv = styled.div`
    box-sizing: border-box;
    display: block;
`;

 const LanguageBtnWrapper = styled.div`
    box-sizing: border-box;
    display: block;
 `;

const LanguageBtnContainer = styled.div`
    position: relative;
    box-sizing: border-box;
    display: block;
`;

const LanguageBtn = styled.button`
    color: #fff;
    border: 1px solid #fff;
    height: 5.5em;
    min-width: 26em;
    box-shadow: none;
    line-height: 100%;
    border-radius: 2px;
    text-transform: uppercase;
    background-color: transparent;
    font-size: .625em;
    padding: 21px 60px;
    font-family: Trade Gothic LT Extended;
    letter-spacing: 1px;
    box-sizing: border-box;
    min-height: 36px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-weight: 500;
    margin: 0;
    cursor: pointer;
    display: inline-flex;
    outline: none;
    position: relative;
    align-items: center;
    user-select: none;
    vertical-align: middle;
    justify-content: center;
    -moz-appearance: none;
    text-decoration: none;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    overflow: visible;
`;

const LauncherWrapper = styled.div`
    flex: 1 1 auto;
    margin: 0.625rem;
    height: 14.63rem;
    display: flex;
    padding: 1.25rem 0;
    position: relative;
    text-align: center;
    min-height: 14.63rem;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
`;

const ImageWrapper = styled.div`
    margin: 0 0 0.625rem 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
`;

const DownloadImage = styled.img`
    fill: currentColor;
    width: 1em;
    height: 1em;
    display: inline-block;
    font-size: 24px;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    user-select: none;
    flex-shrink: 0;
    box-sizing: border-box;
    overflow: hidden;
`;

const DownloadText = styled.p`
    font-family: Montserrat,sans-serif;
    font-size: 1em;
    font-weight: 600;
    padding-top: 10px;
    line-height: 1.4;
    list-style-position: outside;
    margin: 0 0 15px;
    padding: 0;
    box-sizing: border-box;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`;

const DescriptionWrapper = styled.div`
    padding-bottom: 1rem;
    box-sizing: border-box;
    display: block;
`;

const DescriptionText = styled.p`
    font-family: Montserrat,sans-serif;
    color: #b3b3b3;
    margin: 0;
    padding: 0 1rem;
    font-size: 0.6em;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 1.4;
    list-style-position: outside;
    box-sizing: border-box;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    text-align: center;
`;

const ButtonWrapper = styled.div`
box-sizing: border-box;
display: block;
text-align: center;
`;

const DownloadButton = styled.button`
color: #fff;
    border: 1px solid #fff;
    height: 5.5em;
    min-width: 26em;
    box-shadow: none;
    line-height: 100%;
    border-radius: 2px;
    text-transform: uppercase;
    background-color: transparent;
    font-size: .625em;
    padding: 21px 60px
    font-family: Trade Gothic LT Extended;
    letter-spacing: 1px;
    box-sizing: border-box;
    min-height: 36px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-weight: 500;
    margin: 0;
    cursor: pointer;
    display: inline-flex;
    outline: none;
    position: relative;
    align-items: center;
    user-select: none;
    vertical-align: middle;
    justify-content: center;
    text-decoration: none;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
`;

const ButtonSpan = styled.span`
    width: 100%;
    display: inherit;
    align-items: inherit;
    justify-content: inherit;
    box-sizing: border-box;
`;

const DownloadButtonText = styled.span`
    box-sizing: border-box;
`;

const BtnBottomSpan = styled.span`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    z-index: 0;
    position: absolute;
    overflow: hidden;
    border-radius: inherit;
    pointer-events: none;
    box-sizing: border-box;
`;

const SectionOne = props => {
    return(
        <SectionOneWrapper>
            <LanguageWrapper>
                <LanguageContainer>
                    <GlobeImg src={Globe} />
                    <LanguageText>Please select your language</LanguageText>
                </LanguageContainer>
                <SpacingDiv></SpacingDiv>
                <LanguageBtnWrapper>
                    <LanguageBtnContainer>
                        <LanguageBtn>English</LanguageBtn>
                    </LanguageBtnContainer>
                </LanguageBtnWrapper>
            </LanguageWrapper>
            <LauncherWrapper>
                <ImageWrapper>
                    <DownloadImage src={Download} />
                    <DownloadText>Bethesda Launcher</DownloadText>
                </ImageWrapper>
                <DescriptionWrapper>
                    <DescriptionText>OS: Windows 7 / 8 / 8.1 / 10</DescriptionText>
                    <DescriptionText>Processor: 2.5Ghz Intel Pentium 4 / AMD Athlon 64</DescriptionText>
                    <DescriptionText>RAM: 1GB, Disk Space: 250MB</DescriptionText>
                </DescriptionWrapper>
                <ButtonWrapper>
                    <DownloadButton>
                        <ButtonSpan>
                            <DownloadButtonText>Download</DownloadButtonText>
                        </ButtonSpan>
                        <BtnBottomSpan></BtnBottomSpan>
                    </DownloadButton>
                </ButtonWrapper>
            </LauncherWrapper>
        </SectionOneWrapper>
    );
}

export default SectionOne;