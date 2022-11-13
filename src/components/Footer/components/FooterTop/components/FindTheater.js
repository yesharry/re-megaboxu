import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const FindTheater = () => {
  return (
    <FindBtn>
      <FaSearch />
      극장찾기
    </FindBtn>
  );
};

const FindBtn = styled.button`
  width: 6.625rem;
  height: 1.875rem;
  border: 0.063rem solid #d8d9db;
  border-radius: 3.125rem;
  background-color: transparent;
  color: #666;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  cursor: pointer;
`;

export default FindTheater;
