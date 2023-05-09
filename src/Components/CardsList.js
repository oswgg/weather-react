import React from 'react'
import InfoCard from './InfoCard'

const CardsList = ({ data }) => {
   const {
      sys: { sunrise, sunset },
      timezone,
   } = data

   const getTime = unix => {
      const date = new Date(unix * 1000)
      const UTCTimezone = timezone / 3600

      const hours =
         date.getUTCHours() > 12
            ? date.getUTCHours() + UTCTimezone
            : date.getUTCHours() + UTCTimezone + 12

      const localeHours = hours > 12 ? hours - 12 : hours

      const minutes =
         date.getUTCMinutes() < 10
            ? `0${date.getUTCMinutes()}`
            : date.getUTCMinutes()

      return `${localeHours}:${minutes}`
   }

   const compareTemp = () => {
      const {
         main: { temp, feels_like },
      } = data

      if (feels_like > temp) return 'Humidity is making it feel warner'

      return 'Wind is making it feel colder'
   }

   return (
      <div className='flex flex-wrap justify-center gap-2 mt-6 '>
         <InfoCard
            title='SUNRISE'
            info={getTime(sunrise)}
            extraInfo={`Sunset: ${getTime(sunset)}`}
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
