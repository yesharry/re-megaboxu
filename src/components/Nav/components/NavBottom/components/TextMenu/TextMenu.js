import React, { useState } from 'react';
import styled from 'styled-components';
import DropMenu from './DropMenu';

const TextMenu = () => {
  const [navId, setNavId] = useState('');

  const hoverOn = navId => {
    setNavId(navId);
  };

  const hoverOff = () => {
    setNavId('');
  };

  return (
    <TextMenuWrapper onMouseLeave={hoverOff}>
      <RightMenuUl>
        {NAV_TITLES.slice(0, 3).map(navTitle => (
          <DropMenu
            key={navTitle.id}
            navTitle={navTitle}
            navId={navId}
            hoverOn={hoverOn}
          />
        ))}
      </RightMenuUl>
      <LeftMenuUl>
        {NAV_TITLES.slice(3, 6).map(navTitle => (
          <DropMenu
            key={navTitle.id}
            navTitle={navTitle}
            navId={navId}
            hoverOn={hoverOn}
          />
        ))}
      </LeftMenuUl>
    </TextMenuWrapper>
  );
};

const TextMenuWrapper = styled.div`
  width: 1100px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  background-color: yellow;
`;

const RightMenuUl = styled.ul`
  display: flex;
`;

const LeftMenuUl = styled.ul`
  display: flex;
`;

const NAV_TITLES = [
  {
    id: 0,
    title: '영화',
    link: '/movielist',
    category: ['전체영화', '큐레이션', '무비포스트'],
  },
  {
    id: 1,
    title: '예매',
    link: '/booking',
    category: ['빠른예매', '상영시간표', '더 부티크 프라이빗 예매'],
  },
  {
    id: 2,
    title: '극장',
    link: '',
    category: ['전체극장', '특별관'],
  },
  {
    id: 3,
    title: '이벤트',
    link: '',
    category: ['진행중 이벤트', '지난 이벤트', '당첨자발표'],
  },
  {
    id: 4,
    title: '스토어',
    link: '',
    category: [''],
  },
  {
    id: 5,
    title: '혜택',
    link: '',
    category: ['메가박스 멤버십', '제휴/할인'],
  },
];

export default TextMenu;
