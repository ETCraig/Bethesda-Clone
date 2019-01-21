import React from 'react';

import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import styled from 'styled-components';

const FooterWrapper = styled.div`
    box-sizing: border-box;
    display: block;
`;

const FooterContainer = styled.div`
    color: #fff;
    overflow: hidden;
    font-family: Montserrat,sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 1.65em;
    box-sizing: border-box;
    display: block;
`;

const Footer = props => {
    return(
        <FooterWrapper>
            <FooterContainer>
                <SectionOne />
                <SectionTwo />
                <SectionThree />
            </FooterContainer>
        </FooterWrapper>
    );
}

export default Footer;