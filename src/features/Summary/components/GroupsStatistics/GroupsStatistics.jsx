import React, { useState } from 'react'
import GroupStatistics from '@/features/Summary/components/GroupStatistics/GroupStatistics'

const GroupsStatistics = () => {

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
                }, 600);
            } catch (err) {
                setErrMessage(err)
            }
        }
        fetchGrouprsProgress();
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