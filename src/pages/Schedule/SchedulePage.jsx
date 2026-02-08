import './SchedulePage.css'
import { useSelector } from 'react-redux'
import { getSessionDetails } from '@/app/selectors/selectors'
// components
import AddSessionModal from '@/features/Schedule/components/AddSessionModal'
import SchedulePageHeader from '@/features/Schedule/components/PageHeader'
import ScheduleTable from '@/features/Schedule/components/ScheduleTable/ScheduleTable'

const SchedulePage = () => {

    const { isModalOpen } = useSelector(getSessionDetails);

    return (
        <>
            <div>
                <SchedulePageHeader />
                <ScheduleTable />
            </div>
            {
                isModalOpen && <AddSessionModal />
            }
        </>
    )
}

export default SchedulePage