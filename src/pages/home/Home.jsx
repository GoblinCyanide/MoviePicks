import React from 'react'
import './style.scss';
import HeroBanner from './heroBanner/HeroBanner';
import Trending from './trending/Trending';
import Popular from './popular/Popular';
import TopRated from './topRated/TopRated';
import Animation from './animation/Animation';
import Anime from './anime/Anime';
import Korean from './korean/Korean';
import TopRatedAnime from './topRatedAnime/TopRatedAnime';
import Indian from './indian/Indian';
import PopularKorean from './popularKorean/PopularKorean';


const Home = () => {
  return (
    <div className='homePage'>
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
      <Animation />
      <Anime />
      <TopRatedAnime />
      <Korean />
      <PopularKorean />
      <Indian />


    </div>
  )
}

export default Home;