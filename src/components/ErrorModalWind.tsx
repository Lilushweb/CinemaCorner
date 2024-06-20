import React, {useState} from 'react';
import {CiCircleInfo} from "react-icons/ci";
import Modal from "react-modal";
import {IoClose} from "react-icons/io5";
import '../style/errorModalWInd.css'

const ErrorModalWind = () => {
    const [error, setError] = useState(false)

    const openErrorModal = () => {
        setError(true)
    }
    const closeErrorModal = () => {
        setError(false)
    }

    return (
        <div>
            <button onClick={openErrorModal} className="errorBtn"><CiCircleInfo className="info"/></button>
            <Modal isOpen={error} onRequestClose={closeErrorModal}>
                <button onClick={closeErrorModal} className="clousButton"><IoClose /></button>
                <h2 className="text">Error 500</h2>
            </Modal>
        </div>
    );
};

export default ErrorModalWind;