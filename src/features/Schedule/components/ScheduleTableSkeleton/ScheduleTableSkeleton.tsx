import './ScheduleTableSkeleton.css'

const SessionSkeleton = () => {
    return (
        <div className="session-skeleton">
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}

const ScheduleTableSkeleton = () => {
    return (
        <div className='table-wrapper'>
            <table className='schedule-table'>
                <thead>
                    <tr>
                        <th rowSpan={2}></th>
                        <th colSpan={4}>Lundi</th>
                        <th colSpan={4}>Mardi</th>
                        <th colSpan={4}>Mercredi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><div></div></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                    </tr>
                    <tr>
                        <td><div></div></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                    </tr>
                    <tr>
                        <td><div></div></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                    </tr>
                    <tr>
                        <td><div></div></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                    </tr>
                    <tr>
                        <td><div></div></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                    </tr>
                    <tr>
                        <td><div></div></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                    </tr>
                    <tr>
                        <td><div></div></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                        <td><SessionSkeleton /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ScheduleTableSkeleton