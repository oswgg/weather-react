import React, { useEffect, useState } from 'react'

const firstLocation = {
   latitude: null,
   longitude: null,
}

const apiKey = '19d7ca0814d26059779c57f55cb6432b'

const CurrentCity = () => {
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

      if(!navigator.geolocation.getCurrentPosition(success, error)) {
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
            console.log(data)
            setData(data)
         })
   }, [location])

   return (
      <div>
         {data ? 
            <div>
               <div>
                  <p className='text-3xl'>{data.name}</p>
                  <p>{data.main.temp}</p>
               </div>   
               <div>
                  <p>{data.weather[0].description}</p>
                  <div>
                     <p>H: {data.main.temp_max}</p>
                     <p>L: {data.main.temp_min}</p>
                  </div>
               </div>
            </div> : 
            <p>Cargando</p>
         }
      </div>
   )
}

export default CurrentCity
