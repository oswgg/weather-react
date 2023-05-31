import { useContext, useEffect, useState } from 'react'
import { helpHttp } from '../Helpers/helpHttp'
import { CityTimeContext } from '../Context/CityTimeContext'

const initialError = {}

const api = helpHttp()

const useData = () => {
   const [data, setData] = useState(null)
   const [loading, setLoading] = useState(false)
   const [search, setSearch] = useState(null)
   const [errorObj, setErrorObj] = useState(initialError)
   const { changeTime } = useContext(CityTimeContext) // what time is in the city context

   // Use geolocation when app loads
   useEffect(() => {
      const success = position => {
         const { coords } = position
         const { latitude, longitude } = coords

         const location = {
            latitude,
            longitude,
         }

         searchLocation(location)
      }

      const error = () => {
         console.log('error')
         setData(null)
      }

      if (!navigator.geolocation)
         console.log('your browser doesn´t support Geolocation')

      navigator.geolocation.getCurrentPosition(success, error)
   }, [])

   // Load weather of the city where the user is
   const searchLocation = location => {
      const { latitude, longitude } = location

      if (!latitude || !longitude) return
      setLoading(true) // skeleton load

      api.getByLocation(latitude, longitude).then(data => {
         changeTime(data.timezone) // time city context
         setData(data)
         setLoading(false) // skeleton load false
      })
   }

   // searching for another city
   const searchCity = city => {
      setSearch(city)
      if (!city) return

      api.getBySearch(city)
         .then(data => {
            if (data.error) return Promise.reject(data)

            changeTime(data.timezone) // time city context
            setData(data)
            setLoading(false) // skeleton load false
         })
         .catch(err => {
            setErrorObj({
               ...errorObj,
               error: true,
               message: err.message,
            })

            setTimeout(() => {
               setErrorObj(initialError)
            }, 1500)
         }) // manage of error
   }

   return { data, loading, errorObj, searchCity, search }
}

export default useData
