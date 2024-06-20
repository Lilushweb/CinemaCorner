import React, {useState} from 'react';
import Modal from "react-modal";
import {filmsApi} from "../services/PostService.ts";
import {IStaff} from "../models/IStaff.ts";
import { IoClose } from "react-icons/io5";
import { CiCircleInfo } from "react-icons/ci";
import '../style/ModelWind.css'


const ModelWind: React.FC <{ staff: IStaff }> = ({staff}) => {
    const [modalIsOpen, setIsOpen] = useState(false)
    const openModal = () => {
        setIsOpen(true)
    }
    const closeModal = () => {
        setIsOpen(false)
    }



    return (
        <div className="ModalWind">
            <div className="infoDiv">
            <button onClick={openModal} className="buttInfo"><CiCircleInfo  className="info"/></button>
            </div>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                <button onClick={closeModal} className="clousButton"><IoClose /></button>
                <span className="text">{null && staff.age} {staff.nameEn}</span>
                <img alt={staff.posterUrl} src={staff.posterUrl} className="fotoActor"></img>
                <div className="contenerFilm">
                    <h3>Took part in the films :</h3>
                    {staff.films && staff.films.map((element, index) => (
                        <div>
                            <span key={index} className="staffFilm">{element.nameEn},</span>
                            <span> {element.rating ? `Reting: ${element.rating}` : ''}  in the role {element.professionKey.toLocaleLowerCase()}{staff.films[index + 1] ? "," : "."}</span>
                        </div>
                        ))}
                </div>
            </Modal>



        </div>
    );
};

export default ModelWind;