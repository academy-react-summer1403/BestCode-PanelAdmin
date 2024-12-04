// ** Custom Components
import AvatarGroup from '@components/avatar-group'

// ** Images


// ** Icons Imports
import { MoreVertical, Edit, Trash } from 'react-feather'

// ** Reactstrap Imports
import { Table, Badge, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle, Button } from 'reactstrap'
import { getCourseId , GetGroupCourse , DeleteGroup} from '../../../core/services/api/usersmanager'
// import EditModalGroup  from '../../../../pages/ModalCourp/EditModalGroup'
// import ModalGroup from '../../../../pages/ModalCourp/ModalGroup'
import { useParams } from 'react-router-dom'
import { Fragment, useEffect, useState } from 'react'


const SecurityTab = () => {
  

  return (
    <Fragment >
         {/* <ModalGroup  isOpen={isModalOpen} toggleModal={toggleModal} CourseId={id} 
  
         /> */}
         <Button className='me-1 mb-4' color='primary' type='submit'
                // onClick={toggleModal}
         >
               افزودن گروه
         </Button>
      <Table bordered responsive>
    <thead>
      <tr>
        <th>نام گروه</th>
        <th>نام استاد</th>
        <th>ظرفیت گروه</th>
        <th>نام دوره</th>
        <th></th>
      </tr>
    </thead>
    {/* <tbody>
      {result.length > 0 &&
       <>
       {result.map((item, index) =>(
         <tr>
        <td>
          <span className='align-middle fw-bold'> {item.groupName} </span>
        </td>
        <td> {item.teacherName}</td>
       
        <td>
            {item.groupCapacity}
        </td>
        <td>
           {item.courseName}
        </td>
        <td>
        <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu>
               
              
              
                <DropdownItem 
                  onClick={async (e) => {
                    e.preventDefault()
                    const data = new FormData()
                    data.append('Id', item.id)
                    const response = await DeleteGroup(data)
                    if(response.success === true){
                    toast.success(' حذف انجام شد ')
                    refetchCourse()
                    }
                }}
                
                
                >
                  <Trash className='me-50' size={15} /> <span className='align-middle'>حذف </span>
                </DropdownItem>
                <DropdownItem 
               onClick={() => toggleModal2(item.groupId)}
                
                
                >
                  <Edit className='me-50' size={15} /> <span className='align-middle'>ویرایش</span>
                  <EditModalGroup  isOpen={editingGroupId === item.groupId} toggleModal={() => toggleModal2(item.groupId)} CourseId={id}
                   GroupId={item.groupId} GroupName={item.groupName} GroupCapacity={item.groupCapacity} />
                </DropdownItem>
              </DropdownMenu>
               
            </UncontrolledDropdown>
        </td>
      </tr>
    ))}
      </>
      }
    
 
   
  
    </tbody> */}
      </Table>
  </Fragment>
  )
}

export default SecurityTab
