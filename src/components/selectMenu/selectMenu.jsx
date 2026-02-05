import { useEffect, useRef, useState } from 'react'
import './selectMenu.css'

const SelectMenu = ({options, refetch}) => {
    const [isOptionSelected, setIsOptionSelected] = useState(false);
    const [isShown, setIsShown] = useState(false);
    const [selectedOption, setSelectedOption] = useState("select option");

    const valRef = useRef(null);

    useEffect(() => {
        valRef.current = selectedOption;
    }, []);

    // toggle options menu
    const handleChange = (option, index) => {
        if (valRef.current !== option) {
            setSelectedOption(option);
            valRef.current = option;
            refetch(index+1);
        }
        setIsOptionSelected(true);
        setIsShown(prev => !prev);
        buttonRef.current?.focus();
    }

    // DOM elements
    const wrapperRef = useRef(null);
    const buttonRef = useRef(null);
    const optionsRef = useRef(null);
    
    // attach event to document in case of out-ou-menu click
    useEffect(() => {
        const closeMenuOnOuterClick = (e) => {
            if(buttonRef.current && !buttonRef.current.contains(e.target)){
                setIsShown(false);
            }
        }
        document.addEventListener('click', closeMenuOnOuterClick)
        return () => {
            document.removeEventListener('click', closeMenuOnOuterClick)
        }
    }, [])

    return (
        <div className={`select-wrapper ${isOptionSelected ? "selected" : ""}`} ref={wrapperRef}>
            <input 
                type="hidden" 
                value={selectedOption}
            />
            <div 
                className="selected-option" 
                onClick={() => setIsShown(prev => !prev)} 
                ref={buttonRef}
            >
                <span className="selected">{selectedOption}</span> <span className={isShown ? "rotate" : ""}><i className={`bi bi-chevron-down`}></i></span>
            </div>
            <ul 
                className={`options ${isShown ? "options-shown" : ""}`} 
                ref={optionsRef}
            >
                {
                    options.map((option, index) => (
                        <li key={option}
                            onClick={() => handleChange(option, index)}
                        >{option}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SelectMenu