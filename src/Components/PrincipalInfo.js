const PrincipalInfo = ({ data }) => {
   return (
      <div className='w-3/4 h-[25vh] mx-auto text-center flex flex-col justify-center'>
         <div>
            <p className='text-2xl'>{data.name}</p>
            <p className='text-5xl font-extralight'>
               {Math.round(data.main.temp)}°
            </p>
         </div>
         <div className='mt-2'>
            <p className='capitalize'>{data.weather[0].description}</p>
            <div className='flex gap-2 justify-center'>
               <p>H: {Math.round(data.main.temp_max)}°</p>
               <p>L: {Math.round(data.main.temp_min)}°</p>
            </div>
         </div>
      </div>
   )
}

export default PrincipalInfo
