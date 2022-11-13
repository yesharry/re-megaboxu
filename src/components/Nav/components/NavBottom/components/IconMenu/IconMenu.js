import React from 'react';
import { BiMenu, BiSearch } from 'react-icons/bi';
import { BsCalendar3, BsPerson } from 'react-icons/bs';
import styled from 'styled-components';

const IconMenu = () => {
  return (
    <IconWrapper>
      <LeftIcon>
        {MENU_ICON.slice(0, 2).map(left => (
          <IconDiv key={left.id}>{left.icon}</IconDiv>
        ))}
      </LeftIcon>
      <RightIcon>
        {MENU_ICON.slice(2, 4).map(right => (
          <IconDiv key={right.id}>{right.icon}</IconDiv>
        ))}
      </RightIcon>
    </IconWrapper>
  );
};

const IconWrapper = styled.div`
  width: 1100px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const LeftIcon = styled.div`
  display: flex;
`;

const RightIcon = styled.div`
  display: flex;
`;

const IconDiv = styled.div`
  width: 2.25rem;
  height: 2.25rem;
  font-size: 1.563rem;
  color: white;
  cursor: pointer;
`;

const MENU_ICON = [
  {
    id: 0,
    icon: <BiMenu />,
  },
  {
    id: 1,
    icon: <BiSearch />,
  },
  {
    id: 2,
    icon: <BsCalendar3 />,
  },
  {
    id: 3,
    icon: <BsPerson />,
  },
];

export default IconMenu;
