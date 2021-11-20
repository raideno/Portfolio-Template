import React from 'react';
import './style.css';

export function FlushButton({ state, toggleState }) {
    
    const CPrefix = "Page-About-Component-FlushButton";

    return (
        <div className={CPrefix} onClick={toggleState}>
            <div className={CPrefix + '-bar'} style={{ backgroundColor: state ? "#FFDE0099" : "var(--color-night)" }}/>
            <div className={CPrefix + '-circle'} style={{ borderColor: state ? "#FFDE0099" : "var(--color-night)", color: state ? "#FFDE0099" : "var(--color-night)" }}>{state ? <i class="fas fa-sun"/> : <i class="fas fa-moon"/>}</div>
        </div>
    );
}