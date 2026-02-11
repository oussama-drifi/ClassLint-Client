import React, { useState } from 'react'
import GroupStatistics from '@/features/Summary/components/GroupStatistics/GroupStatistics'
import { useDispatch, useSelector } from 'react-redux';
import { fetchStatistics } from '@/app/slices/statisticsSlice'

const GroupsStatistics = () => {

    const dispatch = useDispatch()

    const {statistics} = useSelector(state => state.statistics.statistics)

    useEffect(() => {
        dispatch(fetchStatistics())
    }, []);

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