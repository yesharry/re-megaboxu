import React from 'react';
import styled from 'styled-components';

const MenuTitle = ({ navTitle, navId, hoverOn }) => {
  return (
    <MenuTitleLi
      onMouseEnter={() => {
        hoverOn(navTitle.id);
      }}
    >
      {navTitle.title}
      <MenuTitleUl>
        {navId === navTitle.id &&
          navTitle.category.map((category, i) => (
            <DropLi key={i}>{category}</DropLi>
          ))}
      </MenuTitleUl>
    </MenuTitleLi>
  );
};

const MenuTitleLi = styled.li`
  border: 1px solid black;
`;

const MenuTitleUl = styled.ul`
  display: flex;
`;

const DropLi = styled.li``;

export default MenuTitle;
