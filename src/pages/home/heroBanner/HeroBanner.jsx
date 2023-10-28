import React, { useState, useEffect } from 'react'
import "./style.scss";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useFetch from '../../../hooks/useFetch';

import Img from '../../../components/lazyLoadImage/Img';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';

const HeroBanner = () => {
    const [background, setBackground] = useState("");
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const { url } = useSelector((state) => state.home);
    const {data, loading} = useFetch("/movie/upcoming");
    useEffect(() => {
        // Check if data is defined before accessing properties
        if (data && data.results && data.results.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.results.length);
          const backdropPath = data.results[randomIndex].backdrop_path;
      
          // Check if url and backdropPath are defined before setting the background
          if (url && url.backdrop && backdropPath) {
            const bg = url.backdrop + backdropPath;
            setBackground(bg);
          }
        }
      }, [data, url]);

    const searchQueryHandler = (event) => {
        if(event.key === "Enter" && query.length > 0){
            navigate(`/search/${query}`);
        }
    }

    return (
        <div className='heroBanner'>
            {!loading && <div className='backdrop-img'>
                <Img src = {background} />
            </div>}

            <div className='opacity-layer'></div>

            <ContentWrapper>
                    <div className='heroBannerContent'>
                        <span className='title'>Welcome</span>
                        <span className='subTitle'>
                            Millions of movies, TV shows and people to discover.
                            Explore now.
                        </span>
                        <div className='searchInput'>
                            <input 
                                type="text" 
                                placeholder='Search for a movie or tv show...'
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyUp={searchQueryHandler}
                            />
                            <button>Search</button>
                        </div>
                    </div>
            </ContentWrapper>
        </div>
    )
}

export default HeroBanner;