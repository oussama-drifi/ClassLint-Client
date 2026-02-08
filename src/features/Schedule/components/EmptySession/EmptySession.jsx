import './EmptySession.css'
import { useDispatch } from 'react-redux'
import { openModal } from '@/app/slices/addSessionSlice'

const EmptySession = ({num_sceance, groupId}) => {
    const dispatch = useDispatch()
    return (
        <div className="empty-session" onClick={() => dispatch(openModal({groupId, numSeance: num_sceance, date: '06/02/2026'}))}>
            <div className="add-new-session">
                ajouter <i className="bi bi-plus-lg"></i>
            </div>
        </div>
    )
}

export default EmptySession