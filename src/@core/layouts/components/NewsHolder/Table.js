import React from 'react'
import { Fragment, useState, useEffect } from 'react'
import Avatar from '@components/avatar'
import pic from "../../../../assets/images/avatars/1.png"


import { useDispatch, useSelector } from 'react-redux'

import Select from 'react-select'
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import {  FileText, MoreVertical, Check, X, CornerDownRight, Trash2 } from 'react-feather'

import { selectThemeColors } from '@utils'

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
  Form,
  Modal,
  ModalBody,
  ModalHeader 
} from 'reactstrap'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'


const Table = () => {
    // // ** Store Vars
    const dispatch = useDispatch()
    const store = useSelector(state => state.users)
    const [show, setShow] = useState(false)
  
  
    // // ** States
    const [sort, setSort] = useState('desc')
    const [searchTerm, setSearchTerm] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [sortColumn, setSortColumn] = useState('id')
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [currentRole, setCurrentRole] = useState({ value: '', label: 'انتخاب کنید...' })
    const [currentPlan, setCurrentPlan] = useState({ value: '', label: 'انتخاب کنید...' })
    const [currentStatus, setCurrentStatus] = useState({ value: '', label: 'انتخاب کنید...', number: 0 })
  
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen)
  
   
    
    const roleOptions = [
      { value: '', label: ' انتخاب کنید...' },
      { value: ' فعال', label: ' فعال ' },
      { value: 'غیر فعال ', label: 'غیر فعال ' },
  
      
    ]
  
   
  
    const statusOptions = [
      { value: '', label: ' انتخاب کنید...' },
      { value: ' علمی ', label: ' علمی ', number: 1 },
      { value: 'اخبار دوره ها ', label: ' اخبار دوره ها ', number: 2 },
      { value: ' تبلیغات ', label: ' تبلیغات ', number: 3 },

    ]
  
    // // ** Function in get data on page change
    const handlePagination = page => {
      dispatch(
        getData({
          sort,
          sortColumn,
          q: searchTerm,
          perPage: rowsPerPage,
          page: page.selected + 1,
          role: currentRole.value,
          status: currentStatus.value,
          currentPlan: currentPlan.value
        })
      )
      setCurrentPage(page.selected + 1)
    }
  
    // // ** Function in get data on rows per page
    const handlePerPage = e => {
      const value = parseInt(e.currentTarget.value)
      dispatch(
        getData({
          sort,
          sortColumn,
          q: searchTerm,
          perPage: value,
          page: currentPage,
          role: currentRole.value,
          currentPlan: currentPlan.value,
          status: currentStatus.value
        })
      )
      setRowsPerPage(value)
    }
  
    // // ** Function in get data on search query change
    const handleFilter = val => {
      setSearchTerm(val)
      dispatch(
        getData({
          sort,
          q: val,
          sortColumn,
          page: currentPage,
          perPage: rowsPerPage,
          role: currentRole.value,
          status: currentStatus.value,
          currentPlan: currentPlan.value
        })
      )
    }
  
    // // ** Custom Pagination
    const CustomPagination = () => {
      const count = Number(Math.ceil(store.total / rowsPerPage))
  
      return (
        <ReactPaginate
          previousLabel={''}
          nextLabel={''}
          pageCount={count || 1}
          activeClassName='active'
          forcePage={currentPage !== 0 ? currentPage - 1 : 0}
          onPageChange={page => handlePagination(page)}
          pageClassName={'page-item'}
          nextLinkClassName={'page-link'}
          nextClassName={'page-item next'}
          previousClassName={'page-item prev'}
          previousLinkClassName={'page-link'}
          pageLinkClassName={'page-link'}
          containerClassName={'pagination react-paginate justify-content-end my-2 pe-1'}
        />
      )
    }
  
    // // ** Table data to render
    const dataToRender = () => {
      const filters = {
        role: currentRole.value,
        currentPlan: currentPlan.value,
        status: currentStatus.value,
        q: searchTerm
      }
  
      const isFiltered = Object.keys(filters).some(function (k) {
        return filters[k].length > 0
      })
  
      if (store.data.length > 0) {
        return store.data
      } else if (store.data.length === 0 && isFiltered) {
        return []
      } else {
        return store.allData.slice(0, rowsPerPage)
      }
    }
  
    const handleSort = (column, sortDirection) => {
      setSort(sortDirection)
      setSortColumn(column.sortField)
      dispatch(
        getData({
          sort,
          sortColumn,
          q: searchTerm,
          page: currentPage,
          perPage: rowsPerPage,
          role: currentRole.value,
          status: currentStatus.value,
          currentPlan: currentPlan.value
        })
      )
    }
  const data=[  {newTitle:' سلام جیگر چطوری ', short:'در روزط هایه ک مسایل کشور ب دست',dislike:'2',position:'فعال', name:'mina' , email:'minaRezaee123@gmail.com'},
                {newTitle:' دوره کاملی بود ', short:'در روزط هایه ک مسایل کشور ب دست',dislike:'1',position:'غیر فعال', name:'mina' , email:'minaRezaee123@gmail.com'},
                {newTitle:' استاد کم لظفی میکرد جواب نمیداد', short:'در روزط هایه ک مسایل کشور ب دست',dislike:'6',position:'فعال', name:'mina' , email:'minaRezaee123@gmail.com'},]
                
  
  const columnn=[
    
    {
      name: 'نویسنده',
      sortable: true,
      minWidth: '300px',
      sortField: 'fullName',
      selector: row => row.text,
      cell: row => (
        <div className='d-flex justify-content-left align-items-center'>
          {/* {renderClient(row)} */}
          <Avatar img={pic} />
          <div className='d-flex flex-column'>
  
              <span className='fw-bolder'>{row.name}</span>
  
            <small className='text-truncate text-muted mb-0'>{row.email}</small>
          </div>
        </div>
      )
    },
    
    {
      name: ' عنوان خبر',
      sortable: true,
      minWidth: '172px',
      sortField: 'like',
      selector: row => row.newTitle
      // cell: row => renderRole(row)
    },
    {
      name: ' توضیحات کوتاه ',
      sortable: true,
      minWidth: '172px',
      sortField: 'disLike',
      selector: row => row.short,
      // cell: row => renderRole(row)
    },
    {
      name: ' وضعیت ',
      sortable: true,
      minWidth: '172px',
      sortField: 'position',
      selector: row => row.position,
      // cell: row => renderRole(row)
    },
    {
      name: 'دسترسی ها',
      minWidth: '100px',
      cell: row => (
        <div className='column-action'>
          <UncontrolledDropdown>
            <DropdownToggle tag='div' className='btn btn-sm'>
              <MoreVertical size={14} className='cursor-pointer' />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem
                // tag={Link}
                // className='w-100'
                // to={`/apps/user/view/${row.id}`}
                // onClick={() => store.dispatch(getUser(row.id))}
              >
                <FileText size={14} className='me-50' />
                <span className='align-middle'>  اطلاعات کاربر </span>
              </DropdownItem>
              <DropdownItem 
              // tag='a'
              //  href='/' 
              //  className='w-100'
              //   onClick={e => e.preventDefault()}
                >
                <CornerDownRight  size={14} className='me-50' />
                <span className='align-middle'> پاسخ دادن </span>
  
              </DropdownItem>
              <DropdownItem
              //   tag='a'
              //   href='/'
              //   className='w-100'
              //   onClick={e => {
              //     e.preventDefault()
              //     store.dispatch(deleteUser(row.id))
              //   }
              // }
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
    return (
      <Fragment>
  
        <Card>
          <CardHeader>
            <h2 tag='h2'>فیلتر</h2>
          </CardHeader>
          <CardBody>
            <Row>
              <Col md='4'>
                <h4 for='role-select'> وضعیت </h4>
                <Select
                  isClearable={false}
                  value={currentRole}
                  options={roleOptions}
                  className='react-select'
                  classNamePrefix='select'
                  theme={selectThemeColors}
                  onChange={data => {
                    setCurrentRole(data)
                    dispatch(
                      getData({
                        sort,
                        sortColumn,
                        q: searchTerm,
                        role: data.value,
                        page: currentPage,
                        perPage: rowsPerPage,
                        status: currentStatus.value,
                        currentPlan: currentPlan.value
                      })
                    )
                  }}
                />
              </Col>
             
              <Col md='4'>
                <h4 for='status-select'> دسته بندی خبر </h4>
                <Select
                  theme={selectThemeColors}
                  isClearable={false}
                  className='react-select'
                  classNamePrefix='select'
                  options={statusOptions}
                  value={currentStatus}
                  onChange={data => {
                    setCurrentStatus(data)
                    dispatch(
                      getData({
                        sort,
                        sortColumn,
                        q: searchTerm,
                        page: currentPage,
                        status: data.value,
                        perPage: rowsPerPage,
                        role: currentRole.value,
                        currentPlan: currentPlan.value
                      })
                    )
                  }}
                />
              </Col>
            </Row>
          </CardBody>
        </Card>
  
        <Card className='overflow-hidden'>
          
          <div className='react-dataTable position-relative'>
          <Col
            xl='6'
            className='d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column  position-relative start-50  '
          >
            <div className='d-flex align-items-center mb-sm-0 mb-1 me-1'>
              <label className='mb-0' htmlFor='search-invoice'>
                جستجو:
              </label>
              <Input
                id='search-invoice'
                className='ms-50 w-100'
                type='text'
                value={searchTerm}
                onChange={e => handleFilter(e.target.value)}
              />
            </div>
            <Button className='add-new-user' color='primary' onClick={() => setShow(true)}>
              اظافه کردن اخبار جدید
            </Button>
            <Modal isOpen={show} toggle={() => setShow(!show)} className='modal-dialog-centered modal-lg'>
                 <ModalHeader className='bg-transparent' toggle={() => setShow(!show)}></ModalHeader>
                  <ModalBody className='px-sm-5 pt-50 pb-5'>
                    <div className='text-center mb-2'>
                      <h1 className='mb-1'>    اظافه کردن اخبار  !!! </h1>
                      {/* <p> !!!با اپدیت کردن اطلاعات کاربر نسخه  قبلی پاک میشود </p> */}
                    </div>
                    <Form >
                      <Row className='gy-1 pt-75'>
                        
                        
                      
                        <Col md={6} xs={12}>
                          <Label className='form-label' for='billing-email'>
                          عنوان اخبار 
                          </Label>
                          <Input
                            type='email'
                            id='billing-email'
                            defaultValue={''}
                            placeholder=' فلان '
                          />
                        </Col>
                        <Col md={6} xs={12}>
                          <Label className='form-label' for='status'>
                              دسته بندی خبر
                          </Label>
                          <Select
                            id='status'
                            isClearable={false}
                            className='react-select'
                            classNamePrefix='select'
                            options={statusOptions}
                            theme={selectThemeColors}
                            // defaultValue={statusOptions[statusOptions.findIndex(i => i.value === selectedUser.status)]}
                          />
                        </Col>
                        <Col md={6} xs={12}>
                          <Label className='form-label' for='tax-id'>
                          نام نویسنده      
                          </Label>
                          <Input
                            id='tax-id'
                            placeholder='فلانی'
                            // defaultValue={selectedUser.contact.substr(selectedUser.contact.length - 4)}
                          />
                        </Col>
                        <Col md={6} xs={12}>
                          <Label className='form-label' for='contact'>
                          عنوان خبر
                          </Label>
                          <Input id='contact'
                          //  defaultValue={selectedUser.contact}
                          placeholder='ali123' />
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
  
            <div className='d-flex align-items-center table-header-actions'>
              <UncontrolledDropdown className='me-1'>
                
                
              </UncontrolledDropdown>
  
              
            </div>
          </Col>
         
            <DataTable
              noHeader
              
              sortServer
              pagination
              responsive
              paginationServer
              columns={columnn}
              // onSort={handleSort}
              // sortIcon={<ChevronDown />}
              className='react-dataTable'
              // paginationComponent={CustomPagination}
              data={data}
              // subHeaderComponent={
              //   <CustomHeader
              //     store={store}
              //     searchTerm={searchTerm}
              //     rowsPerPage={rowsPerPage}
              //     handleFilter={handleFilter}
              //     handlePerPage={handlePerPage}
              //     toggleSidebar={toggleSidebar}
              //   />
              // }
            />
          </div>
  
          
        </Card>
  
        {/* <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} /> */}
      </Fragment>
    )
}

export default Table