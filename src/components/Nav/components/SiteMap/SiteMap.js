import React from 'react';
import styled from 'styled-components';
import SiteMapContent from './components/SiteMapContent';

const SiteMap = () => {
  return (
    <SiteMapWrapper>
      <SiteMapHeader>SITEMAP</SiteMapHeader>
      <SiteMapBody>
        {SITEMAP.map(siteMap => (
          <SiteMapContent key={siteMap.id} siteMap={siteMap} />
        ))}
      </SiteMapBody>
    </SiteMapWrapper>
  );
};

const SiteMapWrapper = styled.div`
  width: 100%;
  height: 21.875rem;
  background-color: #333333;
`;

const SiteMapHeader = styled.p`
  width: 1100px;
  padding: 50px 0 25px 0;
  color: white;
  font-size: 1.4666em;
  margin: 0 auto;
`;

const SiteMapBody = styled.div`
  width: 1100px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const SITEMAP = [
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

export default SiteMap;
