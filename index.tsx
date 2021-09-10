import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import { useGetMovies } from './utils/hooks';
import Hello from './components/Hello';
import Posters from './components/Posters';

const App = () => {
  const { data, error, loading } = useGetMovies();
  const [bye, setBye] = useState(false);
  return (
    <div>
      <Hello name={'Mervin'} bye={bye} />
      <p>Below shows list of movies available this week.</p>
      {error && <p> error</p>}
      {loading && <p> loading...</p>}
      <div style={{display: "flex"}}>
      {data?.map(movie =><Posters key={movie.id} poster_path={movie.poster_path} title={movie.title}/>
         )}
      </div>
      <button style={{marginTop:'20px'}} onClick={() => setBye(s => !s)}>Update Name</button>
    </div>
  );
};

render(<App />, document.getElementById('root'));
