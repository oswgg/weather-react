import { SkeletonCardsList } from './CardsList'
import { SketelonPrincipalInfo } from './PrincipalInfo'

const SkeletonLoad = () => {
   return (
      <div className='w-11/12 mx-auto pt-16'>
         <SketelonPrincipalInfo />
         <SkeletonCardsList />
      </div>
   )
}

export default SkeletonLoad
