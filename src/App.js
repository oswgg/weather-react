import { useContext, useEffect, useState } from 'react'
import CurrentCity from './Components/CurrentCity'
import { CityTimeContext } from './Context/CityTimeContext'

const App = () => {
   const [classname, setClassname] = useState('')
   const { time } = useContext(CityTimeContext)

   useEffect(() => {
      if (time > 20 || time == 0 || time < 7) setClassname('night')
      else if (time < 12) setClassname('morning')
      else if (time == 12) setClassname('noon')
      else if (time < 18) setClassname('afternoon')
      else if (time <= 20) setClassname('evening')
   }, [time])

   return (
      <div className={`${classname} min-h-screen overflow-scroll`}>
         <CurrentCity />
      </div>
   )
}

export default App
