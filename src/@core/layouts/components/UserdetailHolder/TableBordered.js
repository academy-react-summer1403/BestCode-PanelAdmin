// ** Custom Components
import AvatarGroup from '@components/avatar-group'

// ** Images
import react from '@src/assets/images/icons/react.svg'
import vuejs from '@src/assets/images/icons/vuejs.svg'
import angular from '@src/assets/images/icons/angular.svg'
import bootstrap from '@src/assets/images/icons/bootstrap.svg'
import avatar1 from '@src/assets/images/portrait/small/avatar-s-5.jpg'
import avatar2 from '@src/assets/images/portrait/small/avatar-s-6.jpg'
import avatar3 from '@src/assets/images/portrait/small/avatar-s-7.jpg'

// ** Icons Imports
import { MoreVertical, Edit, Trash } from 'react-feather'

// ** Reactstrap Imports
import { Table, Badge, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'

const avatarGroupData1 = [
  {
    title: 'Leslie',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Quinn',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Quinn',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData2 = [
  {
    title: 'Felicia',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Brent',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Patricia',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData3 = [
  {
    title: 'Breanna',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Peter',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Cherokee',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData4 = [
  {
    title: 'Martina',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Butcher',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Noel',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const TableBordered = ({data}) => {
  console.log(data)
  return (
    <Table bordered responsive>
      <thead>
        <tr>
          <th> دوره ها </th>
          <th> کاربران دوره </th>
          <th> وضعیت </th>
          <th> تنظیمات </th>
        </tr>
      </thead>
      <tbody>
      {data?.courses?.length > 0 && (
        <>
       {data?.courses.map((item, index) => (
        <tr>
          <td>
            <img className='me-75' src={item.tumbImageAddress} alt='angular' height='20' width='20' />
            <span className='align-middle fw-bold'>{item.title}</span>
          </td>
          <td>
            <AvatarGroup data={avatarGroupData1} />
          </td>
          <td>
            <Badge pill color='light-primary' className='me-1'>
              درحال برگزاری
            </Badge>
          </td>
          <td>
            <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Edit className='me-50' size={15} /> <span className='align-middle'> تنظیمات </span>
                </DropdownItem>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Trash className='me-50' size={15} /> <span className='align-middle'> حدف از دوره </span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
      ))} 
      </>
    )}
       
      </tbody>
    </Table>
  )
}

export default TableBordered
