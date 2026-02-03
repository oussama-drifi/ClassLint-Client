import './GroupeStatistics.css'

const GroupeStatistic = ({key, groupeName, modules}) => {
    let totale = 0;
    modules.forEach(m => {
        totale += m.usedHours
    });
    const progressionTotale = totale*100/750;
    return (
        <div key={key} className='groupe-statistic'>
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

export default GroupeStatistic