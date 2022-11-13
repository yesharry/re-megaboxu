import React from 'react';
import styled from 'styled-components';
import { FaYoutube, FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const FooterSns = () => {
  return (
    <SnsDiv>
      {SNS.map(sns => (
        <SnsIcon key={sns.id}>{sns.icon}</SnsIcon>
      ))}
    </SnsDiv>
  );
};

const SnsDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const SnsIcon = styled.div`
  width: 1.875rem;
  height: 1.875rem;
  border-radius: 50%;
  background-color: #adadaf;
  ${props => props.theme.flex.flexBox('_', 'center', 'center')}
  font-size: 1.25rem;
  color: white;
  margin-left: 0.156rem;
  margin-right: 0.156rem;
  cursor: pointer;
`;

const SNS = [
  {
    id: 0,
    icon: <FaYoutube />,
  },
  {
    id: 1,
    icon: <FaInstagram />,
  },
  {
    id: 2,
    icon: <FaFacebookF />,
  },
  {
    id: 3,
    icon: <FaTwitter />,
  },
];

export default FooterSns;
