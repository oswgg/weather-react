import { createContext, useState } from 'react'

const CityTimeContext = createContext('')

const CityTimeProvider = ({ children }) => {
   const [time, setTime] = useState()

   const changeTime = timezone => {
      const date = new Date()
      const UTC = date.getUTCHours()
      const differCity = timezone / 3600

      const cityTime = (UTC + differCity + 24) % 24

      setTime(cityTime)
   }

   const contextObj = {
      changeTime,
      time,
   }

   return (
      <CityTimeContext.Provider value={contextObj}>
         {children}
      </CityTimeContext.Provider>
   )
}

export default CityTimeProvider
export { CityTimeContext }
