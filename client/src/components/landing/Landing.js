import React, {Component} from 'react';

import Latest from './TheLatest';
import LatestDisplay1 from './LatestDisplay1';
import LatestDisplay2 from './LatestDisplay2';
import News from './News';
import styled from 'styled-components';
import Fallout76 from './Fallout76';
import MakeItYours from './MakeItYours';

const LandingWrapper = styled.div`
    max-width: 1920px;
    margin: auto;
    overflow: hidden;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    line-height: 1.63;
    letter-spacing: 0;
    background-color: #F1F1F1;
`;

const SectionBottom = styled.div`
    height: 15vmax;
    margin: auto;
    display: flex;
    max-width: 1680px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: #F8F8F8;
    box-sizing: border-box;
`;

class Landing extends Component {
    render() {
        return(
            <LandingWrapper>
                <News />
                <Latest />
                <LatestDisplay1 />
                <Fallout76 />
                <LatestDisplay2 />
                <MakeItYours />
                <SectionBottom />
            </LandingWrapper>
        );
    }
}

export default Landing;