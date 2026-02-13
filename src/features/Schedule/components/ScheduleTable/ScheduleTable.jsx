import './ScheduleTable.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSessionsState } from '@/app/selectors/selectors'
import { fetchSessions } from '@/app/slices/sessionsSlice'
// components
import Session from '../Session'
import EmptySession from '../EmptySession'

const ScheduleTable = () => {
    
    const { GroupsSessions } = useSelector(getSessionsState);

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
                                <td key={i}>
                                    <Session num_sceance={i} formateur={s.formateur} nom_module={s.nom_module} nom_salle={s.nom_salle} />
                                </td> 
                                : <td key={i}><EmptySession num_sceance={i+1} groupId={g.groupId} /></td>
                            ))
                        }
                        {
                            g.sessions.Mardi.map((s, i) => (
                                s 
                                ?
                                <td key={i}>
                                    <Session num_sceance={i} formateur={s.formateur} nom_module={s.nom_module} nom_salle={s.nom_salle} />
                                </td> 
                                : <td key={i}><EmptySession num_sceance={i+1} groupId={g.groupId} /></td>
                            ))
                        }
                        {
                            g.sessions.Mercredi.map((s, i) => (
                                s 
                                ?
                                <td key={i}>
                                    <Session num_sceance={i} formateur={s.formateur} nom_module={s.nom_module} nom_salle={s.nom_salle} />
                                </td> 
                                : <td key={i}><EmptySession num_sceance={i+1} groupId={g.groupId} /></td>
                            ))
                        }
                        {
                            g.sessions.Jeudi.map((s, i) => (
                                s 
                                ?
                                <td key={i}>
                                    <Session num_sceance={i} formateur={s.formateur} nom_module={s.nom_module} nom_salle={s.nom_salle} />
                                </td> 
                                : <td key={i}><EmptySession num_sceance={i+1} groupId={g.groupId} /></td>
                            ))
                        }
                        {
                            g.sessions.Vendredi.map((s, i) => (
                                s 
                                ?
                                <td key={i}>
                                    <Session num_sceance={i} formateur={s.formateur} nom_module={s.nom_module} nom_salle={s.nom_salle} />
                                </td> 
                                : <td key={i}><EmptySession num_sceance={i+1} groupId={g.groupId} /></td>
                            ))
                        }
                        {
                            g.sessions.Samedi.map((s, i) => (
                                s
                                ?
                                <td key={i}>
                                    <Session num_sceance={i} formateur={s.formateur} nom_module={s.nom_module} nom_salle={s.nom_salle} />
                                </td>
                                : <td key={i}><EmptySession num_sceance={i+1} groupId={g.groupId} /></td>
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

export default ScheduleTable