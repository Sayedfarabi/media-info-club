import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setData(data)
                setLoading(false)
            })
    }, [url])

    const dataInfo = {
        data,
        loading
    }
    return dataInfo
}