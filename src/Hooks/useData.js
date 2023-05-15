import { useEffect, useState } from 'react'
import { helpHttp } from '../Helpers/helpHttp'

const firstLocation = {}

const api = helpHttp()

const useData = () => {
   const [location, setLocation] = useState(firstLocation)
   const [data, setData] = useState(null)
   const [loading, setLoading] = useState(false)
   const [search, setSearch] = useState(null)
   const [error, setError] = useState({})

   useEffect(() => {
      const success = position => {
         const { coords } = position
         const { latitude, longitude } = coords

         setLocation({
            latitude,
            longitude,
         })
      }

      const error = () => {
         console.log('error')
         setData(null)
      }

      if (!navigator.geolocation)
         console.log('your browser doesn´t support Geolocation')

      navigator.geolocation.getCurrentPosition(success, error)
   }, [])

   useEffect(() => {
      const { latitude, longitude } = location

      if (!latitude || !longitude) return
      setLoading(true) // skeleton load

      api.getByLocation(latitude, longitude).then(data => {
         setData(data)
         setLoading(false) // skeleton load false
      })
   }, [location])

   useEffect(() => {
      if (!search) return
      setLoading(true) // skeleton load

      api.getBySearch(search)
         .then(data => {
            if (data.error) return Promise.reject(data)

            setData(data)
            setLoading(false) // skeleton load false
         })
         .catch(err => {
            setError({
               ...error,
               error: true,
               message: err.message,
            })
            setLoading(false)
         }) // manage of error
   }, [search])

   return { data, loading, error, setSearch }
}

export default useData
