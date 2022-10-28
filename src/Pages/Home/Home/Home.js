import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UseTitle from '../../../hooks/UseTitle';
import NewsSummeryCard from '../../Shired/NewsSummeryCard/NewsSummeryCard';

const Home = () => {
    UseTitle('Home')
    const allNews = useLoaderData()
    return (
        <div>
            <h3>this is home page {allNews.length}</h3>
            {
                allNews.map(news => <NewsSummeryCard
                    key={news._id}
                    news={news}
                >

                </NewsSummeryCard>)
            }

        </div>
    );
};

export default Home;