import React from 'react';
import './style.css';

export function Cloud() {

    const randomX = (Math.random() * window.screen.width).toFixed() - window.screen.width / 2;
    const randomS = (Math.random() * 10).toFixed();
    
    return <div style={{ left: randomX, animationDelay: randomS }} className="cloud"/>
}