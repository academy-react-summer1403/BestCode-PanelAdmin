// ** React Imports
import { Fragment, useState, useEffect } from 'react'
import Avatar from '@components/avatar'
import pic from "../../../../assets/images/avatars/1.png"
import { getUserlist , filterGetuser , AddUser } from '../../../../core/services/api/usersmanager'
import Chart from 'react-apexcharts'
import { useQuery } from '@tanstack/react-query'
import { useDispatch, useSelector } from 'react-redux'
// ** Third Party Components
import Select from 'react-select'
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import { ChevronDown, Share, Printer, FileText, File, Grid, Copy, MoreVertical,  Archive ,Trash2 ,Check, Briefcase, X } from 'react-feather'
import toast from 'react-hot-toast'

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
  ModalBody, ModalHeader,
  Modal, Form,
  Spinner,
  Badge, 
} from 'reactstrap'

import { NavLink } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'

// ** Table Header
const CustomHeader = ({ store, toggleSidebar, handlePerPage, rowsPerPage,  searchQuery , setSearchQuery,setShow
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
    

            <Button className='add-new-user' color='primary' onClick={() =>setShow(true)}>
              افزودن کاربر جدید
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  )
}


const defaultValues = {
  phoneNumber: '',
  gmail: '',
  password: '',
  firstName: '',
  lastName: '',
}


const checkIsValid = data => {
  return Object.values(data).every(field => (typeof field === 'object' ? field !== null : field.length > 0))
}

const UsersList = () => {
  const statusObj = {
    pending: 'light-warning',
    active: 'light-success',
    inactive: 'light-secondary',
    danger: 'light-danger',
  }
  const [data3, setData3] = useState(null)
  const [role, setRole] = useState('isStudent')
  const [isStudent, setIsStudent] = useState(false)
  const [isTeacher, setIsTeacher] = useState(false)

  useEffect(() => {
    if(role == 'isStudent') {
      setIsStudent(true)
    }
    else if(role == 'isTeacher') {
      setIsTeacher(true)
    }
  }, [role])

  // ** Store Vars
  const dispatch = useDispatch()

  // ** Vars
  const {
    control,
    setValue,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })

  const onSub = async (dataObj) => {
    const response = await AddUser(dataObj)

    if(!response){
      toast.error(' کاربر اضافه نشد! ')
    }
    else if(response.success == true){
      toast.success('کاربر اضافه شد')
    }
  }

  // const {mutate} = AddUser()

  // ** Function to handle form submit
  const onSubmit = data3 => {
    setData3(data3)
    if (checkIsValid(data3)) {
        onSub({
          gmail: data3.gmail,
          password: data3.password,
          phoneNumber: data3.phoneNumber,
          firstName: data3.firstName,
          lastName: data3.lastName,
          isTeacher: isTeacher,
          isStudent: isStudent
        })
    } else {
      for (const key in data) {
        if (data[key] === null) {
          setError('country', {
            type: 'manual'
          })
        }
        if (data[key] !== null && data[key].length === 0) {
          setError(key, {
            type: 'manual'
          })
        }
      }
    }
  }

  const handleSidebarClosed = () => {
    for (const key in defaultValues) {
      setValue(key, '')
    }
    setRole('isStudent')
  }









  const [data1 , setData1] = useState([])
  const [isLoading , setIsLoading] = useState(false)
  const GetuserData = async (page = 1, rows = 1000) => {
    setIsLoading(true); 
    try {
        const result = await filterGetuser(page, rows);
        setData1(result?.listUser);
    } catch (err) {
        console.error(err);
        setData1([]); 
    } finally {
        setIsLoading(false); 
    }
  }
  const [selectedRole, setSelectedRole] = useState(null)

    
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const GetfilterData = async (page = 1, rows = rowsPerPage ) => {
    try {
        const result = await filterGetuser(page, rows)
        setData1(result?.listUser)
        
    } catch(err) {
        return null
    }
 } 
 const statusOptions = [
  { value: 'active', label: ' فعال ' },
  { value: 'inactive', label: ' غیر فعال ' },
  { value: 'suspended', label: 'درحال عضو گیری' }
]

  
 const [filter, setFilter] = useState([])

 const GetfilterData1 = async (page = 1, rows = 1000 ) => {
  try {
      const result = await filterGetuser(page, rows)
      setFilter(result?.listUser)
      
  } catch(err) {
      return null
  }
} 



 const filterData = (role) => {
  if (!role) {
  
    setData1(data1); 
  } else if (role === 'Administrator' || role === 'Teacher' || role ==='Student'){
    const filtered = filter.filter((user) => 
      user.userRoles && user.userRoles.split(', ').includes(role) 
    );
   
    setData1(filtered);
  } else if (role === 'reset') {
    console.log(role)
    console.log(data1)
    setData1(filter)
  }
};

const [selectedRole1, setSelectedRole1] = useState(null)


const filterData1 = (role) => {
  if (!role) {
  
    setData1(data1); 

  } else if (role === 'True' || role === 'False') {
    const filtered = filter.filter((user) =>  user.active === role);
    setData1(filtered);
  } else if (role === 'reset') {
   
    setData1(filter)
  }
};

const [selectedRole2, setSelectedRole2] = useState(null)




 const GetSearchData = async (page = 1, rows = 1000) => {
  try {
      const result = await filterGetuser(page, rows)
      setData(result?.listUser)
  } catch(err) {
      return null
  }
}

  useEffect(()=> {
     GetuserData()
     GetSearchData()
     GetfilterData1()
  }, [])

  useEffect(() => {
    filterData(selectedRole?.value);
  }, [selectedRole]);

  useEffect(() => {
    filterData1(selectedRole1?.value);
  }, [selectedRole1]);

 

  const sortData = (order) => {
    if (order === '100') {
      const sorted = [...data1].sort((a, b) => 
        parseFloat(b.profileCompletionPercentage) - parseFloat(a.profileCompletionPercentage)
      );
      setData1(sorted);
    } else if (order === '0') {
      const sorted = [...data1].sort((a, b) => 
        parseFloat(a.profileCompletionPercentage) - parseFloat(b.profileCompletionPercentage)
      );
      setData1(sorted);
    } else {
      console.warn(`Invalid sort order: ${order}`);
    }
  };


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
  
  const filteredData = data1.filter((user) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      (user.fname && user.fname.toLowerCase().includes(searchLower)) || 
      (user.gmail && user.gmail.toLowerCase().includes(searchLower))
    );
  }); 

 
  const columnn=[
      {
        name: 'کاربر',
        sortable: true,
        minWidth: '20px',
        maxWidth: '20px',
        sortField: 'fullName',
        cell: row => (
          <div className='d-flex justify-content-left align-items-center '>
            <Avatar img={row.pictureAddress} />
          
          </div>
        )
      },
      {
        name: 'نام کاربر',
        sortable: true,
        minWidth: '100px',
        sortField: 'name',
        selector: row => row.name,
        cell: row => (
          <div className='d-flex justify-content-left align-items-center'>
            <div className='d-flex flex-column'>
    
                <span className='fw-bolder'>{row.fname}</span>
    
      
            </div>
          </div>
        )
      },
      {
        name: 'نقش',
        sortable: true,
        minWidth: '172px',
        sortField: 'role',
        cell: row => {
          const truncateText = (text, maxLength) => {
            if (!text) return '';
            return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
          };
      
          return (
            <div className='d-flex justify-content-left align-items-center'>
              <div className='d-flex flex-column'>
                <span className='fw-bolder'>{truncateText(row.userRoles, 20)}</span>
              </div>
            </div>
          );
        }
      },
      {
        name: 'ایمیل',
        sortable: true,
        minWidth: '250px',
        sortField: 'role',
        cell: row => (
          <div className='d-flex justify-content-left align-items-center'>
            <div className='d-flex flex-column'>
    
                <span className='fw-bolder'>{row.gmail}</span>
    
      
            </div>
          </div>
        )
      },
    
      {
        name: 'درصد تکمیل دوره',
        sortable: true,
        minWidth: '100px',
        sortField: 'role',
        selector: row => row.age,
        cell: row => (
          <div className='d-flex justify-content-left align-items-center'>
            <div className='d-flex flex-column'>
              <Chart
                options={{
                  chart: {
                    type: 'radialBar',
                    sparkline: {
                      enabled: true  
                    }
                  },
                  plotOptions: {
                    radialBar: {
                      hollow: {
                        size: '45%' 
                      },
                      track: {
                        strokeWidth: '20px' 
                      },
                      dataLabels: {
                        show: true,
                        name: {
                          show: false
                        },
                        value: {
                          show: true,
                          fontSize: '12px',
                          color: '#000', 
                          offsetY: 5 
                        }
                      }
                    }
                  }
                }}
                series={[row.profileCompletionPercentage || 0]} 
                type='radialBar'
                height={60} 
                width={60} 
              />
            </div>
          </div>
        )
      },
      {
        name: 'وضعیت',
        sortable: true,
        minWidth: '100px',
        sortField: 'role',
        cell: row => (
        
          <div className='d-flex justify-content-left align-items-center'>
            <div className='d-flex flex-column'>
        
              <Badge  className='text-capitalize' color={statusObj[row.active ? 'active' : 'pending']} pill>
                {row.active ? 'فعال' : 'غیر فعال'}
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
                      tag={NavLink} to={`/userManagement/userDetail/${row.id}`}
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
      { value: 'reset', label: 'انتخاب کنید...' },
      { value: 'Administrator', label: 'ادمین' },
      { value: 'Teacher', label: 'اساتید' },
      { value: 'Student', label: 'دانشجو' }
   ];

  const options1 = [
      { value: 'reset', label: 'انتخاب کنید...' },
      { value: 'True', label: 'فعال' },
      { value: 'False', label: 'غیرفعال' },
  ];

  const options2 = [
    { value: '100', label: 'بیشترین درصد پروفایل' },
    { value: '0', label:'کمترین درصد پروفایل' },
  ];
  const [show, setShow] = useState(false)

  
  return (
    <Fragment>
      <Card>
      
        <CardBody>
          <Row>
            <Col md='4'>
              <Label for='role-select'>نقش</Label>
              <Select
                isClearable={false}
                className='react-select'
                classNamePrefix='select'
                options={options}
                placeholder='انتخاب کنید...'
                value={selectedRole}
                onChange={setSelectedRole}
                isSearchable={false}
              />
            </Col>
            <Col className='my-md-0 my-1' md='4'>
              <Label for='plan-select'>وضعیت</Label>
              <Select
                isClearable={false}
                className='react-select'
                classNamePrefix='select'
                placeholder='انتخاب کنید...'
                options={options1}
                value={selectedRole1}
                onChange={setSelectedRole1}
                isSearchable={false}

              />
           
            </Col>
            <Col md='4'>
              <Label for='status-select'>مرتب سازی</Label>
              <Select
                theme={selectThemeColors}
                isClearable={false}
                className='react-select'
                classNamePrefix='select'
                isSearchable={false}
                onChange={(selectedRole2) => {
                  sortData(selectedRole2.value);
                }}
                placeholder='انتخاب کنید...'
                options={options2}
              />
            </Col>
          </Row>
        </CardBody>
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
      columns={columnn}
      className='react-dataTable'
      progressComponent={<Spinner className='my-5' />}
      noDataComponent={<div style={{ padding: '20px' }}> کاربری وجود ندارد</div>}

      subHeaderComponent={
        <CustomHeader 
          filteredData={filteredData}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          rowsPerPage={rowsPerPage}
          handlePerPage={handlePerPage}
          setShow={setShow}
        />
      }
      data={searchQuery ? filteredData : data1}
    />
  )}
        </div>
      </Card>
      </Card>
      <Modal  isOpen={show} toggle={() => setShow(!show)} className='modal-dialog-centered modal-lg' >
        <ModalHeader className='bg-transparent' toggle={() => setShow(!show)}></ModalHeader>
        <ModalBody className='px-sm-5 pt-50 pb-5'>
          <div className='text-center mb-2'>
            <h1 className='mb-1'>   افزودن کاربر </h1>
          </div>
          <Form onSubmit={handleSubmit(onSubmit)} >
            <Row className='gy-1 pt-75'>
              <Col md={6} xs={12}>
              <Label className='form-label' for='firstName'>
                  نام <span className='text-danger'>*</span>
                  </Label>
                  <Controller
                    name='firstName'
                    control={control}
                    render={({ field }) => (
                      <Input id='firstName' placeholder='felan' invalid={errors.fullName && true} {...field} />
                    )}
                  />
              </Col>
              <Col md={6} xs={12}>
              <Label className='form-label' for='lastName'>
                 نام خانوادگی <span className='text-danger'>*</span>
              </Label>
                    <Controller
                      name='lastName'
                      control={control}
                      render={({ field }) => (
                        <Input id='lastName' placeholder='felani' invalid={errors.lastName && true} {...field} />
                      )}
                    />
              </Col>
              <Col md={6} xs={12}>
              <Label className='form-label' for='gmail'>
            ایمیل <span className='text-danger'>*</span>
          </Label>
          <Controller
            name='gmail'
            control={control}
            render={({ field }) => (
              <Input
                type='gmail'
                id='gmail'
                placeholder='felanfelani@gmail.com'
                invalid={errors.gmail && true}
                {...field}
              />
            )}
          />
              </Col>
             
              <Col md={6} xs={12}>
                      <Label className='form-label' for='user-role'>
                    دسترسی
                  </Label>
                  <Input type='select' id='user-role' name='user-role' value={role} onChange={e => setRole(e.target.value)}>
                    <option value='isStudent' className='iranSans'> دانشجو </option>
                    <option value='isTeacher' className='iranSans'> استاد </option>
                  </Input>
              </Col>
              <Col md={6} xs={12}>
              <Label className='form-label' for='phoneNumber'>
            شماره <span className='text-danger'>*</span>
          </Label>
          <Controller
            name='phoneNumber'
            control={control}
            render={({ field }) => (
              <Input
                type='text'
                id='phoneNumber'
                placeholder='0911345355'
                invalid={errors.phoneNumber && true}
                {...field}
              />
            )}
          />
              </Col>
              <Col md={6} xs={12}>
              <Label className='form-label' for='password'>
            رمز عبور <span className='text-danger'>*</span>
          </Label>
          <Controller
            name='password'
            control={control}
            render={({ field }) => (
              <Input id='password' placeholder='' invalid={errors.password && true} {...field} />
            )}
          />
              </Col>
              <Col xs={12}>
                <div className='d-flex align-items-center mt-1'>
                  <div className='form-switch'>
                    <Input type='switch' defaultChecked id='billing-switch' name='billing-switch' />
                    <Label className='form-check-label' htmlFor='billing-switch'>
                      <span className='switch-icon-left'>
                        <Check size={14} />
                      </span>
                      <span className='switch-icon-right'>
                        <X size={14} />
                      </span>
                    </Label>
                  </div>
                  <Label className='form-check-label fw-bolder' for='billing-switch'>
                    تمام تغییرات ثبت شود
                  </Label>
                </div>
              </Col>
              <Col xs={12} className='text-center mt-2 pt-50'>
                <Button type='submit' className='me-1' color='primary'>
                  ثبت تغییرات
                </Button>
                <Button
                  type='reset'
                  color='secondary'
                  outline
                  // onClick={() => {
                  //   handleReset()
                  //   setShow(false)
                  // }}
                >
                 منصرف شدن
                </Button>
              </Col>
            </Row>
          </Form>
        </ModalBody>
      </Modal>
    </Fragment>
  )
}

export default UsersList
