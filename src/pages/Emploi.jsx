import TableEmploi from '../features/Emploi/TableEmploi'
import SelectMenu from '../components/selectMenu/selectMenu'
import './Emploi.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { fetchSessions } from '../sessionsSlice'

const Emploi = () => {

    const dispatch = useDispatch();

    const refetch = (week_id) => {
        dispatch(fetchSessions(week_id))
    }

    const [weeks, setWeeks] = useState([])

    const getFormatedDate = (datetime) => {
        const date = new Date(datetime);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = String(date.getFullYear()).slice(-2);

        return `${day}/${month}/${year}`;
    }

    useEffect(() => {
        axios.get(`http://127.0.0.1:5000//api/semaines`).then((res) => setWeeks(res.data))
    }, [])


    const options = weeks.map(w => `${w.titre} - ${getFormatedDate(w.date_debut)}`)

    return (
        <div>
            <div className='emploi-page-header'>
                <h1>Emploi Du Semaine</h1>
                <SelectMenu options={options} refetch={refetch}/>
            </div>
            <TableEmploi />
        </div>
    )
}

export default Emploi