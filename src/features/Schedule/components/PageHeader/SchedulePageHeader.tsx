import './SchedulePageHeader.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { fetchSessions } from '@/app/slices/sessionsSlice'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

const SchedulePageHeader = () => {

    const dispatch = useDispatch();

    const [weeks, setWeeks] = useState([]);

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

    const handleWeekChange = (value) => {
        dispatch(fetchSessions(Number(value)))
    }

    return (
        <div className='emploi-page-header'>
            <h1>Emploi Du Semaine</h1>
            <Select onValueChange={handleWeekChange}>
                <SelectTrigger className="w-[240px]">
                    <SelectValue placeholder="choisir une semaine" />
                </SelectTrigger>
                <SelectContent>
                    {weeks.map((w, index) => (
                        <SelectItem key={w.id ?? index} value={String(index + 1)}>
                            {`${w.titre} - ${getFormatedDate(w.date_debut)}`}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}

export default SchedulePageHeader
