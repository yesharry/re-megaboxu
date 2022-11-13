import React from 'react';
import styled from 'styled-components';
import FooterTop from './components/FooterTop/FooterTop';
import FooterBottom from './components/FooterBottom/FooterBottom';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterTop />
      <FooterBottom />
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  width: 100%;
  height: 12.5rem;
  background-color: ${props => props.theme.colors.lightGray};
`;

export default Footer;
