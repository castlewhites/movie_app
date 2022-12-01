import React from 'react';
import Landing from '../../components/Landing';
import SectionBanner from '../../components/SectionBanner';
import { useGetMovies } from '../../hooks/useGetMovies';

import './Home.scss';

function Home() {
  useGetMovies();
  const movieList = useGetMovies();
  return (
    <main className="home">
      <Landing cover={movieList[0]} />
      <SectionBanner
        title=" Comedias"
        movieList={movieList}
      />
      <SectionBanner
        title=" Terror"
        movieList={movieList}
      />
      <SectionBanner
        title=" Series"
        movieList={movieList}
      />

    </main>
  );
}
export default Home;
