const ErrorMessage = ({ message, search }) => {
   return (
      <div className='absolute w-3/4 h-1/12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-5 px-10 rounded-lg glassmorphism error transition-all duration-75'>
         <p>Error</p>
         <p className='capitalize'>
            {message}: {search}
         </p>
      </div>
   )
}

export default ErrorMessage
