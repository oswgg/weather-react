const WindCompass = ({ info }) => {
   const deg = info.direction - 90

   return (
      <div className='wind-compass'>
         <span className='wind-letter S'>S</span>
         <span className='wind-letter N'>N</span>
         <span className='wind-letter W'>W</span>
         <span className='wind-letter E'>E</span>
         <div className='relative h-full w-full grid place-items-center'>
            <div
               className='wind'
               style={{ transform: `rotate(${deg}deg)` }}></div>
            <div className='wind-speed'>
               <p>{info.speed}</p>
               <p>km/h</p>
            </div>
         </div>
      </div>
   )
}

export default WindCompass
