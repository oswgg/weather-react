// Info
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

// Skeleton load
export const SketelonPrincipalInfo = () => {
   return (
      <>
         <div className='animate-pulse flex flex-col gap-1'>
            <div className='h-8 bg-slate-300 w-2/3 mx-auto rounded-md glassmorphism'></div>
            <div className='h-14 bg-slate-300 w-1/4 mx-auto rounded-md glassmorphism'></div>
         </div>
         <div className='mt-1'>
            <div className='h-6 bg-slate-300 w-1/5 mx-auto rounded-sm glassmorphism'></div>
            <div className='flex gap-2 justify-center mt-1'>
               <div className='h-4 bg-slate-300 w-1/6 rounded-sm glassmorphism'></div>
               <div className='h-4 bg-slate-300 w-1/6 rounded-sm glassmorphism'></div>
            </div>
         </div>
      </>
   )
}

export default PrincipalInfo
