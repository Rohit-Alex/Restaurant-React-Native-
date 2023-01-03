import { useEffect, useState } from "react"
import yelpApi from '../axios'

export const useResults = () => {
    const [results, setResults] = useState([])
    const [errMessage, setErrorMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const searchApi = async (inputVal) => {
        try {
            setIsLoading(true)
            const response = await yelpApi.get('/search', {
                params: {
                    limit: 50,
                    term: inputVal,
                    location: 'san jose'
                }
            })
            setResults(response.data.businesses)
        } catch (err) {
            console.log(err, 'error')
            setErrorMessage(err)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(()=>{
        searchApi('Pasta')
    }, [])

    return [searchApi, results, errMessage, isLoading]
}