import React, { useState } from 'react';
import styled from 'styled-components';

const MovieChart = ({ movieList }) => {
  const [posterValue, setPosterValue] = useState(0);

  const hoverRank = movie_id => {
    setPosterValue(movie_id);
  };
  return (
    <ChartWrapper>
      {/* <MoviePoster /> */}
      <MovieRank>
        <Rank>{movieList.id + 1}</Rank>
        <RankTitle>{movieList.title}</RankTitle>
      </MovieRank>
    </ChartWrapper>
  );
};

const ChartWrapper = styled.div`
  display: flex;
`;

// const MoviePoster = styled.div`
//   width: 150px;
//   height: 240px;
//   background-color: yellow;
// `;

const MovieRank = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: pink;
`;

const Rank = styled.span`
  font-size: 30px;
  color: white;
  font-style: italic;
`;

const RankTitle = styled.span`
  padding-left: 15px;
  font-size: 17px;
  color: white;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export default MovieChart;
