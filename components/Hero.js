import React from 'react';
import Particles from 'react-particles-js';

import particlesConfig from '../config/particlesConfig';


const Hero = () => {
    return (
        <>
            <div className="bg-indigo-900">
                <Particles
                    params={particlesConfig}
                    height="100vh"
                />
            </div>

            {/* <style jsx>{`
                .hero {
                    background-color: #191D25;
                }
            `}</style> */}
        </>
    );
}

export default Hero;