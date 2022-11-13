import React from 'react';
import styled from 'styled-components';

const NavTop = () => {
  return (
    <TopWrapper>
      <TopLeft>
        {TOP_MENU.slice(0, 3).map(topMenu => (
          <LeftTitle key={topMenu.id}>{topMenu.title}</LeftTitle>
        ))}
      </TopLeft>
      <TopRight>
        {TOP_MENU.slice(3, 6).map(topMenu => (
          <RightTitle key={topMenu.id}>{topMenu.title}</RightTitle>
        ))}
      </TopRight>
    </TopWrapper>
  );
};

const TopWrapper = styled.div`
  width: 1100px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const TopLeft = styled.div`
  display: flex;
`;

const TopRight = styled.div`
  display: flex;
`;

const LeftTitle = styled.div`
  color: white;
  margin-right: 1.25rem;
  cursor: pointer;
`;

const RightTitle = styled.div`
  color: white;
  margin-left: 1.25rem;
  cursor: pointer;
`;

const TOP_MENU = [
  {
    id: 0,
    title: 'VIP LOUNGE',
  },
  {
    id: 1,
    title: '멤버십',
  },
  {
    id: 2,
    title: '고객센터',
  },
  {
    id: 3,
    title: localStorage.getItem('token') ? '로그아웃' : '로그인',
  },
  {
    id: 4,
    title: localStorage.getItem('token') ? '알림' : '회원가입',
  },
  {
    id: 5,
    title: '빠른예매',
  },
];

export default NavTop;
