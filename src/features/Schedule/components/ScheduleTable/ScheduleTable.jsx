import './ScheduleTable.css'
import { useSelector } from 'react-redux'
import { getSessionsState } from '@/app/selectors/selectors'
// components
import Session from '../Session'
import EmptySession from '../EmptySession'

const ScheduleTable = () => {
    
    const { GroupsSessions, week_start } = useSelector(getSessionsState);

    
    const getFormatedDate = (datetime) => {
        const date = new Date(datetime);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = String(date.getFullYear()).slice(-2);

        return `${day}/${month}/${year}`;
    }

    function addDays(dateStr, num) {
        const date = new Date(dateStr);
        date.setDate(date.getDate() + num);
        return date.toISOString().split('T')[0]; // Returns YYYY-MM-DD
    }

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
                                    <Session id_seance={s.id_seance} num_sceance={i} formateur={s.formateur} nom_module={s.nom_module} nom_salle={s.nom_salle} />
                                </td> 
                                : <td key={i}><EmptySession groupName={g.groupName} num_sceance={i+1} groupId={g.groupId} sessionDate={week_start} /></td>
                            ))
                        }
                        {
                            g.sessions.Mardi.map((s, i) => (
                                s 
                                ?
                                <td key={i}>
                                    <Session id_seance={s.id_seance} num_sceance={i} formateur={s.formateur} nom_module={s.nom_module} nom_salle={s.nom_salle} />
                                </td> 
                                : <td key={i}><EmptySession groupName={g.groupName} num_sceance={i+1} groupId={g.groupId} sessionDate={addDays(week_start, 1)} /></td>
                            ))
                        }
                        {
                            g.sessions.Mercredi.map((s, i) => (
                                s 
                                ?
                                <td key={i}>
                                    <Session id_seance={s.id_seance} num_sceance={i} formateur={s.formateur} nom_module={s.nom_module} nom_salle={s.nom_salle} />
                                </td> 
                                : <td key={i}><EmptySession groupName={g.groupName} num_sceance={i+1} groupId={g.groupId} sessionDate={addDays(week_start, 2)} /></td>
                            ))
                        }
                        {
                            g.sessions.Jeudi.map((s, i) => (
                                s 
                                ?
                                <td key={i}>
                                    <Session id_seance={s.id_seance} num_sceance={i} formateur={s.formateur} nom_module={s.nom_module} nom_salle={s.nom_salle} />
                                </td> 
                                : <td key={i}><EmptySession groupName={g.groupName} num_sceance={i+1} groupId={g.groupId} sessionDate={addDays(week_start, 3)} /></td>
                            ))
                        }
                        {
                            g.sessions.Vendredi.map((s, i) => (
                                s 
                                ?
                                <td key={i}>
                                    <Session id_seance={s.id_seance} num_sceance={i} formateur={s.formateur} nom_module={s.nom_module} nom_salle={s.nom_salle} />
                                </td> 
                                : <td key={i}><EmptySession groupName={g.groupName} num_sceance={i+1} groupId={g.groupId} sessionDate={addDays(week_start, 4)} /></td>
                            ))
                        }
                        {
                            g.sessions.Samedi.map((s, i) => (
                                s
                                ?
                                <td key={i}>
                                    <Session id_seance={s.id_seance} num_sceance={i} formateur={s.formateur} nom_module={s.nom_module} nom_salle={s.nom_salle} />
                                </td>
                                : <td key={i}><EmptySession groupName={g.groupName} num_sceance={i+1} groupId={g.groupId} sessionDate={addDays(week_start, 5)} /></td>
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