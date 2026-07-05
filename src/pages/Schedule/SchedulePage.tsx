import './SchedulePage.css'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getSessionDetails } from '@/app/selectors/selectors'
import { fetchSessions } from '@/app/slices/sessionsSlice'
import { getSessionsState } from '@/app/selectors/selectors'
// components
import AddSessionModal from '@/features/Schedule/components/AddSessionModal'
import SchedulePageHeader from '@/features/Schedule/components/PageHeader'
import ScheduleTable from '@/features/Schedule/components/ScheduleTable/ScheduleTable'
import ScheduleTableSkeleton from '@/features/Schedule/components/ScheduleTableSkeleton/ScheduleTableSkeleton'

const SchedulePage = () => {

    const { isModalOpen } = useSelector(getSessionDetails);
    const { isLoading } = useSelector(getSessionsState);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchSessions(2))
    }, [])

    return (
        <>
            <div>
                <SchedulePageHeader />
                { isLoading ? <ScheduleTableSkeleton /> : <ScheduleTable /> }
            </div>
            {
                isModalOpen && <AddSessionModal />
            }
        </>
    )
}

export default SchedulePage