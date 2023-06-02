import { useEffect, useRef, useState } from 'react'
import search from '../Assets/bx-search.svg'

const CityForm = ({ changeSearch }) => {
   const [city, setCity] = useState(null)
   const [visible, setVisible] = useState(false)
   const [classname, setClassname] = useState('translate-y-[-100%] hidden')

   const inputRef = useRef()

   const handleOnSubmit = evt => {
      evt.preventDefault()
      evt.target[0].value = ''
      changeSearch(city)
      setVisible(false)
   }

   const handleOnChange = ({ target }) => setCity(target.value)

   const handleOnClick = () => {
      setVisible(!visible)
      inputRef.current.value = ''
      inputRef.current.focus()

      if (visible) changeSearch(city)
   }

   useEffect(() => {
      const className = visible
         ? 'opacity-100'
         : 'translate-y-[-100%] opacity-0'
      setClassname(className)
   }, [visible])

   return (
      <div className='flex flex-row-reverse items-center justify-between gap-3 pt-4'>
         <img src={search} className='' onClick={handleOnClick} />
         <form
            onSubmit={handleOnSubmit}
            className={` top-10 transition-all duration-50 flex-grow ${classname} `}>
            <input
               ref={inputRef}
               type='text'
               placeholder='Search for a city'
               onChange={handleOnChange}
               className='bg-sky-300 p-2 rounded-md glassmorphism text-center placeholder-black w-full'
            />
         </form>
      </div>
   )
}

export default CityForm
