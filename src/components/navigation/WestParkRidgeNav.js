import React, { useState } from 'react';
// import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby';

import { FaAlignRight } from 'react-icons/fa';

import styled from '@emotion/styled';

import { MobileMenu1 } from '../menus-mobile/Main/MobileMenu1';
import { ButtonStyle2 } from '../reusableStyles/buttons/Button';

import NoStyleLink from '../Links/NoStyleLink';

const Header = styled.header`
  font-family: Lobster;
  font-weight: bold;
  height: 9vh;
  position: relative;

  color: ${props => props.theme.colors.black};

  display: flex;

  margin: 0 auto;

  justify-content: space-around;
  align-items: center;

  z-index: 1;

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    display: flex;
  }
`;

const Logo = styled.div`
  position: relative;
  padding: 0;
  margin: 0;
`;
const LogoLink = styled(Link)`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  font-size: 2rem;
  padding: 0;
  margin: 0;
  color: ${props => props.theme.colors.black};
  text-decoration: none !important;
`;

const NavContainer = styled.nav`
  color: ${props => props.theme.colors.black};
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;

  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    display: none;
  }
`;

const BurgerIcon = styled(FaAlignRight)`
  cursor: pointer;
  @media (min-width: ${props => props.theme.screenSize.mobileL}) {
    display: none;
  }
`;

const CustomButtonStyle2 = styled(ButtonStyle2)`
  font-size: 1.6rem;
  display: flex;
`;

const CustomLink = styled(NoStyleLink)`
  color: ${props => props.theme.colors.black};
  height: 100%;
  padding: 1.5rem;
  margin: 1rem;
  & :hover {
    background: ${props => props.theme.colors.lightgrey};
  }
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    padding: 1.3rem;
  }
`;

const CustomALink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.black};
  height: 100%;
  padding: 1.5rem;
  margin: 1rem;
  & :hover {
    background: ${props => props.theme.colors.lightgrey};
  }
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    padding: 1.3rem;
  }
`;

// const LogoImage = styled.img`
//   max-height: 80px;
//   transform: translateY(8px);
//   opacity: 0.7;
// `;

const NavSuperStore1 = () => {
  // const { image } = useStaticQuery(graphql`
  //   query {
  //     image: file(relativePath: { eq: "Logo.png" }) {
  //       sharp: childImageSharp {
  //         fluid(maxWidth: 600) {
  //           src
  //         }
  //       }
  //     }
  //   }
  // `);

  const [mobileMenuOpen, setMobileMenu] = useState(false);

  const mobileMenuHandler = () => {
    setMobileMenu(prevState => !prevState);
  };

  return (
    <>
      <Header>
        <Logo>
          <LogoLink to="/">WestParkRidge</LogoLink>
        </Logo>

        <NavContainer>
          <CustomLink to="/">Home </CustomLink>
          <CustomALink
            href={`https://wpr.managebuilding.com/Resident/public/contact`}
            target={'_blank'}
            rel="noopener noreferrer"
          >
            Contact Us
          </CustomALink>
          <CustomALink
            href={`https://wpr.managebuilding.com/Resident/apps/rentalapp/`}
            target={'_blank'}
            rel="noopener noreferrer"
          >
            Apply Now
          </CustomALink>

          <CustomButtonStyle2>
            <a href="tel:780-306-2335"> 780.306.2335</a>
          </CustomButtonStyle2>
        </NavContainer>

        <BurgerIcon onClick={mobileMenuHandler} />
        {mobileMenuOpen ? (
          <MobileMenu1 mobileMenuHandler={mobileMenuHandler} />
        ) : null}
      </Header>
    </>
  );
};

export default NavSuperStore1;
