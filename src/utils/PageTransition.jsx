// components/PageTransition.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const PageTransition = ({ children }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        // Animation to slide in from the right
        tl.fromTo(
            containerRef.current,
            { x: '100vw', opacity: 0 }, // Start off-screen to the right
            { x: 0, opacity: 1, duration: 0.5 } // Slide to on-screen and fade in
        );

        // Reset animation on component unmount
        return () => {
            tl.kill();
        };
    }, []);

    return <div ref={containerRef}>{children}</div>;
};

export default PageTransition;
