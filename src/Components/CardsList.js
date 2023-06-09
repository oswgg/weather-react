import InfoCard, { SkeletonCard } from './InfoCard'
import WindCompass from './WindCompass'

const CardsList = ({ data }) => {
   const { sys, timezone, wind } = data
   const { sunrise, sunset } = sys
   const { speed, deg } = wind

   // Get the real time of the city
   const getTime = unix => {
      const date = new Date(unix * 1000 + timezone * 1000)

      const hours = date.getUTCHours()

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

   const convertWind = speed => Math.round((speed * 3600) / 1000)
   const convertVisibilty = distance => `${Math.round(distance / 1000)} km`

   const windInfo = {
      speed: convertWind(speed),
      direction: deg,
   }

   return (
      <div className='flex flex-wrap justify-center gap-2 mt-6 max-w-2xl md:mx-auto'>
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
         <InfoCard title='WIND'>
            <WindCompass info={windInfo} />
         </InfoCard>
         <InfoCard
            title='VISIBILTY'
            info={convertVisibilty(data.visibility)}
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
