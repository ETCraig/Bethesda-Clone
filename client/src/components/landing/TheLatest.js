import React from 'react';

import styled from 'styled-components';

const LatestWrapper = styled.div`
    height: 15vmax;
    margin: auto;
    display: flex;
    max-width: 1680px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: #F8F8F8;
    font-size: 16px;
    font-family: Montserrat;
    font-weight: 400;
    line-height: 1.63;
    letter-spacing: 0;
`;

const LatestTitle = styled.h3`
    color: #454545;
    font-size: 2.94em;
    font-weight: 700;
    font-family: 'Pathway Gothic One', sans-serif;
    line-height: 1.06;
    letter-spacing: -0.03em;
    text-transform: uppercase;
    margin: 15px 0;
    font-style: normal;
`;

const Description = styled.div`
    font-size: 14px;
    font-family: Montserrat;
    font-weight: 400;
    line-height: 1.63;
    letter-spacing: 0;
`; 

const TheLatest = props => {
    return(
        <LatestWrapper>
            <LatestTitle>The Latest</LatestTitle>
            <Description>News, features, videos & more!</Description>
        </LatestWrapper>
    );
}

export default TheLatest;