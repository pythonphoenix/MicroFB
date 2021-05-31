import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import MenuIcon from '@material-ui/icons/Menu';

import { HeaderContainer, HeaderButton, HeaderDesktop, HeaderItem, HeaderLeft, HeaderLogo, HeaderMiddle, HeaderRight, HeaderNavBar, HeaderNavBarItem, HeaderHideMobile, HeaderHideDesktop } from '../../styles/home/HomeHeaderStyle';

import Logo from '../../images/home/Assets Logo_Ubuntu.png';

const HomeHeader = () => {

    const [navbarState, setNavbarState] = useState(false);

    const toggleDropDown = () => {

        if (navbarState) {
            setNavbarState(false);
        } else {
            setNavbarState(true);
        }
    }

    return (
        <>
            <HeaderContainer>
                <HeaderDesktop>
                    <HeaderLeft>
                        <HeaderLogo src={Logo} />
                    </HeaderLeft>
                    <HeaderMiddle>
                        <Link to='' style={{ textDecoration: 'none' }}> <HeaderItem>Who We Are</HeaderItem></Link>
                        <Link to='' style={{ textDecoration: 'none' }}><HeaderItem>Products</HeaderItem></Link>
                        <Link to='' style={{ textDecoration: 'none' }}><HeaderItem>News</HeaderItem></Link>
                        <Link to='/dashboard/info/loan/' style={{ textDecoration: 'none' }}><HeaderItem>Apply for a Loan</HeaderItem></Link>
                    </HeaderMiddle>
                    <HeaderRight>
                        <Link to='/account/open/' style={{ textDecoration: 'none' }}><HeaderItem style={{ fontWeight: 'bold' }}>Internet Banking</HeaderItem></Link>
                        <HeaderHideMobile>
                            <Link to='/account/open/' style={{ textDecoration: 'none' }}> <HeaderButton>Open an Account</HeaderButton></Link>
                        </HeaderHideMobile>
                        <HeaderHideDesktop>
                            <MenuIcon onClick={toggleDropDown} style={{ cursor: 'pointer' }} />
                        </HeaderHideDesktop>
                    </HeaderRight>
                </HeaderDesktop>

                {navbarState && (
                    <HeaderNavBar>
                        <Link to='' style={{ textDecoration: 'none' }}><HeaderNavBarItem>Who We Are</HeaderNavBarItem></Link>
                        <Link to='' style={{ textDecoration: 'none' }}><HeaderNavBarItem>Products</HeaderNavBarItem></Link>
                        <Link to='' style={{ textDecoration: 'none' }}><HeaderNavBarItem>News</HeaderNavBarItem></Link>
                        <Link to='/dashboard/info/loan/' style={{ textDecoration: 'none' }}><HeaderNavBarItem>Apply for a Loan</HeaderNavBarItem></Link>
                        <Link to='/account/open/' style={{ textDecoration: 'none' }}><HeaderNavBarItem>Internet Banking</HeaderNavBarItem></Link>
                        <HeaderNavBarItem>
                            <Link to='/account/open/' style={{ textDecoration: 'none' }}><HeaderButton>Open an Account</HeaderButton></Link>
                        </HeaderNavBarItem>
                    </HeaderNavBar>
                )}
            </HeaderContainer>
        </>
    )
};

export default HomeHeader; 