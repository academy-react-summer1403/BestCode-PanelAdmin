// ** Custom Components
import AvatarGroup from '@components/avatar-group'

// ** Images
// import react from '../../../../assets/images/avatars/1-small.png'
import vuejs from '../../../assets/images/avatars/2-small.png'
// import angular from '../../../../assets/images/avatars/3-small.png'
// import bootstrap from '../../../../assets/images/avatars/4-small.png'
// import avatar1 from '../../../../assets/images/avatars/5-small.png'
// import avatar2 from '../../../../assets/images/avatars/6-small.png'
// import avatar3 from '../../../../assets/images/avatars/7-small.png'

// ** Icons Imports
import { MoreVertical, Edit, Trash } from 'react-feather'

// ** Reactstrap Imports
import { Table, Badge, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import { getCourseId , GetCourseUserList } from '../../../core/services/api/usersmanager'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'




const TableBordered = () => {
  const [getid , setGetId] = useState([])
  const [result, setResult] = useState([])
  const {id} = useParams()
  const GetCourseID2 = async () => {
    const data = await getCourseId(id)
    setGetId(data)
  }
  
  const id2 = getid.courseId || []

  const getUseList = async () => {
    const data1 =  await GetCourseUserList(id2)
    setResult(data1)
  }

  

  useEffect(()=> {
    GetCourseID2()
   
  },[])

  useEffect(() => {
    if (getid?.courseId) {
      getUseList();
    }
  }, [getid]);
  return (
    <Table bordered responsive>
      <thead>
        <tr>
          <th>نظرات </th>
          <th> شناسه دانشجویان</th>
          <th>وضعیت پرداختی</th>
        </tr>
      </thead>
      {/* <tbody>
        {result.length > 0 &&
         <>
         {result.map((item, index) =>(
           <tr>
          <td>
            <img className='me-75' src={vuejs} alt='angular' height='20' width='20' />
            <span className='align-middle fw-bold'> {item.studentName} </span>
          </td>
          <td> {item.studentId}</td>
         
          <td>
            <Badge pill color={item.paymentDone ? 'light-success' : 'light-danger'} className='me-1'>
               {item.peymentDone? 'تایید شده' : 'تایید نشده'}
            </Badge>
          </td>
        </tr>
      ))}
        </>
        }
      
   
     
    
      </tbody> */}
    </Table>
  )
}

export default TableBordered
