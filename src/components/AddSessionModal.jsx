import { useEffect, useId, useRef, useState } from "react";
import './AddSessionModal.css'
import SelectMenu from "./selectMenu/selectMenu";

const AjouteSceance = ({setIsModalOpen}) => {

    const [selectedOption, setSelectedOption] = useState("select option");


    const modalRef = useRef(null);
    const closeButtonRef = useRef(null);

    useEffect(() => {
        const closeMenuOnOuterClick = (e) => {
            if(closeButtonRef.current && !modalRef.current.contains(e.target)){
                setIsModalOpen(false);
            }
        }
        document.addEventListener('click', closeMenuOnOuterClick)
        return () => {
            document.removeEventListener('click', closeMenuOnOuterClick)
        }
    }, [])

    // const moduleID = useId();
    // const formateurID = useId();
    // const salleID = useId();

    const onFormSublit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='overlay'>
            <div className="add-session-modal" ref={modalRef}>
                <h1>Ajouter une Scéance</h1>
                <button ref={closeButtonRef} onClick={() => setIsModalOpen(false)}>close</button>
                <form onSubmit={onFormSublit}>
                    <SelectMenu options={['alami', 'hakiki', 'haqay', 'ascour', 'brinsi', 'el omari', 'essoufiani']}/>
                    <SelectMenu options={['SP-1', 'SP-2', 'SC-10', 'SP-4', 'SP-8', 'LAB-3']}/>
                    <SelectMenu options={['developpement frontend', 'developpement backend', 'genstion des données', 'projet web', 'approche agile']}/>
                    <button type="submit">ajouter Sséance</button>
                </form>
            </div>
        </div>
    )
}

export default AjouteSceance