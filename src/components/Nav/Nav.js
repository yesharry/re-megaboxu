import React from 'react';
import NavTop from './components/NavTop/NavTop';
import Logo from './components/Logo';
import NavBottom from './components/NavBottom/NavBottom';
import styled from 'styled-components';

const Nav = () => {
  return (
    <NavWrapper>
      <NavTop />
      <Logo />
      <NavBottom />
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  height: 5.688rem;
  background-color: rgba(0, 0, 0, 0.3);
`;

export default Nav;
