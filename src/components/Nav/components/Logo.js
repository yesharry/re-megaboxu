import React from 'react';
import styled from 'styled-components';

const Logo = () => {
  return (
    <LogoWrapper>
      <LogoImg />
    </LogoWrapper>
  );
};

const LogoWrapper = styled.div`
  width: 1100px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

const LogoImg = styled.div`
  width: 9.375rem;
  height: 3.125rem;
  background-image: url(../../images/megaboxu2.png);
  background-size: 100% 100%;
  cursor: pointer;
`;

export default Logo;
