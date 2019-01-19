import React, {Component} from 'react';

import Latest from './TheLatest';
import LatestDisplay1 from './LatestDisplay1';
import News from './News';
import styled from 'styled-components';

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

class Landing extends Component {
    render() {
        return(
            <LandingWrapper>
                <News />
                <Latest />
                <LatestDisplay1 />
            </LandingWrapper>
        );
    }
}

export default Landing;