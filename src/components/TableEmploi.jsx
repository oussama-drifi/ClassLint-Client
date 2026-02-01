import './TableEmploi.css'
import Session from './Session'

const TableEmploi = () => {
    return (
    <div className='table-wrapper'>
        <table className='schedule-table'>
        <thead>
            <tr>
                <th rowSpan={2}></th>
                <th colSpan={4}>Lundi</th>
                <th colSpan={4}>Mardi</th>
                <th colSpan={4}>Mercredi</th>
                <th colSpan={4}>Jeudi</th>
                <th colSpan={4}>Vendredi</th>
                <th colSpan={4}>Samedi</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>FS-201</td>
                <td>
                    <Session type="presentiel" />
                </td>
                <td>
                    <Session type="presentiel" />
                </td>
                <td>
                    <Session type="distanciel" />
                </td>
                <td>
                    <Session type="distanciel" />
                </td>
                <td>
                    <Session type="distanciel" />
                </td>
                <td>
                    <Session type="distanciel" />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                    <Session type="distanciel" />
                </td>
                <td></td>
                <td><span className="session-chip physics">Frensh</span></td>
                <td></td>
                <td></td>
                <td></td>
                <td><span className="session-chip physics">Math</span></td>
                <td><span className="session-chip physics">Math</span></td>
                <td></td>
                <td></td>
                <td><span className="session-chip physics">Geography</span></td>
                <td><span className="session-chip physics">Geography</span></td>
                <td><span className="session-chip physics">Physics</span></td>
                <td><span className="session-chip physics">Physics</span></td>
            </tr>
            <tr>
                {/* there are four sessions a day */}
                {/* empty slots indicates no session for that group */}
                <td>FS-202</td>
                <td>
                    <Session type="distanciel" />
                </td>
                <td>
                    <Session type="distanciel" />
                </td>
                <td></td>
                <td></td>
                <td>
                    <Session type="presentiel" />
                </td>
                <td>
                    <Session type="presentiel" />
                </td>
                <td><span className="session-chip physics">Math</span></td>
                <td><span className="session-chip physics">Math</span></td>
                <td><span className="session-chip physics">Physics</span></td>
                <td><span className="session-chip physics">Physics</span></td>
                <td><span className="session-chip physics">Geography</span></td>
                <td><span className="session-chip physics">Geography</span></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><span className="session-chip physics">Frensh</span></td>
                <td></td>
                <td><span className="session-chip physics">Math</span></td>
                <td><span className="session-chip physics">Math</span></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                {/* there are four sessions a day */}
                {/* empty slots indicates no session for that group */}
                <td>FS-203</td>
                <td>
                    <Session type="presentiel" />
                </td>
                <td>
                    <Session type="presentiel" />
                </td>
                <td>
                    <Session type="presentiel" />
                </td>
                <td>
                    <Session type="presentiel" />
                </td>
                <td>
                    <Session type="distanciel" />
                </td>
                <td>
                    <Session type="distanciel" />
                </td>
                <td><span className="session-chip physics">Math</span></td>
                <td><span className="session-chip physics">Math</span></td>
                <td><span className="session-chip physics">Physics</span></td>
                <td><span className="session-chip physics">Physics</span></td>
                <td><span className="session-chip physics">Geography</span></td>
                <td><span className="session-chip physics">Geography</span></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><span className="session-chip physics">Frensh</span></td>
                <td></td>
                <td><span className="session-chip physics">Math</span></td>
                <td><span className="session-chip physics">Math</span></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                {/* there are four sessions a day */}
                {/* empty slots indicates no session for that group */}
                <td>FS-204</td>
                <td></td>
                <td></td>
                <td>
                    <Session type="distanciel" />
                </td>
                <td>
                    <Session type="distanciel" />
                </td>
                <td>
                    <Session type="presentiel" />
                </td>
                <td>
                    <Session type="presentiel" />
                </td>
                <td><span className="session-chip physics">Math</span></td>
                <td><span className="session-chip physics">Math</span></td>
                <td><span className="session-chip physics">Physics</span></td>
                <td><span className="session-chip physics">Physics</span></td>
                <td><span className="session-chip physics">Geography</span></td>
                <td><span className="session-chip physics">Geography</span></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><span className="session-chip physics">Frensh</span></td>
                <td></td>
                <td><span className="session-chip physics">Math</span></td>
                <td><span className="session-chip physics">Math</span></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                {/* there are four sessions a day */}
                {/* empty slots indicates no session for that group */}
                <td>FS-205</td>
                <td>
                    <Session type="presentiel" />
                </td>
                <td>
                    <Session type="presentiel" />
                </td>
                <td></td>
                <td></td>
                <td>
                    <Session type="distanciel" />
                </td>
                <td>
                    <Session type="distanciel" />
                </td>
                <td><span className="session-chip physics">Math</span></td>
                <td><span className="session-chip physics">Math</span></td>
                <td><span className="session-chip physics">Physics</span></td>
                <td><span className="session-chip physics">Physics</span></td>
                <td><span className="session-chip physics">Geography</span></td>
                <td><span className="session-chip physics">Geography</span></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><span className="session-chip physics">Frensh</span></td>
                <td></td>
                <td><span className="session-chip physics">Math</span></td>
                <td><span className="session-chip physics">Math</span></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>FS-206</td>
                <td>
                    <Session type="distanciel" />
                </td>
                <td>
                    <Session type="distanciel" />
                </td>
                <td>
                    <Session type="presentiel" />
                </td>
                <td>
                    <Session type="presentiel" />
                </td>
                <td><span className="session-chip physics">English</span></td>
                <td><span className="session-chip physics">English</span></td>
                <td><span className="session-chip physics">Math</span></td>
                <td><span className="session-chip physics">Math</span></td>
                <td><span className="session-chip physics">Physics</span></td>
                <td><span className="session-chip physics">Physics</span></td>
                <td><span className="session-chip physics">Geography</span></td>
                <td><span className="session-chip physics">Geography</span></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><span className="session-chip physics">Frensh</span></td>
                <td></td>
                <td><span className="session-chip physics">Math</span></td>
                <td><span className="session-chip physics">Math</span></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            </tbody>
        </table>
        </div>
    )
}

export default TableEmploi