import React from 'react'
import CardTitle from './CardTitle'
import HeaderCardText from './HeaderCardText'
import ExtraInfoCard from './ExtraInfoCard'

export const InfoCard = ({ title, info, extraInfo }) => {
   return (
      <div className='relative h-40 w-[48%] flex-grow bg-slate-400 rounded-lg p-2 '>
         <CardTitle>{title}</CardTitle>
         <HeaderCardText>{info}</HeaderCardText>
         <ExtraInfoCard>{extraInfo}</ExtraInfoCard>
      </div>
   )
}

export default InfoCard
