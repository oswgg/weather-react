import CardTitle from './CardTitle'
import HeaderCardText from './HeaderCardText'
import ExtraInfoCard from './ExtraInfoCard'

// Info
const InfoCard = ({ title, info, extraInfo }) => {
   return (
      <div className='relative h-40 w-[48%] flex-grow bg-slate-400 rounded-lg p-2 '>
         <CardTitle>{title}</CardTitle>
         <HeaderCardText>{info}</HeaderCardText>
         <ExtraInfoCard>{extraInfo}</ExtraInfoCard>
      </div>
   )
}

// Skeleton load
export const SkeletonCard = () => {
   return (
      <div className='relative h-40 w-[48%] flex-grow flex flex-col bg-slate-400 rounded-lg p-3 gap-1'>
         <div className='h-5 w-3/4 bg-slate-500 rounded-md' />
         <div className='h-10 w-1/4 bg-slate-500 rounded-md' />
         <div className='h-3 w-4/5 bg-slate-500 rounded-md absolute bottom-8' />
         <div className='h-3 w-2/5 bg-slate-500 rounded-md absolute bottom-4' />
      </div>
   )
}

export default InfoCard
