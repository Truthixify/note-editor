import { useState, useEffect } from "react"
const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const abort = new AbortController()

        setTimeout(()=> {
            fetch(url, {signal: abort.signal})
        .then(res => {
            return res.json()
        })
        .then(data => {
            setData(data)
            setLoading(false)
        })
        .catch(err => {
            if(err.name === "AbortError") {}
        })
        },1000)

        return () => abort.abort()
    },[url])

    return {data, loading}
}

export default useFetch