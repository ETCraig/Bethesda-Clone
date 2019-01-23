import React, {Component} from 'react';

import Cart from '../assets/icons8-shopping-cart-24 (1).png';
import Hamburger from '../assets/icons8-menu-24.png';
import Search from '../assets/icons8-search-24.png';
import styled from 'styled-components';

const NavContainer = styled.div`
    font-size: 16px;
    width: 100%;
    height: 60px;
    display: flex;
    z-index: 1100;
    position: fixed;
    overflow: hidden;
`;

const NavWrapper = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: space-between;
`;

const LeftWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-left: 35px;
    flex-direction: row;
`;

const HamWrapper = styled.div`
    cursor: pointer;
    display: inline-block;
    font-weight: 700;
`;
const HamburgerIcon = styled.img`
    width: 25px;
    height: 25px;
    display: inline-block;
    font-size: 24px;
`;

const TittleWrapper = styled.div`
    width: 90px;
    border-bottom: 0;
    padding: 0;
`;
const BethesdaTitle = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 22px;
    line-height: 26.08px;
    word-spacing: 0px;
    text-decoration: none solid rgb(16, 93, 88);
    height: 13.675px;
    width: 90px;
    display: inline;
    overflow: hidden;
    cursor: pointer;
    color: #FFFFFF;
    margin-left: 15px;
`;

const RightWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-right: 35px;
    flex-direction: row;
`;

const SearchWrapper = styled.div`
    margin: 0 22px;
    cursor: pointer;
    transition: opacity .45s ease;
`;

const SearchIcon = styled.img`
    width: auto;
    height: auto;
    flex: 0 0 auto;
    text-align: center;
    cursor: pointer;
    position: relative;
    align-items: center;
    user-select: none;
`;

const CartWrapper = styled.div`
    margin: 0 22px;
    cursor: pointer;
    transition: opacity .45s ease;
`;

const CartIcon = styled.img`
    cursor: pointer;
    border: 0;
    padding: 0;
    flex: 0 0 auto;
    text-align: center;
    margin: 0;
    position: relative;
    align-items: center;
    user-select: none;
    vertical-align: middle;
    justify-content: center;
`;

const LoginWrapper = styled.div`
    height: 45.0000000001125px;
    margin: 0 0 0 10px;
    padding: 0;
    font-weight: 700;
    min-height: 36px;
    min-width: 64px;
    height: 36px;
    width: 165.45px;
`;

const LoginBtn = styled.button`
    background: transparent;
    border: 1px solid #FFFFFF;
    color: rgb(255, 255, 255);
    cursor: pointer;    
    top: 4px;
    display: inline-block;
    position: relative;
    transition: opacity .45s ease;
    width: 165.45px;
    box-sizing: border-box;
    min-height: 36px;
    position: relative;
    align-items: center;
    vertical-align: middle;
    justify-content: center;
    min-height: 36px;
    min-width: 64px;
`;

class NavMenu extends Component {
    
    render() {
        window.onscroll = () => {
            const nav = document.querySelector('#navbar');
            if(this.scrollY <= 10) nav.className = ''; else nav.className = 'scroll';
          };
        return(
            <NavContainer>
            <nav id="navbar">
                <NavWrapper>
                    <LeftWrapper>
                        <HamWrapper>
                            <HamburgerIcon src={Hamburger} />
                        </HamWrapper>
                        <TittleWrapper> 
                            <BethesdaTitle>Bethesda</BethesdaTitle>
                        </TittleWrapper>
                    </LeftWrapper>
                    <RightWrapper>
                        <SearchWrapper>
                            <SearchIcon src={Search} />
                        </SearchWrapper>
                        <CartWrapper>
                            <CartIcon src={Cart} />
                        </CartWrapper>
                        <LoginWrapper>
                            <LoginBtn>LOG IN / SIGN UP</LoginBtn>
                        </LoginWrapper>
                    </RightWrapper>
                </NavWrapper>
            </nav>
            </NavContainer>
        );
    }
}

export default NavMenu;