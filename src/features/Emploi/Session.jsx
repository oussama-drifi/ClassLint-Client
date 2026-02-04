import './Session.css'

const Session = ({num_sceance, formateur, nom_module, nom_salle}) => {
    const timings = ['8:30 à 10:30', '10:30 à 13:00', '13:30 à 16:00', '16:00 à 18:30']
    return (
        <div className={`session ${nom_salle === "Teams" ? "distanciel" : "presentiel"}`} >
            <ul>
                <li><span><i className="bi bi-stopwatch"></i></span> {timings[num_sceance]}</li>
                <li><span><i className="bi bi-mortarboard"></i></span> {nom_module}</li>
                <li><span><i className="bi bi-person-badge"></i></span> {formateur}</li>
                <li>
                    <span><i className="bi bi-geo-fill"></i></span> 
                    {nom_salle === "Teams" ? (<span className='hightlight'>Teams</span>) : nom_salle }
                </li>
            </ul>
        </div>
    )
}

export default Session