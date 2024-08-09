import React from 'react';

const Home = ({ message }) => {
    return (
        <div className='main-home'>
            <h2>Home Page</h2>
            <p>{message}</p>
        </div>
    );
};

export default Home;
