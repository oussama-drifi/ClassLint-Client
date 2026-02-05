import { useEffect, useId, useRef, useState } from "react";
import './AddSessionModal.css'
import SelectMenu from "./selectMenu/selectMenu";
import { useDispatch } from "react-redux";
import { openModal, closeModal } from "../addSessionSlice";

const AjouteSceance = () => {

    const dispatch = useDispatch()

    const [selectedOption, setSelectedOption] = useState("select option");

    const modalRef = useRef(null);
    const closeButtonRef = useRef(null);

    // useEffect(() => {
    //     const closeMenuOnOuterClick = (e) => {
    //         if(closeButtonRef.current && !modalRef.current.contains(e.target)){
    //             dispatch(closeModal())
    //         }
    //     }
    //     document.addEventListener('click', closeMenuOnOuterClick)
    //     return () => {
    //         document.removeEventListener('click', closeMenuOnOuterClick)
    //     }
    // }, [])

    const onFormSublit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='overlay'>
            <div className="add-session-modal" ref={modalRef}>
                <button className="close-modal-btn" ref={closeButtonRef} onClick={() => dispatch(closeModal())}><i className="bi bi-x-lg"></i></button>
                <h1>Ajouter une Séance</h1>
                <form onSubmit={onFormSublit}>
                    <SelectMenu options={['alami', 'hakiki', 'haqay', 'ascour', 'brinsi', 'el omari', 'essoufiani']}/>
                    <SelectMenu options={['SP-1', 'SP-2', 'SC-10', 'SP-4', 'SP-8', 'LAB-3']}/>
                    <SelectMenu options={['developpement frontend', 'developpement backend', 'genstion des données', 'projet web', 'approche agile']}/>
                    <button type="submit">ajouter Séance</button>
                </form>
            </div>
        </div>
    )
}

export default AjouteSceance