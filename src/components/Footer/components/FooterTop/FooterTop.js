import React from 'react';
import styled from 'styled-components';
import FindTheater from './components/FindTheater';
import MegaboxuInfo from './components/MegaboxuInfo';

const FooterTop = () => {
  return (
    <TopWrapper>
      <MegaboxuInfo />
      <FindTheater />
    </TopWrapper>
  );
};

const TopWrapper = styled.div`
  width: 1100px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 1.875rem 0;
`;

export default FooterTop;
