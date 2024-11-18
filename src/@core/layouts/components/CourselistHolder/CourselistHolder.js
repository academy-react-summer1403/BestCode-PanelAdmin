import React from 'react'
import {useState} from "react";
import StatsHorizontal from '@components/widgets/stats/StatsHorizontal'
import TableHover from './TableHover';
import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select'


import {Row,Col,Card,CardBody,CardHeader} from 'reactstrap'

import { User, UserPlus, UserCheck, UserX } from 'react-feather'
import '@styles/react/apps/app-users.scss'

import { selectThemeColors } from '@utils'


const CourselistHolder = () => {


    const dispatch = useDispatch()
    const store = useSelector(state => state.users)
  
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
  
    
    const roleOptions = [
      { value: '', label: ' انتخاب کنید...' },
      { value: 'React.js', label: 'React.js' },
      { value: 'Next.js', label: 'Next.js' },
      { value: 'Angolar', label: 'Angolar' },
      
    ]
  
    const planOptions = [
      { value: '', label: ' انتخاب کنید...' },
      { value: 'فعال', label: 'فعال' },
      { value: 'غیرفعال', label: 'غیرفعال' },
      { value: 'تمام شده', label: 'تمام شده' },

    ]
  
    const statusOptions = [
      { value: '', label: ' انتخاب کنید...' },
      { value: 'جدید ترین', label: 'جدید ترین', number: 1 },
      { value: 'قدیمی ترین ', label: 'قدیمی ترین ', number: 2 },
      { value: 'محبوب ترین ', label: ' محبوب ترین ', number: 3 }
    ]
  
    

  return (
    
     
     
    <div className='app-user-list'>
   
      <Row>
        <Col lg='3' sm='6'>
          <StatsHorizontal
            color='primary'
            statTitle=' جمع کاربران '
            icon={<User size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>21,459</h3>}
          />
        </Col>
        <Col lg='3' sm='6'>
          <StatsHorizontal
            color='danger'
            statTitle=' کاربران جدید این ماه '
            icon={<UserPlus size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>4,567</h3>}
          />
        </Col>
        <Col lg='3' sm='6'>
          <StatsHorizontal
            color='success'
            statTitle=' کاربران فعال '
            icon={<UserCheck size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>19,860</h3>}
          />
        </Col>
        <Col lg='3' sm='6'>
          <StatsHorizontal
            color='warning'
            statTitle=' کاربران بلاک شده '
            icon={<UserX size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>237</h3>}
          />
        </Col>
      </Row>
      <Card>
        <CardHeader>
          <h2 tag='h2'>فیلتر</h2>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md='4'>
              <h4 for='role-select'>نوع دوره</h4>
              <Select
                isClearable={false}
                value={currentRole}
                options={roleOptions}
                className='react-select'
                classNamePrefix='select'
                theme={selectThemeColors}
               
              />
            </Col>
            <Col className='my-md-0 my-1' md='4'>
              <h4 for='plan-select'>وضعیت</h4>
              <Select
                theme={selectThemeColors}
                isClearable={false}
                className='react-select'
                classNamePrefix='select'
                options={planOptions}
                value={currentPlan}
                
              />
            </Col>
            <Col md='4'>
              <h4 for='status-select'>مرتب سازی بر اساس</h4>
              <Select
                theme={selectThemeColors}
                isClearable={false}
                className='react-select'
                classNamePrefix='select'
                options={statusOptions}
                value={currentStatus}
                
              />
            </Col>
          </Row>
        </CardBody>
      </Card>
      <TableHover/>
      
      
    </div>
     
  )
}

export default CourselistHolder