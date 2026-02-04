import './TableEmploi.css'
import Session from './Session'
import EmptySession from './EmptySession'
import { useEffect, useState } from 'react'
import axios from 'axios'



const TableEmploi = () => {

    const [GroupsSessions, setGroupsSessions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errMessage, setErrMessage] = useState(null);

    useEffect(() => {
        const fetchGroupsSessions = async () => {
            try {
                const res = await axios.get("http://127.0.0.1:5000//api/emploi/1");
                setTimeout(() => {
                    setGroupsSessions(res.data);
                    setIsLoading(false);
                }, 200);
            } catch (err) {
                setErrMessage(err)
            }
        }
        fetchGroupsSessions()
    }, [])

    return (
    <div className='table-wrapper'>
        <table className='schedule-table'>
        <thead>
            <tr>
                <th rowSpan={2}></th>
                <th colSpan={4}>Lundi</th>
                <th colSpan={4}>Mardi</th>
                <th colSpan={4}>Mercredi</th>
                <th colSpan={4}>Jeudi</th>
                <th colSpan={4}>Vendredi</th>
                <th colSpan={4}>Samedi</th>
            </tr>
        </thead>
        <tbody>
            {
                GroupsSessions.map(g => (
                    <tr key={g.groupName}>
                        <td>{g.groupName}</td>
                        {
                            g.sessions.Lundi.map((s, i) => (
                                s 
                                ? 
                                <td>
                                    <Session num_sceance={i+1} formateur={s.formateur} nom_module={s.nom_module} nom_salle={s.nom_salle} />
                                </td> 
                                : <td><EmptySession /></td>
                            ))
                        }
                        {
                            g.sessions.Mardi.map((s, i) => (
                                s 
                                ?
                                <td>
                                    <Session num_sceance={i+1} formateur={s.formateur} nom_module={s.nom_module} nom_salle={s.nom_salle} />
                                </td> 
                                : <td><EmptySession /></td>
                            ))
                        }
                        {
                            g.sessions.Mercredi.map((s, i) => (
                                s 
                                ?
                                <td>
                                    <Session num_sceance={i+1} formateur={s.formateur} nom_module={s.nom_module} nom_salle={s.nom_salle} />
                                </td> 
                                : <td><EmptySession /></td>
                            ))
                        }
                        {
                            g.sessions.Jeudi.map((s, i) => (
                                s 
                                ?
                                <td>
                                    <Session num_sceance={i+1} formateur={s.formateur} nom_module={s.nom_module} nom_salle={s.nom_salle} />
                                </td> 
                                : <td><EmptySession /></td>
                            ))
                        }
                        {
                            g.sessions.Vendredi.map((s, i) => (
                                s 
                                ?
                                <td>
                                    <Session num_sceance={i+1} formateur={s.formateur} nom_module={s.nom_module} nom_salle={s.nom_salle} />
                                </td> 
                                : <td><EmptySession /></td>
                            ))
                        }
                        {
                            g.sessions.Samedi.map((s, i) => (
                                s
                                ?
                                <td>
                                    <Session num_sceance={i+1} formateur={s.formateur} nom_module={s.nom_module} nom_salle={s.nom_salle} />
                                </td>
                                : <td><EmptySession /></td>
                            ))
                        }
                    </tr>
                ))
            }
            </tbody>
        </table>
        </div>
    )
}

export default TableEmploi