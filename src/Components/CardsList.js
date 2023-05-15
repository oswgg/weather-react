import InfoCard, { SkeletonCard } from './InfoCard'

const CardsList = ({ data }) => {
   const { sys, timezone } = data
   const { sunrise, sunset } = sys

   // Get the real time of the city
   const getTime = unix => {
      const date = new Date(unix * 1000 + timezone * 1000)

      const hours = (date.getUTCHours() + 24) % 24

      const minutes = date.getMinutes().toString().padStart(2, '0')

      return `${hours}:${minutes}`
   }

   // Is feels like warmer or colder than temp
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
            info={`${Math.round(data.main.feels_like)}°`}
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

// Skeleton laod
export const SkeletonCardsList = () => {
   return (
      <div className='flex flex-wrap justify-center gap-2 mt-12 animate-pulse'>
         <SkeletonCard />
         <SkeletonCard />
         <SkeletonCard />
         <SkeletonCard />
         <SkeletonCard />
         <SkeletonCard />
      </div>
   )
}

export default CardsList
