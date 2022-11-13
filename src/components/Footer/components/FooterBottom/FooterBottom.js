import React from 'react';
import styled from 'styled-components';
import FooterInfo from './components/FooterInfo';
import FooterSns from './components/FooterSns';

const FooterBottom = () => {
  return (
    <BottomWrapper>
      <FooterLogo />
      <FooterInfo />
      <FooterSns />
    </BottomWrapper>
  );
};

const BottomWrapper = styled.div`
  width: 1100px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0;
`;

const FooterLogo = styled.div`
  width: 9.375rem;
  height: 3.125rem;
  background-image: url(../../images/megaboxu3.png);
  background-size: 100% 100%;
  margin: 0 20px 0 0;
`;

export default FooterBottom;
