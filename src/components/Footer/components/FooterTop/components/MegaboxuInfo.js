import React from 'react';
import styled from 'styled-components';

const MegaboxuInfo = () => {
  return (
    <MegaWrapper>
      {INFO.map(info => (
        <InfoText key={info.id} bold={info.bold}>
          {info.title}
        </InfoText>
      ))}
    </MegaWrapper>
  );
};

const MegaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const InfoText = styled.span`
  margin-right: 0.875rem;
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: ${bold => (bold.bold ? 'bold' : 'none')};
  color: #717171;
`;

const INFO = [
  {
    id: 0,
    title: '회사소개',
    bold: false,
  },
  {
    id: 1,
    title: '인재채용',
    bold: false,
  },
  {
    id: 2,
    title: '사회공헌',
    bold: false,
  },
  {
    id: 3,
    title: '제휴/광고/부대사업문의',
    bold: false,
  },
  {
    id: 4,
    title: '이용약관',
    bold: false,
  },
  {
    id: 5,
    title: '위치기반서비스 이용약관',
    bold: false,
  },
  {
    id: 6,
    title: '개인정보처리방침',
    bold: true,
  },
  {
    id: 7,
    title: '윤리경영',
    bold: false,
  },
];

export default MegaboxuInfo;
