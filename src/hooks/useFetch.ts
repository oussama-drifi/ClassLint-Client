import { useEffect, useState } from "react"
import axios from 'axios'

export const useFetch = (url) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [errMessage, setErrMessage] = useState(null)

    useEffect(() => {
        axios.get(url).then(res => {
            // simulate dellay
            setTimeout(() => {
                setData(res.data)
                setIsLoading(false)
            }, 800)
        }).catch(err => setErrMessage(err))
    }, [])

    return [data, isLoading, errMessage]
}