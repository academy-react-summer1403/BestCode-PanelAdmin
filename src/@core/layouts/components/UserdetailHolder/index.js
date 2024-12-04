// ** React Imports
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

// ** Store & Actions
import { useSelector, useDispatch } from 'react-redux'
import { getUserId } from '../../../../core/services/api/usersmanager'
// ** Reactstrap Imports
import { Row, Col, Alert } from 'reactstrap'

// ** User View Components
import UserTabs from './Tabs'
import UserInfoCard from './UserInfoCard'



// ** Styles
import '@styles/react/apps/app-users.scss'

const UserView = () => {
  const {id} = useParams()
  const [data , setData] = useState([])
  const [active, setActive] = useState('1')
 
  const GetDatabyId = async () => {
    const result = await getUserId(id)
    setData(result)
  }

  useEffect(()=>{
     GetDatabyId()
  }, [])

  const toggleTab = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }     

   return  (
    <div className='app-user-view'>
       <Row>
        <Col xl='4' lg='5' xs={{ order: 1 }} md={{ order: 0, size: 5 }}>
          <UserInfoCard data={data} selectedUser={data} />
        </Col>
        <Col xl='8' lg='7' xs={{ order: 0 }} md={{ order: 1, size: 7 }}>
          <UserTabs active={active} toggleTab={toggleTab} data={data} />

        </Col>
      </Row> 
    </div>
  ) 
}
export default UserView