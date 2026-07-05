import TableSkeleton from '@/features/Summary/components/Skeleton/TableSkeleton'
import { useSelector } from 'react-redux'
import GroupsStatistics from '@/features/Summary/components/GroupsStatistics/GroupsStatistics'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchStatistics } from '@/app/slices/statisticsSlice'

const SummaryPage = () => {

    const dispatch = useDispatch()

    const {isLoading} = useSelector(state => state.statistics)

    useEffect(() => {
        dispatch(fetchStatistics())
    }, []);

    return (
        <div className='summary'>
            <h1>Sommaire</h1>
            <div className="groups-statistics">
                {
                    isLoading ? (
                        <>
                            <TableSkeleton />
                            <TableSkeleton />
                        </>
                    ) : (
                        <GroupsStatistics />
                    )
                }
            </div>
        </div>
    )
}

export default SummaryPage