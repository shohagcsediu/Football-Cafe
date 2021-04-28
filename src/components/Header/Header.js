import React from 'react';
import TopBanner from '../image/top.jpg'

const Header = () => {
    const headBanner ={
        textAlign: 'center',
        backgroundImage: `url(${TopBanner})`,
        backgroundSize: 'cover',
        height: '200px',
        width: '100%',
        color:'white',
        paddingTop: '100px'
    }
    return (
        <h1 style={headBanner}>Football Cafe</h1>
    );
};

export default Header;