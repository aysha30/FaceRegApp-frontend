import React from 'react';
import Tilt from 'react-tilt';
import Ai from './ai.png';
import './Logo.css';

const Logo = () => {
    return(
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 60 }} style={{ height: 125, width: 125 }} >
                <div className="Tilt-inner pa3">
                    <img style={{paddingTop: '3px'}} alt='Logo' src={Ai} /> 
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;