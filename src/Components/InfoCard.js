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

export default InfoCard
