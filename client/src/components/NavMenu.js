import React, {Component} from 'react';

import styled from 'styled-components';

const NavContainer = styled.div`
    font-size: 16px;
    line-height: 26.08px;
    text-decoration: none solid rgb(51, 51, 51);
    word-spacing: 0px;
    height: 60px;
    width: 100%;
    position: absolute;
    display: flex;
    top: 0px;
    bottom: 0px;
    right: 0px;
    left: 0px;
`;

const LinesMenu = styled.div`
    width: 35px;
    height: 5px;
    background-color: black;
    margin: 6px 0;
    position: absolute;
`;

const BethesdaTitle = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  line-height: 26.08px;
  word-spacing: 0px;
  text-decoration: none solid rgb(16, 93, 88);
  height: 13.675px;
  width: 90px;
  display: inline;
  overflow: hidden;
  cursor: pointer;
  color: #FFFFFF;
`;

const BTitleWrapper = styled.div`
  height: 25.6px;
  width: 90px;
  background-position: 0% 0%;
  min-height: auto;
  min-width: auto;
  display: block;
  position: absolute;
`;

class NavMenu extends Component {
    render() {
        return(
            <NavContainer>
               <LinesMenu></LinesMenu> 
               <LinesMenu></LinesMenu> 
               <LinesMenu></LinesMenu> 
                <BTitleWrapper>
                    <BethesdaTitle>Bethesda</BethesdaTitle>
                </BTitleWrapper>
            </NavContainer>
        );
    }
}

export default NavMenu;