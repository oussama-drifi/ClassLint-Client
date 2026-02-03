import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TableSkeleton from '../features/Sommaire/TableSkeleton'
import GroupeStatistics from '../features/Sommaire/GroupeStatistics'


const Sommaire = () => {

    const [statistics, setStatistics] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errMessage, setErrMessage] = useState(null);

    useEffect(() => {
        const fetchGrouprsProgress = async () => {
            try {
                const res = await axios.get("http://127.0.0.1:5000/api/progress");
                setTimeout(() => {
                    setStatistics(res.data);
                    setIsLoading(false);
                }, 1200);
            } catch (err) {
                setErrMessage(err)
            }
        }
        fetchGrouprsProgress()
    }, []);

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

export default Sommaire