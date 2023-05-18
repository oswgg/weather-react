const WindCompass = ({ info }) => {
   const deg = info.direction - 90

   return (
      <div className='-z-50 w-[110px] h-[110px] border-[3px] border-dashed border-blue-400 mx-auto rounded-full'>
         <div className='relative h-full w-full grid place-items-center'>
            <div
               className='wind'
               style={{ transform: `rotate(${deg}deg)` }}></div>
            <div className='wind-speed'>{info.speed}</div>
         </div>
      </div>
   )
}

export default WindCompass
