import React from 'react';
import styled from 'styled-components';

const SiteMapContent = ({ siteMap }) => {
  return (
    <ContentDiv>
      <ContentTitle>{siteMap.title}</ContentTitle>
      {siteMap.category.map(category => (
        <ContentCategory>{category}</ContentCategory>
      ))}
    </ContentDiv>
  );
};

const ContentDiv = styled.div`
  width: 9.938rem;
`;

const ContentTitle = styled.div`
  height: 3rem;
  color: #fff;
  font-size: 1.2em;
  border-top: 1px solid rgba(68, 68, 68, 0.5);
  border-bottom: 1px solid rgba(68, 68, 68, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentCategory = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 18px;
  color: #bbb;
  cursor: pointer;

  &:hover {
    color: #339eb1;
    text-decoration: underline;
  }
`;

export default SiteMapContent;
