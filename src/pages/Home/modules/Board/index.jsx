import { useState } from 'react';
import { Button, Colors, Drawing, SaveModal } from './Components';
import './style.css';

export function Board({ NavigateHome, clearLines }) {

    const CPrefix = "Page-Board";

    const [selectedColor, setColor] = useState("black");
    const [isModalOpen, setModal] = useState(false);

    function toggleModal() {
        setModal(!isModalOpen);
    }

    return (
        <div className={CPrefix}>
            <SaveModal {...{ isModalOpen, toggleModal }}/>
            <div className={CPrefix + '-header'}>
                <Button icon="fas fa-arrow-left" onClick={NavigateHome}/>
                <Colors setColor={setColor} />
                <Button icon="fas fa-save" onClick={toggleModal}/>
            </div>
            <Drawing color={selectedColor}/>
        </div>
    )
}