// ** User List Component
import Table from './Table'

// ** Reactstrap Imports
import { Row, Col, Spinner } from 'reactstrap'

// ** Styles
import '@styles/react/apps/app-users.scss'
import { useQuery } from '@tanstack/react-query'
import { GetBuildingData } from '../../../../../core/services/api/building'

const BuildingList = () => {
  
  const {data:Building , isLoading} = useQuery({queryKey: ['GetBuildingData'], queryFn: GetBuildingData})

  return (
    <>
     {isLoading ? <div className='d-flex' style={{justifyContent: 'center', margin: '50px'}}> <Spinner /> </div> :<div className='app-user-list'>
   
      <Table data={Building} />
    </div> }
    </>
  )
}

export default BuildingList
