// ** Custom Components
import AvatarGroup from '@components/avatar-group'

// ** Images
import react from '../../../../assets/images/avatars/1-small.png'
import vuejs from '../../../../assets/images/avatars/2-small.png'
import angular from '../../../../assets/images/avatars/3-small.png'
import bootstrap from '../../../../assets/images/avatars/4-small.png'
import avatar1 from '../../../../assets/images/avatars/5-small.png'
import avatar2 from '../../../../assets/images/avatars/6-small.png'
import avatar3 from '../../../../assets/images/avatars/7-small.png'

// ** Icons Imports
import { MoreVertical, Edit, Trash } from 'react-feather'

// ** Reactstrap Imports
import { Table, Badge, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'

const BillingTab = () => {
  return (
    <Table bordered responsive>
      <thead>
        <tr>
          <th> دانشجویان </th>
          <th> کامنت </th>
          <th> وضعیت </th>
          <th> تنظیمات </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img className='me-75' src={vuejs} alt='angular' height='20' width='20' />
            <span className='align-middle fw-bold'> آرش غفاری چراتی  </span>
          </td>
          <td> خسرو جون دوست داریم </td>
         
          <td>
            <Badge pill color='light-success' className='me-1'>
              تایید شده
            </Badge>
          </td>
          <td>
            <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Edit className='me-50' size={15} /> <span className='align-middle'> اطلاعات کاربر </span>
                </DropdownItem>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Trash className='me-50' size={15} /> <span className='align-middle'> حدف از دوره </span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
        <tr>
          <td>
            <img className='me-75' src={angular} alt='react' height='20' width='20' />
            <span className='align-middle fw-bold'>ایلیا غلامی</span>
          </td>
          <td> سلام دوستان در بحث HTML مباحث جالب است  </td>
          
          <td>
            <Badge pill color='light-success' className='me-1'>
              تایید
            </Badge>
          </td>
          <td>
            <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Edit className='me-50' size={15} /> <span className='align-middle'> اطلاعات کاربر </span>
                </DropdownItem>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Trash className='me-50' size={15} /> <span className='align-middle'> حدف از دوره </span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
        <tr>
          <td>
            <img className='me-75' src={avatar1} alt='vuejs' height='20' width='20' />
            <span className='align-middle fw-bold'> رضا حسن زاده </span>
          </td>
          <td> می گد پرع گتنه عباس سه جن دار </td>
          
          <td>
            <Badge pill color='light-warning' className='me-1'>
              تایید نشده
            </Badge>
          </td>
          <td>
            <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Edit className='me-50' size={15} /> <span className='align-middle'>اطلاعات کاربر </span>
                </DropdownItem>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Trash className='me-50' size={15} /> <span className='align-middle'> حدف از دوره </span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
        <tr>
          <td>
            <img className='me-75' src={avatar3} alt='vuejs' height='20' width='20' />
            <span className='align-middle fw-bold'> محمد رضا رحیمی اسبووووو</span>
          </td>
          <td> همه می پر سر قسم خرننه </td>
          
          <td>
            <Badge pill color='light-warning' className='me-1'>
              جوکیییی
            </Badge>
          </td>
          <td>
            <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Edit className='me-50' size={15} /> <span className='align-middle'>اطلاعات کاربر </span>
                </DropdownItem>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Trash className='me-50' size={15} /> <span className='align-middle'> حدف از دوره </span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
        <tr>
          <td>
            <img className='me-75' src={vuejs} alt='angular' height='20' width='20' />
            <span className='align-middle fw-bold'> آرش غفاری چراتی  </span>
          </td>
          <td> خسرو جون دوست داریم </td>
         
          <td>
            <Badge pill color='light-success' className='me-1'>
              تایید شده
            </Badge>
          </td>
          <td>
            <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Edit className='me-50' size={15} /> <span className='align-middle'> اطلاعات کاربر </span>
                </DropdownItem>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Trash className='me-50' size={15} /> <span className='align-middle'> حدف از دوره </span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
        <tr>
          <td>
            <img className='me-75' src={angular} alt='react' height='20' width='20' />
            <span className='align-middle fw-bold'>ایلیا غلامی</span>
          </td>
          <td> سلام دوستان در بحث HTML مباحث جالب است  </td>
          
          <td>
            <Badge pill color='light-success' className='me-1'>
              تایید
            </Badge>
          </td>
          <td>
            <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Edit className='me-50' size={15} /> <span className='align-middle'> اطلاعات کاربر </span>
                </DropdownItem>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Trash className='me-50' size={15} /> <span className='align-middle'> حدف از دوره </span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
        <tr>
          <td>
            <img className='me-75' src={avatar1} alt='vuejs' height='20' width='20' />
            <span className='align-middle fw-bold'> رضا حسن زاده </span>
          </td>
          <td> می گد پرع گتنه عباس سه جن دار </td>
          
          <td>
            <Badge pill color='light-warning' className='me-1'>
              تایید نشده
            </Badge>
          </td>
          <td>
            <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Edit className='me-50' size={15} /> <span className='align-middle'>اطلاعات کاربر </span>
                </DropdownItem>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Trash className='me-50' size={15} /> <span className='align-middle'> حدف از دوره </span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
        <tr>
          <td>
            <img className='me-75' src={avatar3} alt='vuejs' height='20' width='20' />
            <span className='align-middle fw-bold'> محمد رضا رحیمی اسبووووو</span>
          </td>
          <td> همه می پر سر قسم خرننه </td>
          
          <td>
            <Badge pill color='light-warning' className='me-1'>
              جوکیییی
            </Badge>
          </td>
          <td>
            <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Edit className='me-50' size={15} /> <span className='align-middle'>اطلاعات کاربر </span>
                </DropdownItem>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Trash className='me-50' size={15} /> <span className='align-middle'> حدف از دوره </span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
      </tbody>
    </Table>
  )
}

export default BillingTab
