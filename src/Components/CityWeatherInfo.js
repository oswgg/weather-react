import React from 'react'
import PrincipalInfo from './PrincipalInfo'
import CardsList from './CardsList'

const CityWeatherInfo = ({ data }) => {
   return (
      <div className='pt-4 '>
         <PrincipalInfo data={data} />
         <CardsList data={data} />
      </div>
   )
}

export default CityWeatherInfo
