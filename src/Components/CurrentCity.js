import React, { useEffect, useState } from 'react'
import PrincipalInfo from './PrincipalInfo'
import InfoCard from './InfoCard'
import CardsList from './CardsList'
import CityForm from './CityForm'

const firstLocation = {
   latitude: null,
   longitude: null,
}

const apiKey = '19d7ca0814d26059779c57f55cb6432b'

const CurrentCity = () => {
   const [search, setSearch] = useState(false)
   const [location, setLocation] = useState(firstLocation)
   const [data, setData] = useState(null)

   useEffect(() => {
      const success = position => {
         const {
            coords: { latitude, longitude },
         } = position

         setLocation({
            latitude,
            longitude,
         })
      }

      const error = () => {
         console.log('error')
      }

      if (!navigator.geolocation.getCurrentPosition(success, error)) {
         console.log('your browser doesn´t support Geolocation')
      }
   }, [])

   useEffect(() => {
      const { latitude, longitude } = location

      if (!latitude || !longitude) return

      fetch(
         `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
      )
         .then(res => res.json())
         .then(data => {
            setData(data)
            console.log(data)
         })
   }, [location])

   useEffect(() => {
      console.log(search)
   }, [search])

   const changeSearch = city => setSearch(city)

   return (
      <>
         {data ? (
            <div className='w-11/12 mx-auto pt-12'>
               <CityForm changeSearch={changeSearch} />
               <PrincipalInfo data={data} />
               <CardsList data={data} />
            </div>
         ) : (
            <p>Cargando</p>
         )}
      </>
   )
}

export default CurrentCity
