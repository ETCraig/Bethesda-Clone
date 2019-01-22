import React from 'react';

import styled from 'styled-components';

const SectionTwoWrapper = styled.div`
    display: flex;
    padding: 4vh 5vw;
    justify-content: space-between;
    background-color: rgb(29, 29, 29);
    box-sizing: border-box;
`;

const ExploreWrapper = styled.div`
    flex: 1;
    width: 100%;
    max-width: 25vw;
    box-sizing: border-box;
    display: block;
`;

const TitleWrapper = styled.div`
    border-bottom: 2px solid rgb(46, 46, 46);
    display: flex;
    align-items: center;
    margin-bottom: 1em;
    box-sizing: border-box;
`;

const Title = styled.h5`
    color: #fff;
    margin: 1em 0;
    font-size: 12px;
    font-family: Trade Gothic LT Extended;
    line-height: 1.4em;
    letter-spacing: 1.5px;
    font-weight: 700;
    text-transform: uppercase;
    padding: 0;
    box-sizing: border-box;
    display: block;
    margin-block-start: 1.67em;
    margin-block-end: 1.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`;

const ListWrapper = styled.ul`
    padding: 0;
    list-style: none;
    margin-left: 0;
    line-height: 1rem;
    column-count: 2;
    font-family: inherit;
    font-size: 1em;
    margin: 0 0 15px;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
`;

const ListItems = styled.li`
    margin-bottom: .75rem;
    box-sizing: border-box;
    display: list-item;
    text-align: -webkit-match-parent;
`;

const ListLinks = styled.a`
    color: #b3b3b3;
    font-size: .75rem;
    font-weight: 400;
    text-decoration: none;
    background-color: transparent;
    box-sizing: border-box;
`;

const SupportWrapper = styled.div`
    flex: 1;
    width: 100%;
    max-width: 25vw;
    box-sizing: border-box;
    display: block;
`;




const LegalWrapper = styled.div`
    flex: 1;
    width: 100%;
    max-width: 25vw;
    box-sizing: border-box;
    display: block;
`;

const SectionTwo = props => {
    return(
        <SectionTwoWrapper>
            <ExploreWrapper>
                <TitleWrapper>
                    <Title>Explore</Title>
                </TitleWrapper>
                <ListWrapper>
                    <ListItems><ListLinks>Home</ListLinks></ListItems>
                    <ListItems><ListLinks>Games</ListLinks></ListItems>
                    <ListItems><ListLinks>Mods</ListLinks></ListItems>
                    <ListItems><ListLinks>Community</ListLinks></ListItems>
                    <ListItems><ListLinks>News</ListLinks></ListItems>
                    <ListItems><ListLinks>Studios</ListLinks></ListItems>
                    <ListItems><ListLinks>Playtest</ListLinks></ListItems>
                </ListWrapper>
            </ExploreWrapper>
            <SupportWrapper>
                <TitleWrapper>
                    <Title>Support</Title>
                </TitleWrapper>
                <ListWrapper>
                    <ListItems><ListLinks>Support Center</ListLinks></ListItems>
                    <ListItems><ListLinks>Manuals and Safety Docs</ListLinks></ListItems>
                    <ListItems><ListLinks>Status</ListLinks></ListItems>
                </ListWrapper>
            </SupportWrapper>
            <LegalWrapper>
                <TitleWrapper>
                    <Title>Legal</Title>
                </TitleWrapper>
                <ListWrapper>
                    <ListItems><ListLinks>Terms Of Service</ListLinks></ListItems>
                    <ListItems><ListLinks>End User License Agreements</ListLinks></ListItems>
                    <ListItems><ListLinks>Privacy Policy</ListLinks></ListItems>
                    <ListItems><ListLinks>Legal information</ListLinks></ListItems>
                    <ListItems><ListLinks>Code Of Conduct</ListLinks></ListItems>
                    <ListItems><ListLinks>Contact</ListLinks></ListItems>
                    <ListItems><ListLinks>Corporate</ListLinks></ListItems>
                </ListWrapper>
            </LegalWrapper>
        </SectionTwoWrapper>
    );
}

export default SectionTwo;