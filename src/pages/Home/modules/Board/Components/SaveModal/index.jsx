import React from 'react';
import Modal from 'react-modal';
import { Input } from '../../../../../../components';
import './style.css';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: 0,
        border: 'none',
    },
};

Modal.setAppElement('#root');

export function SaveModal({ isModalOpen, toggleModal }) {

    const CPrefix = "Page-Home-Module-Board-Component-SaveModal";
    const [ name, setName ] = React.useState(null);

    return (
        <Modal
            isOpen={isModalOpen}
            onRequestClose={toggleModal}
            style={{ content: { ...customStyles.content, borderRadius: 6 }, overlay: { backgroundColor: 'rgba(0, 0, 0, 0.75)' } }}
        >
            <div className={CPrefix + '-container'}>
                <div className={CPrefix + '-title'}>Name:</div>
                <Input placeholder="Name" setValue={setName}/>
            </div>
        </Modal>
    );
}