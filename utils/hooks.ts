import { useEffect, useState } from 'react';
import axios from 'axios';
import { Movie } from './types';

export const useGetMovies = () => {
  const [data, setData] = useState<Movie[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const getMovies = async () => {
    try {
      setLoading(true);
      const { data } = await axios(
        'https://api.themoviedb.org/3/discover/movie?api_key=e6171b13d4159aa39793cc0b447bbb93&sort_by=popularity.desc'
      );
      setLoading(false);
      setData(data!.results);
    } catch (e) {
      setError(true);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return { data, error, loading };
};
