import React, {Component} from 'react';

import styled from 'styled-components';

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

class Fallout76 extends Component {
    render() {
        return(
            <Fallout76Wrapper>
                <Fallout76InnerWrapper>
                    
                </Fallout76InnerWrapper>
            </Fallout76Wrapper>
        );
    }
}

export default Fallout76;