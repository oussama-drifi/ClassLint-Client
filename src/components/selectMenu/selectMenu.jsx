import { useEffect, useRef, useState } from 'react'
import './selectMenu.css'

const SelectMenu = ({options}) => {
    const [isOptionSelected, setIsOptionSelected] = useState(false)
    const [isShown, setIsShown] = useState(false);
    const [selectedOption, setSelectedOption] = useState("select option");
    const [focusedIndex, setFocusedIndex] = useState(-1);

    // toggle options menu
    const handleChange = (option) => {
        setIsOptionSelected(true)
        setSelectedOption(option);
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

    useEffect(() => {
        if (isShown && focusedIndex >= 0) {
        const el = optionsRef.current?.children[focusedIndex];
        el?.focus();
        }
    }, [focusedIndex, isShown]);

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
                    options.map(option => (
                        <li key={option}
                            onClick={() => handleChange(option)}
                        >{option}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SelectMenu