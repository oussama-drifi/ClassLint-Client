import React, { useEffect, useState } from 'react'
import TableEmploi from '../features/Emploi/TableEmploi'
import axios from 'axios'
const Emploi = () => {

    return (
        <div>
            <h1>Emploi Du Semaine</h1>
            <TableEmploi />
        </div>
    )
}

export default Emploi