import React from 'react'
import InfoCard from './InfoCard'

const options = { hour12: false, hour: '2-digit', minute: '2-digit' }

const CardsList = ({ data }) => {
   const getTime = unix => {
      const time = new Date(unix * 1000).toLocaleTimeString([], options)
      return time
   }

   const compareTemp = () => {
      const {
         main: { temp, feels_like },
      } = data

      if (feels_like > temp) return 'Humidity is making it feel warner'

      return 'Wind is making it feel colder'
   }

   return (
      <div className='flex flex-wrap justify-center gap-2 mt-6'>
         <InfoCard
            title='SUNRISE'
            info={getTime(data.sys.sunrise)}
            extraInfo={`Sunset: ${getTime(data.sys.sunset)}`}
         />
         <InfoCard
            title='FEELS LIKE'
            info={Math.round(data.main.feels_like)}
            extraInfo={compareTemp()}
         />
         <InfoCard
            title='WIND'
            info={`${Math.round((data.wind.speed * 3600) / 1000)} km/h`}
            extraInfo={`Sunset: ${getTime(data.sys.sunset)}`}
         />
         <InfoCard
            title='VISIBILTY'
            info={`${Math.round(data.visibility / 1000)} km`}
            extraInfo={'It´s clear right now'}
         />
         <InfoCard
            title='HUMIDITY'
            info={data.main.humidity}
            extraInfo={'idK'}
         />
         <InfoCard title='PRESSURE' info={data.main.pressure} />
      </div>
   )
}

export default CardsList
