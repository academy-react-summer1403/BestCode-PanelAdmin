// ** User List Component
import Table from './Table'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'
import { useEffect , useState } from 'react'
import { getUserlist } from '../../../../core/services/api/usersmanager'

// ** Custom Components
import StatsHorizontal from '@components/widgets/stats/StatsHorizontal'

// ** Icons Imports
import { User, UserPlus, UserCheck, UserX } from 'react-feather'

// ** Styles
import '@styles/react/apps/app-users.scss'













const UsersList = () => {
  const [teacher, setTeacher] = useState([]);
  const [admin, setAdmin] = useState([]);  
  const [student , setStudent] = useState([])
  const [total , setTotalCount] = useState([])
  const getUserList2= async () => {
    try {
      const data = await getUserlist();
      
      const roles = data?.roles || [];

      const teacherRole = roles.find((role) => role.roleName === "Teacher");
      const adminRole = roles.find((role) => role.roleName === "Administrator")
      const studentRole = roles.find((role) => role.roleName === "Student")
      const teacherRoleNumber = teacherRole?.roleNumber || 0;
      const adminNumber = adminRole?.roleNumber || 0;
      const StudentNumber = studentRole?.roleNumber || 0;

      setTeacher(teacherRoleNumber)
      setAdmin(adminNumber)
      setStudent(StudentNumber)
    } catch (error) {
      console.error("Error fetching user roles:", error);
    }
  };
  const getTotalCount = async  () => {
    try {
      const data = await getUserlist();
      setTotalCount(data?.totalCount || [])
    } catch (error) {
      console.error("Error fetching user roles:", error);
    }
  }





 useEffect(() => {
    getUserList2()
    getTotalCount()
 }, [])


  return (
    <div className='app-user-list'>
      <Row>
        <Col lg='3' sm='6'>
          <StatsHorizontal
            color='primary'
            statTitle='کل کاربران'
            icon={<User size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>{total}</h3>}
          />
        </Col>
        <Col lg='3' sm='6'>
          <StatsHorizontal
            color='danger'
            statTitle='ادمین ها'
            icon={<UserPlus size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>{admin}</h3>}
          />
        </Col>
        <Col lg='3' sm='6'>
          <StatsHorizontal
            color='success'
            statTitle='اساتید'
            icon={<UserCheck size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>{teacher}</h3>}
          />
        </Col> 
         <Col lg='3' sm='6'>
          <StatsHorizontal
            color='warning'
            statTitle='دانشجویان'
            icon={<UserX size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>{student}</h3>}
          />
        </Col>
      
      </Row>
      <Table />
    </div>
  )
}

export default UsersList
