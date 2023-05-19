import CityForm from './CityForm'
import SkeletonLoad from './SkeletonLoad'
import useData from '../Hooks/useData'
import CityWeatherInfo from './CityWeatherInfo'
import ErrorMessage from './ErrorMessage'

const CurrentCity = () => {
   const { data, loading, errorObj, setSearch, search } = useData()
   const { error, message } = errorObj

   const changeSearch = city => {
      setSearch(city || null)
      setTimeout(() => {
         setSearch(null)
      }, 1600)
   } //    Change the name of the city search

   return (
      // if data and loading are are in common then show the info if not show skeleton load
      <div className='w-11/12 mx-auto '>
         <CityForm changeSearch={changeSearch} />
         {data && !loading ? (
            <CityWeatherInfo data={data} loading={loading} />
         ) : (
            <SkeletonLoad />
         )}

         {error && <ErrorMessage message={message} search={search} />}
      </div>
   )
}

export default CurrentCity
