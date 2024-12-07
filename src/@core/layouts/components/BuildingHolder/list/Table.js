// ** React Imports
import { useState, useEffect } from 'react'

// ** Third Party Components
import Select from 'react-select'
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import { ArrowRight, Check, ChevronDown, FileText, MoreVertical, Trash2, X , ArrowUpCircle
  ,
} from 'react-feather'

import { MapContainer , TileLayer , Marker , useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';


// ** Utils
import { selectThemeColors } from '@utils'

// ** Reactstrap Imports
import {
  Row,
  Badge,
  Col,
  Card,
  Input,
  Label,
  CardBody,
  CardTitle,
  CardHeader,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Spinner,
} from 'reactstrap'

// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

import toast from 'react-hot-toast'
import { PostActiveBuilding, PostDeactiveBuilding , PutUpdateBuilding , GetBuildingData , PostCreateBuilding } from '../../../../../core/services/api/building'
   console.log('سلام ایلیا' ,GetBuildingData);

// PostActiveBuilding, PostDeactiveBuilding , GetBuildingData , PostCreateBuilding , PutUpdateBuilding
// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'
import { useQuery } from '@tanstack/react-query'
import moment from 'jalali-moment'


  const toPersianDate = (date) => {
    return moment(date).format('jYYYY/jMM/jDD')
  }
// import AddCardExample from '../Modal/AddReply'
// import UpdateCommentCourse from '../Modal/UpdateBuildingModal'

// ** Table Header
const CustomHeader = ({ handlePerPage, handleQuery, rowsPerPage, searchTerm }) => {

  return (
    <div className='invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75'>
      <Row>
        <Col xl='6' className='d-flex align-items-center p-0'>
          <div className='d-flex align-items-center w-100'>
            <label htmlFor='rows-per-page'>نمایش</label>
            <Input
              className='mx-50'
              type='select'
              id='rows-per-page'
              value={rowsPerPage}
              onChange={(val) => handlePerPage(val.target.value)}
              style={{ width: '5rem' }}
            >
              <option value='5'>5</option>
              <option value='10'>10</option>
              <option value='20'>20</option>
            </Input>
            <label htmlFor='rows-per-page'>عدد</label>
          </div>
        </Col>
        <Col
          xl='6'
          className='d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column p-0 mt-xl-0 mt-1'
        >

          <div className='d-flex align-items-center mb-sm-0 mb-1 me-1'>
            <Input
              placeholder='جستحوی نظر...'
              id='search-invoice'
              className='ms-50 w-100'
              type='text'
              value={searchTerm}
              onChange={e => handleQuery(e.target.value)}
            />
          </div>

        </Col>
      </Row>
    </div>
  )
}

const UsersList = () => {
  // ** States
  const [SortingCol, setSortingCol] = useState('')
  const [SortType, setSortType] = useState('')
  const [RowsOfPage, setRowsOfPage] = useState(5)
  const [PageNumber, setPageNumber] = useState(1)
  const [Query, setQuery] = useState('')
  const [Accept, setAccept] = useState({ value: '', label: 'انتخاب کنید' })
  const [Teacher, setTeacher] = useState({ value: '', label: 'انتخاب کنید' })

  const {data: Create} = useQuery({queryKey: [''], queryFn: PostCreateBuilding})

  // const {data: GetBuildingData, refetch, isLoading, isFetching} = useQuery({
  //   queryKey: ['GetBuildingData', SortType, SortingCol, Query, PageNumber, RowsOfPage, Accept, ], 
  //   queryFn: () => GetBuildingData(SortType, SortingCol, Query, PageNumber, RowsOfPage, Accept, Building),
  //   refetchOnWindowFocus: false,
  //   keepPreviousData: true,

  // })
  const [data3,setData3] = useState([]);
  const getBuilding = async() => {

    const result = await GetBuildingData();
       
    setData3(result);
  }
  // console.log('سلام ایلیا' ,data3);
  useEffect(()=>{
    getBuilding();

  } , [] )

  console.log(GetBuildingData);
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const [show2, setShow2] = useState(false);
  const [selectedItem2, setSelectedItem2] = useState(null);

 

    const statusObj = {
      pending: 'light-warning',
      active: 'light-success',
      inactive: 'light-secondary',
      danger: 'light-danger',
    }
    const [open1 , setOpen1]=useState(false);
    console.log(open1);
    
  

    const [lng , setLng] = useState(0);
    const [lt , setLt] = useState(0);
    console.log(lt,lng)
    const handleOpen =() =>{
      
      setOpen1(true)

    }
    const columns = [
   

    {
        name: ' نام ساختمان ' ,
        minWidth: '230px',
        sortable: true,
        sortField: 'billing',
        selector: row => row.buildingName,
        
        cell: row => <span className='text-capitalize'>{row.buildingName} 
          {console.log(row.buildingName)}      
         </span>
    },
    {
      name: ' سال تاسیس ',
      sortable: true,
      minWidth: '300px',
      sortField: 'fullName',
      selector: row => row.workDate,
      cell: row => (
        <div className='d-flex justify-content-left align-items-center'>
          <div className='d-flex flex-column' style={{maxWidth: '200px', overflow: 'hidden'}}>
            <Link
              // to={`/comments/view/${row.commentId}/${row.courseId}`}
              className='user_name text-truncate text-body'
            >
              <span className='fw-bolder'> {row.workDate ? toPersianDate(row.workDate) : 'نامشخص'} </span>
            </Link>
            <small className='text-truncate text-muted mb-0'>{row.describe}</small>
          </div>
        </div>
      )
    },
    {
      name: ' طبقه ' ,
      minWidth: '230px',
      sortable: true,
      sortField: 'billing',
      selector: row => row.floor,
      cell: row => <span className='text-capitalize'>{row.floor}</span>
    },
    
    {
      name: 'وضعیت',
      minWidth: '138px',
      sortable: true,
      sortField: 'status',
      selector: row => row.active,
      cell: row => (
        <Badge className='text-capitalize' color={statusObj[row.active ? 'active' : 'danger']} pill>
          {row.active ? 'فعال' : 'غیر فعال'}
        </Badge>
      )
    },
   


    {
      name: 'اقدام',
      minWidth: '100px',
      cell: row => (
        <div style={{zIndex: 'auto'}}>
          <UncontrolledDropdown className='position-static'>
            <DropdownToggle tag='div' className='btn btn-sm'>
              <MoreVertical size={14} className='cursor-pointer' />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem
                // tag={Button}
                className='w-100'
                // to={`/comments/view/${row.commentId}/${row.courseId}`}
              >
                <FileText size={14} className='me-50' />
                <span onClick={()=>handleOpen()} className='align-middle'> نمایش در نقشه </span>
              </DropdownItem>
             

              
              <DropdownItem
                tag='a'
                className='w-100'
                onClick={async (e) => {
                  e.preventDefault()
                  const response = await PostDeactiveBuilding(row.commentId)
                if(!response) {
                  toast.error(' عملیات ناموفق بود ')
                }
                else if(response.success == true){
                  toast.success(' عملبات با موفیقت انجام شد ')
                  refetch()
                }
                else{
                  toast.error(' امکان به حذف این نظر وجود ندارد😎 ')
                }
                }}
              >
                <Trash2 size={14} className='me-50 text-danger' />
                <span className='align-middle text-danger'> حذف </span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      )
    }
  ]

  // ** Function to toggle sidebar
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  const AcceptOptions = [
    { value: '',  label: 'انتخاب کنید' },
    { value: false, label: ' فعال ' },
    { value: true, label: ' غیرفعال ' },
  ]

  // const TeacherOptions = Create?.teachers.map(teacher => ({value: teacher.teacherId, label: teacher.fullName !== null ? (teacher.fullName).replace('-', ' ') : ' نامشخص '}))

  // ** Function in get data on search query change
  const handleFilter = val => {
    
  }

  const handlePerPage = (val) => {
    setRowsOfPage(val)
  }

  const handleQuery = (query) => {
    setQuery(query)
    setPageNumber(1)
  }

  // useEffect(() => {
  //   refetch()
  // }, [SortType || SortingCol || Query || PageNumber || RowsOfPage || Accept || Teacher])

  // ** Custom Pagination
 

  // ** Table data to render
  const dataToRender = () => {

      console.log(Building);
      return Building?.slice(0, RowsOfPage)
  
  }

  const handleSort = (val) => {
    if(val.value === 2){
      setIsActiveUser(true)
      setIsDeletedUser(false)
    }
    else if(val.value === 3){
      setIsActiveUser(false)
      setIsDeletedUser(true)
    }
  }
  // const count = Number(Building?.totalCount / RowsOfPage)


  return (
    <>

       


       <Card>
        <CardHeader>
          <CardTitle tag='h4'>فیلتر ها</CardTitle>
        </CardHeader>
        {open1 && (
        <div style={{width:'600px', height:'500px', position:'absolute', top:'300px' , right:'25%' , borderRadius:'10px' , background:'#ccc', zIndex:'1', boxShadow:'0px 0px 0 4px #f7f7f7'}}>
          <div> <X onClick={()=>setOpen1(false)}/> </div>
           <div style={{color:'red'}}>
             <MapContainer center={[lng,lt]} zoom={14} style={{width:'600px', height:'400px',}}>
                <TileLayer 
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
             </MapContainer>
           </div>
        </div>
       )
        
       }
        <CardBody>
          <Row>
            <Col md='8'>
              <Label for='role-select'> وضعیت  </Label>
              <Select
                isClearable={false}
                value={Accept}
                options={AcceptOptions}
                className='react-select'
                classNamePrefix='select'
                theme={selectThemeColors}
                onChange={data => {
                    setPageNumber(1)
                    setAccept(data)
                }}
              />
            </Col>
            
          </Row>
        </CardBody>
      </Card>

      <Card className='overflow-hidden'>
      <div className='react-dataTable'>
  <DataTable
    noHeader
    subHeader
    sortServer
    pagination
    paginationServer 
    responsive
    columns={columns}
    paginationTotalRows={'count || 0'} 
    onSort={handleSort} 
    sortIcon={<ChevronDown />}
    className='react-dataTable'
    data={data3} 
    onChangePage={(page) => setPageNumber(page)} 
    onChangeRowsPerPage={(newRows) => {
      setRowsOfPage(newRows); 
      setPageNumber(1); 
    }}
    // progressPending={isLoading || isFetching}
    progressComponent={<Spinner className='my-5' /> }
    noDataComponent={<div style={{ padding: '20px' }}>ساختمانی ثبت نشده است</div>}
    subHeaderComponent={
      <CustomHeader
        handleFilter={handleFilter}
        handleQuery={handleQuery}
        handlePerPage={handlePerPage}
        toggleSidebar={toggleSidebar}
        rowsPerPage={RowsOfPage}
      />
    }
  />
</div>

      </Card> 
      {/* <AddCardExample show={show} setShow={setShow} selectedItem={selectedItem} /> */}
    </>
  )
}

export default UsersList
