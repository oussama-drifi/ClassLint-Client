import { useEffect, useState } from 'react'
import axios from 'axios'
import TableSkeleton from '@/features/Summary/components/Skeleton/TableSkeleton'
import GroupeStatistics from '@/features/Summary/components/GroupStatistics/GroupStatistics'

const SummaryPage = () => {

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
                        statistics.map(s => (
                            <GroupeStatistics
                                key={s.groupeId} 
                                groupeName={s.groupName}
                                modules={s.modules}
                            />
                        ))
                    )
                }
            </div>
        </div>
    )
}

export default SummaryPage