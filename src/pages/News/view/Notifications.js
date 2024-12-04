// ** Custom Components
import AvatarGroup from '@components/avatar-group'

// ** Images

import { useQuery } from '@tanstack/react-query'

// ** Icons Imports
import { MoreVertical, Edit, Trash } from 'react-feather'
import toast from 'react-hot-toast'

// ** Reactstrap Imports
import { Table, Badge, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'

import { useParams } from 'react-router-dom'
import { Fragment, useEffect, useState } from 'react'

const Notifications = () => {
  // const [getid , setGetId] = useState([])
  // const [result, setResult] = useState([])
  // const {id} = useParams()
  // const GetCourseID2 = async () => {
  //   const data = await getCourseId(id)
  //   setGetId(data)
  // }
  
  // const id2 = getid.courseId || []

  // const getUseList = async () => {
  //   const data1 =  await GetCoursePayments(id2)
  //   setResult(data1)
  // }
  // const [currentPage, setCurrentPage] = useState(1); 
  // const itemsPerPage = 5; 

  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = result.slice(indexOfFirstItem, indexOfLastItem);

  // const paginate = (pageNumber) => setCurrentPage(pageNumber);
  


  
  return (
    <Fragment >
    <Table bordered responsive>
      <thead>
        <tr>
          <th>عنوان</th>
          <th> شناسه ی پرداخت</th>
          <th> نام کاربر</th>
          <th> وضعیت</th>
          <th>قیمت</th>
          <th></th>
        </tr>
      </thead>
      {/* <tbody>
        {result.length > 0 && (<>
        {currentItems.map((item ,index) =>(
        <tr>
          <td>
            <img className='me-75' src={item.paymentInvoiceImage} alt='angular' height='20' width='20' />
            <span className='align-middle fw-bold  ' > {item.title} </span>
          </td>
          <td> {item.paymentInvoiceNumber}</td>
         
          <td>
             <span className='align-middle fw-bold'>
               {item.studentName}
             </span>
          </td>
          <td>
           <Badge pill color={item.accept ? 'light-success' : 'light-danger'} className='me-1'>
               {item.accept? 'تایید شده' : 'تایید نشده'}
           </Badge>
       
          </td>
          <td>
            <span className='align-middle fw-bold'>
                   {item.paid}
            </span>
          </td>
          <td>
            <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu>
                {item.accept === false &&
                <DropdownItem 
                tag='a'

                onClick={async () => {
                  const data = new FormData();
                  data.append('PaymentId', item.id);
              
                  const response = await AcceptCoursePayments(data);
                  if (response.success === true) {
                    toast.success('عملیات انجام شد');
                    refetchCourse();
                  }
                }}
                
                
                >
                  <Edit className='me-50' size={15} /> <span className='align-middle'> تایید کردن</span>
                </DropdownItem>
                }
                <DropdownItem href='/'
                  onClick={async (e) => {
                    e.preventDefault()
                    const data = new FormData()
                    data.append('PaymentId', item.id)
                    const response = await DeleteCoursePayments(data)
                    if(response.success === true){
                    toast.success(' حذف انجام شد ')
                    refetchCourse()
                    }
                }}
                
                
                >
                  <Trash className='me-50' size={15} /> <span className='align-middle'>حذف </span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
      ))}
     </>)}
     
      </tbody> */}
     
    </Table>
    <nav>
        {/* <ul className="pagination justify-content-center">
          {Array.from({ length: Math.ceil(result.length / itemsPerPage) }, (_, index) => (
            <li
              key={index}
              className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
              onClick={() => paginate(index + 1)}
            >
              <button className="page-link">{index + 1}</button>
            </li>
          ))}
        </ul> */}
      </nav>
    </Fragment>
  )
}

export default Notifications
