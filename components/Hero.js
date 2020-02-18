import React from 'react';
import Particles from 'react-particles-js';

import useScript from '../components/hooks/useScript';

import particlesConfig from '../config/particlesConfig';


const Hero = () => {
    useScript('https://cdn.rawgit.com/progers/pathseg/master/pathseg.js');

    return (
        <>
            <div className="hero">
                <Particles
                    params={particlesConfig}
                    height="100vh"
                />
            </div>

            <style jsx>{`
                .hero {
                    background-color: #191D25;
                }
            `}</style>
        </>
    );
}

export default Hero;