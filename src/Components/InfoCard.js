import CardTitle from './CardTitle'
import HeaderCardText from './HeaderCardText'
import ExtraInfoCard from './ExtraInfoCard'

// Info
const InfoCard = ({ title, info, extraInfo }) => {
   return (
      <div className='relative h-40 w-[48%] flex-grow bg-slate-400 glassmorphism rounded-lg p-4'>
         <CardTitle>{title}</CardTitle>
         <HeaderCardText>{info}</HeaderCardText>
         <ExtraInfoCard>{extraInfo}</ExtraInfoCard>
      </div>
   )
}

// Skeleton load
export const SkeletonCard = () => {
   return (
      <div className='relative h-40 w-[48%] flex-grow flex flex-col glassmorphism rounded-lg p-3 gap-1'>
         <div className='h-5 w-3/4 glassmorphism rounded-md' />
         <div className='h-10 w-1/4 glassmorphism rounded-md' />
         <div className='h-3 w-4/5 glassmorphism rounded-md absolute bottom-8' />
         <div className='h-3 w-2/5 glassmorphism rounded-md absolute bottom-4' />
      </div>
   )
}

export default InfoCard
