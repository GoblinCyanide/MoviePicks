import React, { useEffect, useState } from 'react';

import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import Carousel from '../../../components/carousel/Carousel';
import { fetchDataFromApi } from '../../../utils/api';

const TopRatedAnime = () => {

    const [endpoint, setEndpoint] = useState("movie");
    const [data1, setData1] = useState(null);
    const [loading, setLoading] = useState(false);

    let filters = {};
    filters.with_genres = 16;

    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv");
    };

    const fetchInitialData = () => {
        setLoading(true);
        // fetchDataFromApi(`/discover/${endpoint}?&with_origin_country=JP`, filters).then((res) => {
        fetchDataFromApi(`/${endpoint}/top_rated?&with_origin_country=JP`, filters).then((res) => {
            setData1(res);
            setLoading(false);
        });
    };


    useEffect(() => {
        fetchInitialData();
    }, [endpoint]);

    return (
        <div className='carouselSection'>
            <ContentWrapper>
                <span className='carouselTitle'>Top Rated Anime</span>

                <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel
                data={data1?.results}
                loading={loading}
                endpoint={endpoint}
            />
        </div>
    )
}

export default TopRatedAnime;