/* eslint-disable indent */
const apiKey = '19d7ca0814d26059779c57f55cb6432b'

export const helpHttp = () => {
   const httpRequest = url => {
      return fetch(url)
         .then(res => res.json())
         .then(data => {
            if (data.cod === '404') {
               return Promise.reject({
                  error: true,
                  status: Number(data.cod),
                  message: data.message,
               })
            }

            return data
         })
         .catch(err => err)
   }

   const getByLocation = (lat, long) => {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`
      return httpRequest(url)
   }

   const getBySearch = search => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=metric`
      return httpRequest(url)
   }

   return { getByLocation, getBySearch }
}
