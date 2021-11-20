import React from 'react';
import './style.css';

export function Welcome() {

    const CPrefix = "Page-Home-Component-Welcome";
    const [animation, setAnimation] = React.useState(true);

    return (
        <div className={CPrefix} style={{ animationPlayState: animation ? "paused" : "running" }} onClick={() => setAnimation(false)}>
            <div className={CPrefix + '-text'}>Welcome !</div>
            <div className={CPrefix + '-alert'}>
                <input className={CPrefix + '-checkbox'} type="checkbox"/>
                <div className={CPrefix + '-alert-text'}>Don't show this again ?</div>
            </div>
        </div>
    )
}