import React, {Component} from 'react';

import SnapOne from './LatestTwo/SnapOne';
import SnapTwo from './LatestTwo/SnapTwo';
import SnapThree from './LatestTwo/SnapThree';
import SnapFour from './LatestTwo/SnapFour';
import SnapFive from './LatestTwo/SnapFive';
import SnapSix from './LatestTwo/SnapSix'; 
import styled from 'styled-components';

const LatestWrapper2 = styled.div`
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

class LatestDisplay2 extends Component {
    render() {
        return(
            <LatestWrapper2>
                <SnapOne />
                <SnapTwo />
                <SnapThree />
                <SnapFour />
                <SnapFive />
                <SnapSix />
            </LatestWrapper2>
        );
    }
}

export default LatestDisplay2;