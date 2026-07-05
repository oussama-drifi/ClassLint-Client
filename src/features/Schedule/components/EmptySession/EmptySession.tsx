import './EmptySession.css'
import { useDispatch } from 'react-redux'
import { openModal } from '@/app/slices/addSessionSlice'

const EmptySession = ({groupName, num_sceance, groupId, sessionDate}) => {
    const dispatch = useDispatch()
    const group = {
        id: groupId,
        name: groupName
    }
    return (
        <div className="empty-session" onClick={() => dispatch(openModal({group, numSeance: num_sceance, date: sessionDate}))}>
            <div className="add-new-session">
                ajouter <i className="bi bi-plus-lg"></i>
            </div>
        </div>
    )
}

export default EmptySession