// ** User List Component
import Table from './Table'

// ** Reactstrap Imports
import { Row, Col, Spinner } from 'reactstrap'

// ** Styles
import '@styles/react/apps/app-users.scss'
import { useQuery } from '@tanstack/react-query'
import { GetCourseComments } from '../../../../core/services/api/usersmanager'

const UsersList = () => {
  
  const {data: courseComments, isLoading} = useQuery({queryKey: ['GetCourseComments'], queryFn: GetCourseComments})

  return (
    <>
     {isLoading ? <div className='d-flex' style={{justifyContent: 'center', margin: '50px'}}> <Spinner /> </div> :<div className='app-user-list'>
   
      <Table data={courseComments} />
    </div> }
    </>
  )
}

export default UsersList
