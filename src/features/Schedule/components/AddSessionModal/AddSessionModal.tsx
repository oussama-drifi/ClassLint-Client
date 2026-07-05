import './AddSessionModal.css'
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SelectMenu from "@/components/selectMenu/selectMenu";
import { closeModal, updateSessionDetails } from "@/app/slices/addSessionSlice";
import { getSessionDetails } from '@/app/selectors/selectors';
import axios from 'axios';
// import { useEffect } from 'react';

const AddSessionModal = () => {

    const dispatch = useDispatch();

    const { placeHolder } = useSelector(getSessionDetails);

    const [newSessionData, setNewSessionData] = useState({
        type: "presentiel",
        groups: []
    })

    const [options, setOptions] = useState({
        modules: [],
        formateurs: []
    });

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

    const handleModuleChange = () => {
        // const id_module = options.modules.find(m => m.nom === )
        dispatch(updateSessionDetails({}));
        console.log(placeHolder);
        // axios.get(`http://127.0.0.1:5000/api/formateur?id_module=${placeHolder.module.id}&id_groupe=${placeHolder.group.id}`).then((res) => setOptions({
        //     ...options,
        //     formateurs: res.data
        // }))
    }

    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/api/modules/${placeHolder.group.id}`).then((res) => setOptions({
            ...options,
            modules: res.data
        }))
    }, [])

    return (
        <div className='overlay'>
            <div className="add-session-modal" ref={modalRef}>
                <button className="close-modal-btn" ref={closeButtonRef} onClick={() => dispatch(closeModal())}><i className="bi bi-x-lg"></i></button>
                <h2>Ajouter une Séance</h2>
                <form onSubmit={onFormSublit}>
                    <div className='form-group'>
                        <div className="form-control">
                            
                        </div>
                        <SelectMenu options={options.modules.map(o => o.nom)} initial_text={"choisir un module"} onChange={() => handleModuleChange()}/>
                        <SelectMenu options={['SP-1', 'SP-2', 'SC-10', 'SP-4', 'SP-8', 'LAB-3']} initial_text={"choisir une salle"} />
                    </div>
                    <div className='form-control'>
                        <SelectMenu options={options.formateurs} initial_text={"choisir un formateur"} />
                        <SelectMenu options={['developpement frontend', 'developpement backend', 'genstion des données', 'projet web', 'approche agile']} initial_text={"choisir une salle"} />
                    </div>
                    <button type="submit" className='submit-btn'>ajouter Séance</button>
                </form>
            </div>
        </div>
    )
}

export default AddSessionModal