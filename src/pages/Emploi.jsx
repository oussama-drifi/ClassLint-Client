import TableEmploi from '../features/Emploi/TableEmploi'
import SelectMenu from '../components/selectMenu/selectMenu'
import './Emploi.css'

const Emploi = () => {


    const options = [
        'S01 - 16/01/2025',
        'S02 - 23/01/2025',
        'S03 - 30/01/2025',
        'S04 - 6/02/2025'
    ]

    return (
        <div>
            <div className='emploi-page-header'>
                <h1>Emploi Du Semaine</h1>
                <SelectMenu options={options} />
            </div>
            <TableEmploi />
        </div>
    )
}

export default Emploi