import TableSkeleton from '@/features/Summary/components/Skeleton/TableSkeleton'
import { useSelector } from 'react-redux'
import GroupsStatistics from '@/features/Summary/components/GroupsStatistics/GroupsStatistics'

const SummaryPage = () => {

    const {isLoading} = useSelector(state => state.statistics.statistics)

    return (
        <div className='sommaire'>
            <h1>Sommaire</h1>
            <div className="groupes-statistics">
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