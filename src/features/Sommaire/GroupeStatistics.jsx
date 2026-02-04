import './GroupeStatistics.css'

const GroupeStatistic = ({key, groupeName, modules}) => {
    let totale = 0;
    modules.forEach(m => {
        totale += m.usedHours
    });
    
    const progressionTotale = totale*100/750;

    const styles = {
        width: `${parseFloat(progressionTotale.toFixed(2))}%`
    }

    return (
        <div key={key} className='groupe-statistic'>
            <div className="groupe-name">
                <h2>Developpement {groupeName}</h2>
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
                            <div>
                                <div className='progress-bar'>
                                    <span className='progress-fill' style={styles}></span>
                                </div>
                                <div>
                                    <b>{parseFloat(progressionTotale.toFixed(2))} %</b>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tfoot>
            </table>

        </div>
    )
}

export default GroupeStatistic