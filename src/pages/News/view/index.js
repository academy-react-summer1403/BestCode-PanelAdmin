// ** React Imports
import { Fragment, useState, useEffect } from 'react'
import { useParams,Link, useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import {GetNewsById , GetDetailUser  } from '../../../core/services/api/usersmanager'
// import UserTabs from './Tabs'
import UserInfoCard from '../view/UserInfoCard'
import UserTabs from './Tabs'
import ActiveNews from '../../../core/services/api/usersmanager'
import jMoment from 'moment-jalaali'
import { MessageSquare,Star,Eye,ThumbsUp,ThumbsDown, ChevronDown } from 'react-feather'
import {
  Bookmark,
  Trash,
  Edit2
} from 'react-feather'
import { kFormatter } from '@utils'
import Sidebar from '../BlogSidebar'
import Avatar from '@components/avatar'

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  Badge,
  CardBody,
  CardTitle,
  Spinner,
  Alert,
  DropdownToggle,
  UncontrolledDropdown,
  Input
} from 'reactstrap'

// ** Styles
import '@styles/base/pages/page-blog.scss'

// ** Images
import toast from 'react-hot-toast'
import CommentsNew from './Comments'
import NewsFile from './NewsFile'

const BlogDetails = () => {
  // ** States
  const navigate=useNavigate()
  const [data, setData] = useState(null)
  const {id} = useParams()
  const [userData, setUserData] = useState(null)
  const [active, setActive] = useState('1')

  const toggleTab = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }

  const { data: APIdata ,isLoading, refetch} = useQuery({queryKey: ['dataFromAPIDEtail'], queryFn:async()=> await GetNewsById(id)});

  useEffect(() => {
    getDetail()
  }, [APIdata])

  const getDetail=async()=>{
    if(!isLoading){
        let dataUser = await GetDetailUser(APIdata.detailsNewsDto.userId);
        setUserData(dataUser)
        setData(APIdata.detailsNewsDto)
    }
  }
  var badgeColorsArr = {
    false: 'light-danger',
    true: 'light-success',
    all:'light-info'
  }

  const handleDelete = async (id) => {
    const response = await ActiveNews(id, false)
    if(response.success == true){
      toast.success(response.message)
      navigate('/newsManagement')
    }
    else{
      toast.error(' عملیات ناموق بود ')
    }
  } 



  if(id==1){
    return <Alert color='danger'>
      <h4 className='alert-heading'> خبر یا مقاله پیدا نشد </h4>
      <div className='alert-body'>
        خبر یا مقاله مورد نظر یافت نشد ، خبر یا مقاله مورد نظر را از <Link to='/News/list'>  لیست اخبار و مقالات </Link> انتخاب کنید

      </div>
    </Alert>
  }else
  if (userData==null) {
    return <div className='d-flex align-items-center justify-content-center' style={{ minHeight: '80vh' }}><Spinner color="primary" style={{ width: '5rem', height: '5rem' }}/></div>
  } 
  return (
    <div className='app-user-view'>
    <Row>
     <Col xl='4' lg='5' xs={{ order: 1 }} md={{ order: 0, size: 5 }}>
       <UserInfoCard data={data}
            handleDelete={handleDelete} 

       />
     </Col>
     <Col xl='8' lg='7' xs={{ order: 0 }} md={{ order: 1, size: 7 }}>
     <UserTabs active={active} toggleTab={toggleTab} id={id}
     refetch={refetch}
     />


     </Col>
   </Row> 
 </div>
  )
}

export default BlogDetails
