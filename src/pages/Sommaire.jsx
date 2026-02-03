import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Sommaire.css'
import TableSkeleton from '../components/skeletons/TableSkeleton'

const modules = [
    {
        "moduleName": "Physics",
        "totalHours": 40,
        "usedHours": 20,
        "remainingHours": 20,
        "completionPercentage": 50.0
    },
    {
        "moduleName": "Math",
        "totalHours": 60,
        "usedHours": 4,
        "remainingHours": 56,
        "completionPercentage": 6.67
    }
]

const GroupeStatistic = ({groupeName, modules}) => {
    let totale = 0;
    modules.forEach(m => {
        totale += m.usedHours
    });
    const progressionTotale = totale*100/750;
    return (
        <div className='groupe-statistic'>
            <div className="groupe-name">
                <h2>{groupeName}</h2>
            </div>
            <table className='modules-table'>
                <thead>
                    <tr>
                        <th>module</th>
                        <th>masse totale</th>
                        <th>masse consommée</th>
                        <th>masse restante</th>
                        <th>progression</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        modules.map(m => (
                            <tr key={m.moduleName}>
                                <td>{m.moduleName}</td>
                                <td>{m.totalHours}</td>
                                <td>{m.usedHours}</td>
                                <td>{m.remainingHours}</td>
                                <td>{m.completionPercentage} %</td>                            
                            </tr>
                        ))
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td>
                            grogression totale des modules
                        </td>
                        <td colSpan={4}>
                            {parseFloat(progressionTotale.toFixed(2))} %
                        </td>
                    </tr>
                </tfoot>
            </table>

        </div>
    )
}

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
                }, 1000);
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
                            <TableSkeleton />
                            <TableSkeleton />
                        </>
                    ) : (
                        statistics.map(s => (
                            <GroupeStatistic 
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