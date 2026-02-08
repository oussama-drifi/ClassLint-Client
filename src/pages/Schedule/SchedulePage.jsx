import './SchedulePage.css'
import TableEmploi from '../../features/Schedule/TableEmploi'
import AddSessionModal from '../../features/Schedule/components/AddSessionModal/AddSessionModal'
import { getSessionDetails } from '../../app/selectors/selectors'
import { useSelector } from 'react-redux'
import SchedulePageHeader from '../../features/Schedule/components/PageHeader/SchedulePageHeader'

const SchedulePage = () => {

    const { isModalOpen } = useSelector(getSessionDetails);

    return (
        <>
            <div>
                <SchedulePageHeader />
                <TableEmploi />
            </div>
            {
                isModalOpen && <AddSessionModal />
            }
        </>
    )
}

export default SchedulePage