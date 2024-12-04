// ** React Imports
import { Fragment, useState, useEffect } from 'react'
import Avatar from '@components/avatar'
import pic from "../../../../assets/images/avatars/1.png"
import { getUserlist , filterGetuser, getAllCourse, getfilterCourse } from '../../../../core/services/api/usersmanager'
import Chart from 'react-apexcharts'

import { useDispatch, useSelector } from 'react-redux'

// ** Third Party Components
import Select from 'react-select'
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import { ChevronDown, Share, Printer, FileText, File, Grid, Copy, MoreVertical,  Archive ,Trash2  } from 'react-feather'

// ** Utils
import { selectThemeColors } from '@utils'

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  Input,
  Label,
  Button,
  CardBody,
  CardTitle,
  CardHeader,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Badge,
  Spinner,
} from 'reactstrap'

import { NavLink } from 'react-router-dom'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'

// ** Table Header
const CustomHeader = ({ store, toggleSidebar, handlePerPage, rowsPerPage,  searchQuery , setSearchQuery
}) => {
  // ** Converts table to CSV
  function convertArrayOfObjectsToCSV(array) {
    let result

    const columnDelimiter = ','
    const lineDelimiter = '\n'
    const keys = Object.keys(store.data[0])

    result = ''
    result += keys.join(columnDelimiter)
    result += lineDelimiter

    array.forEach(item => {
      let ctr = 0
      keys.forEach(key => {
        if (ctr > 0) result += columnDelimiter

        result += item[key]

        ctr++
      })
      result += lineDelimiter
    })

    return result
  }

    

  // ** Downloads CSV
  function downloadCSV(array) {
    const link = document.createElement('a')
    let csv = convertArrayOfObjectsToCSV(array)
    if (csv === null) return

    const filename = 'export.csv'

    if (!csv.match(/^data:text\/csv/i)) {
      csv = `data:text/csv;charset=utf-8,${csv}`
    }

    link.setAttribute('href', encodeURI(csv))
    link.setAttribute('download', filename)
    link.click()
  }
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
              onChange={handlePerPage}
              style={{ width: '5rem' }}
            >
              <option value='10'>10</option>
              <option value='200'>200</option>
              <option value='600'>600</option>
            </Input>
          </div>
        </Col>
        <Col
          xl='6'
          className='d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1'
        >
          <div className='d-flex align-items-center mb-sm-0 mb-1 me-1'>
            <label className='mb-0' htmlFor='search-invoice'>
               جستجو
            </label>
            <Input
              id='search-invoice'
              className='ms-50 w-100'
              type='text'
              value={searchQuery}
              placeholder='جستجو'
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className='d-flex align-items-center table-header-actions'>
            {/* <UncontrolledDropdown className='me-1'>
              <DropdownToggle color='secondary' caret outline>
                <Share className='font-small-4 me-50' />
                <span className='align-middle'>Export</span>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem className='w-100'>
                  <Printer className='font-small-4 me-50' />
                  <span className='align-middle'>Print</span>
                </DropdownItem>
                <DropdownItem className='w-100' onClick={() => downloadCSV(store.data)}>
                  <FileText className='font-small-4 me-50' />
                  <span className='align-middle'>CSV</span>
                </DropdownItem>
                <DropdownItem className='w-100'>
                  <Grid className='font-small-4 me-50' />
                  <span className='align-middle'>Excel</span>
                </DropdownItem>
                <DropdownItem className='w-100'>
                  <File className='font-small-4 me-50' />
                  <span className='align-middle'>PDF</span>
                </DropdownItem>
                <DropdownItem className='w-100'>
                  <Copy className='font-small-4 me-50' />
                  <span className='align-middle'>Copy</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </div>
        </Col>
      </Row>
    </div>
  )
}

const UsersList = () => {
  const [data1 , setData1] = useState([])
  const GetuserData = async () => {
     try {
         const result = await getAllCourse()
         setData1(result?.courseDtos)
     } catch(err) {
        return []
     }
  }

  const statusObj = {
    pending: 'light-warning',
    active: 'light-success',
    inactive: 'light-secondary',
    danger: 'light-danger',
  }
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading , setIsLoading] = useState(false)

  const GetfilterData = async (page = 1, rows = rowsPerPage) => {
    setIsLoading(true); 

    try {
        const result = await getfilterCourse(page, rows)
        setData1(result?.courseDtos)
    } catch(err) {
        return null
        
    } finally {
      setIsLoading(false); 
    }
 }

 const GetSearchData = async () => {
  try {
      const result = await getAllCourse()
      setData(result?.courseDtos)
  } catch(err) {
      return null
  }
}

  useEffect(()=> {
     GetuserData()
     GetSearchData()
  }, [])

  const handlePerPage = (e) => {
    const newRowsPerPage = parseInt(e.target.value, 10);
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1);
    GetfilterData(1, newRowsPerPage); 
  };

  useEffect(() => {
    GetfilterData(currentPage, rowsPerPage);
  }, [currentPage]);


  const [searchQuery, setSearchQuery] = useState("")
  
  const filteredData = data.filter((user) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      (user.title && user.title.toLowerCase().includes(searchLower)) 
    );
  }); 

 
  const columnn=[
     {
      name:'نام دوره',
      sortable: true,
      minWidth: '250px',
      sortField: 'role',
      cell: row => (
        <div className='d-flex justify-content-left align-items-center'>
          <div className='d-flex gap-2'>
               <Avatar img={row.tumbImageAddress} />
              <span className='fw-bolder'>{row.title}</span>
  
    
          </div>
        </div>
      )
    },
   
      {
        name: 'نوع دوره',
        sortable: true,
        minWidth: '130px',
        sortField: 'role',
        cell: row => (
          <div className='d-flex justify-content-left align-items-center'>
            <div className='d-flex flex-column'>
    
                <span className='fw-bolder'>{row.typeName}</span>
    
      
            </div>
          </div>
        )
      },
    
      {
        name: 'سطح دوره',
        sortable: true,
        minWidth: '100px',
        sortField: 'role',
        cell: row => (
          <div className='d-flex justify-content-left align-items-center'>
            <div className='d-flex flex-column'>
    
                <span className='fw-bolder'>{row.levelName}</span>
    
      
            </div>
          </div>
        )
      },
      {
        name: 'وضعیت فعال بودن',
        sortable: true,
        minWidth: '159px',
        sortField: 'role',
        cell: row => (
        
          <div className='d-flex justify-content-left align-items-center'>
            <div className='d-flex flex-column'>
           
              <Badge className='text-capitalize' color={statusObj[row.isActive ? 'active' : 'danger']} pill>
                {row.isActive ? 'فعال' : 'غیر فعال'}
              </Badge>
            </div>
          </div>
        )
      },
      {
        name: 'وضعیت موجود بودن',
        sortable: true,
        minWidth: '159px',
        sortField: 'role',
        cell: row => (
        
          <div className='d-flex justify-content-left align-items-center'>
            <div className='d-flex flex-column'>
          
            <Badge className='text-capitalize' color={statusObj[row.isActive ? 'active' : 'danger']} pill>
                {row.isActive ? 'فعال' : 'غیر فعال'}
              </Badge>
            </div>
          </div>
        )
      },
      {
        name: 'اقدام',
        minWidth: '20px',
        cell: row => (
          <div className='column-action'>
            <UncontrolledDropdown>
              <DropdownToggle tag='div' className='btn btn-sm'>
                <MoreVertical size={14} className='cursor-pointer' />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem
                      tag={NavLink} to={`/courseManagement/CourseDetail/${row.courseId}`}
                >
                  <FileText size={14} className='me-50' />
                  <span 
                  className='align-middle'>جزئیات</span>
                </DropdownItem>
                <DropdownItem 
               
                  >
                  <Archive size={14} className='me-50' />
                  <span className='align-middle'>ویرایش</span>
    
                </DropdownItem>
                <DropdownItem
        
                >
                  <Trash2 size={14} className='me-50' />
                  <span className='align-middle'>حذف</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        )
      }
    ]

  const options = [
      { value: 'Adminasistor', label: 'ادمین' },
      { value: 'Teacher', label: 'اساتید' },
      { value: 'Student', label: 'دانشجو' }
   ];

  const options1 = [
      { value: 'Adminasistor', label: 'فعال' },
      { value: 'Teacher', label: 'غیرفعال' },
  ];

  const options2 = [
    { value: 'Adminasistor', label: 'بیشترین درصد پروفایل' },
    { value: 'Teacher', label:'کمترین درصد پروفایل' },
  ];

  
  return (
    <Fragment>
      <Card>
      
    
      </Card>

      <Card className='overflow-hidden'>
      <Card className='overflow-hidden'>
        <div className='react-dataTable'>
        {isLoading ? (
    <div className='d-flex' style={{justifyContent: 'center', margin: '50px'}}>
      <Spinner />
    </div>
  ) : (
          <DataTable
            noHeader
            subHeader
            sortServer
            pagination
            responsive
            progressComponent={<Spinner className='my-5' />}
            noDataComponent={<div style={{ padding: '20px' }}>دوره ای وجود ندارد</div>}
            columns={columnn}
            className='react-dataTable'
            subHeaderComponent={
              <CustomHeader 
              filteredData={filteredData}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              rowsPerPage={rowsPerPage}
              handlePerPage={handlePerPage}
              />
            }
            data={searchQuery? filteredData : data1 }
         
          />
  )}
        </div>
      </Card>
      </Card>
    </Fragment>
  )
}

export default UsersList
