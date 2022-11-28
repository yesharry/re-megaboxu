import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MovieChart from './components/MovieChart';

const SearchBox = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetch('/data/MOVIE_CHART.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setMovieList(data);
      });
  }, []);

  return (
    <SearchBoxWrapper>
      <SearchBoxContent>
        {movieList.slice(0, 5).map(movieList => (
          <MovieChart key={movieList.id} movieList={movieList} />
        ))}
      </SearchBoxContent>
    </SearchBoxWrapper>
  );
};

const SearchBoxWrapper = styled.div`
  width: 100%;
  height: 23.75rem;
  background-color: #351f67;
`;

const SearchBoxContent = styled.div`
  width: 1100px;
  background-color: yellowgreen;
  margin: 0 auto;
`;

export default SearchBox;
