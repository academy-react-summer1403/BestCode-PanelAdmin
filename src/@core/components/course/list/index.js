// ** User List Component
import Table from './Table'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'
import { useEffect , useState } from 'react'
import { getUserlist , getAllCourse} from '../../../../core/services/api/usersmanager'

// ** Custom Components
import StatsHorizontal from '@components/widgets/stats/StatsHorizontal'

// ** Icons Imports
import { User, UserPlus, UserCheck, UserX } from 'react-feather'

// ** Styles
import '@styles/react/apps/app-users.scss'

const CourseList2 = () => {
  const [teacher, setTeacher] = useState([]);
  const [admin, setAdmin] = useState([]);  
  const [student , setStudent] = useState([])
  const [total , setTotalCount] = useState([])
  const getUserList2= async () => {
    try {
      const data = await getAllCourse();
      
      const courses = data?.courseDtos || [];

      const activeCourses = courses.filter(course => course.isActive);
      const ExpiredCourses = courses.filter(course => course.isExpire);
      const DeletedCourses = courses.filter(course => course.isdelete);
      setTeacher(ExpiredCourses)
      setAdmin(activeCourses)
      setStudent(DeletedCourses)
    } catch (error) {
      console.error("Error fetching user roles:", error);
    }
  };
  const getTotalCount = async  () => {
    try {
      const data = await getAllCourse();
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
            statTitle='مجموع دوره ها'
            icon={<User size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>{total}</h3>}
          />
        </Col>
        <Col lg='3' sm='6'>
          <StatsHorizontal
            color='danger'
            statTitle='دوره های فعال'
            icon={<UserPlus size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>{admin.length}</h3>}
          />
        </Col>
        <Col lg='3' sm='6'>
          <StatsHorizontal
            color='success'
            statTitle='دوره های منقضی شده'
            icon={<UserCheck size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>{teacher.length}</h3>}
          />
        </Col> 
         <Col lg='3' sm='6'>
          <StatsHorizontal
            color='warning'
            statTitle='دانشجویان'
            icon={<UserX size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>{student.length}</h3>}
          />
        </Col>
      
      </Row>
      <Table />
    </div>
  )
}

export default CourseList2
