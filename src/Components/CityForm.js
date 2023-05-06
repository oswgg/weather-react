import React, { useState } from 'react'

const CityForm = ({ changeSearch }) => {
   const [city, setCity] = useState(null)

   const handleOnSubmit = evt => {
      evt.preventDefault()
      changeSearch(city)
   }

   const handleOnChange = ({ target }) => setCity(target.value)

   return (
      <>
         <form onSubmit={handleOnSubmit}>
            <input
               type='text'
               placeholder='Search for a city'
               onChange={handleOnChange}
            />
            <input type='submit' />
         </form>
      </>
   )
}

export default CityForm
