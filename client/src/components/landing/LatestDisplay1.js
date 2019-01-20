import React, { Component } from 'react';

import SnapOne from './LatestOne/SnapOne';
import SnapTwo from './LatestOne/SnapTwo';
import SnapThree from './LatestOne/SnapThree';
import SnapFour from './LatestOne/SnapFour';
import SnapFive from './LatestOne/SnapFive';
import SnapSix from './LatestOne/SnapSix';
import styled from 'styled-components';

const LatestWrapper = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
    max-width: 1680px;
    padding-left: 40px;
    padding-right: 40px;
    background-color: #F8F8F8;
    width: calc(100% + 24px);
    margin: -12px;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
`;

const LatestDisplay1 = props => {
    return (
        <LatestWrapper>
            <SnapOne />
            <SnapTwo />
            <SnapThree />
            <SnapFour />
            <SnapFive />
            <SnapSix />
        </LatestWrapper>
    );
}

export default LatestDisplay1;