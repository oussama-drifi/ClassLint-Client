import GroupStatistics from '@/features/Summary/components/GroupStatistics/GroupStatistics'
import { useSelector } from 'react-redux';

const GroupsStatistics = () => {

    const {statistics} = useSelector(state => state.statistics)

    return (
        <>
        {
            statistics.map(s => (
                <GroupStatistics
                    key={s.groupeId}
                    groupeName={s.groupName}
                    modules={s.modules}
                />
            ))
        }
        </>
    )
}

export default GroupsStatistics