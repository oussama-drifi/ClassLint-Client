import './Session.css'

const Session = ({type}) => {
    return (
        <div className={`session ${type}`} >
            <ul>
                <li><span><i className="bi bi-stopwatch"></i></span> 8:30 à 10:30</li>
                <li><span><i className="bi bi-mortarboard"></i></span> Gestion des données</li>
                <li><span><i className="bi bi-person-badge"></i></span> Mme ascour</li>
                <li>
                    <span><i className="bi bi-geo-fill"></i></span> 
                    {type === "presentiel" ? "SP-8" : (<span className='hightlight'>Teams</span>) }
                </li>
            </ul>
        </div>
    )
}

export default Session