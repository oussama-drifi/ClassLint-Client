import './EmptySession.css'
import { useDispatch } from 'react-redux'
import { openModal } from '@/app/slices/addSessionSlice'

const EmptySession = ({groupName, num_sceance, groupId, sessionDate}) => {
    const dispatch = useDispatch()
    return (
        <div className="empty-session" onClick={() => dispatch(openModal({groupId, numSeance: num_sceance, date: sessionDate, groupName}))}>
            <div className="add-new-session">
                ajouter <i className="bi bi-plus-lg"></i>
            </div>
        </div>
    )
}

export default EmptySession