import React from 'react';
import { Movie } from '../utils/types';

const Posters = ({
  poster_path,
  title
}: {
  poster_path: Movie['poster_path'];
  title: Movie['title'];
}) => {
  return (
    <img
      style={{ borderRadius: '10px', marginRight: '10px' }}
      src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${poster_path}`}
      alt={title}
    />
  );
};

export default Posters;
