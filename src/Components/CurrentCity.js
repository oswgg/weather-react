import { useEffect, useState } from 'react'
import PrincipalInfo from './PrincipalInfo'
import CardsList from './CardsList'
import CityForm from './CityForm'
import SkeletonLoad from './SkeletonLoad'
import { helpHttp } from '../Helpers/helpHttp'
import useData from '../Hooks/useData'

const firstLocation = {
   latitude: null,
   longitude: null,
}

const api = helpHttp()

const CurrentCity = () => {
   const { data, loading, error, setSearch } = useData()

   // Use geolocation when app loads

   // Load weather of the city where the user is

   // searching for another city

   const changeSearch = city => setSearch(city || null) //    Change the name of the city search

   return (
      // if data and loading are are in common then show the info if not show skeleton load
      <>
         <CityForm changeSearch={changeSearch} />
         {data && !loading ? (
            <div className='w-11/12 mx-auto pt-4 '>
               <PrincipalInfo data={data} isLoading={loading} />
               <CardsList data={data} />
            </div>
         ) : (
            <SkeletonLoad />
         )}
      </>
   )
}

export default CurrentCity
