import React from 'react';
import bg from '../../assets/images/Subscribe.jpg'


const Subscribe = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${bg})`,
                minHeight: '560px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
        </div>
    );
};

export default Subscribe;