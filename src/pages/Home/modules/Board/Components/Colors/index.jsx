import React from 'react';
import './style.css';

export function Colors({ setColor }) {

    const colors = ["black", "green", "red", "yellow", "blue"];

    const CPrefix = "Page-Board-Component-Colors";

    return (
        <div className={CPrefix}>
            {colors.map((color, i) => {
                return (
                    <div className={CPrefix + '-color'} onClick={() => setColor(color)} style={{ backgroundColor: color }}/>
                )
            })}
        </div>
    )
}