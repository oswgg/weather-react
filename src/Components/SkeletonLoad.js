import { SkeletonCardsList } from './CardsList'
import { SketelonPrincipalInfo } from './PrincipalInfo'

const SkeletonLoad = () => {
   return (
      <div className='pt-6'>
         <SketelonPrincipalInfo />
         <SkeletonCardsList />
      </div>
   )
}

export default SkeletonLoad
