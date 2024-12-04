// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'

// ** Icons Imports
import { Users, Star, MessageSquare , DollarSign } from 'react-feather'

// ** User Components
import SecurityTab from './SecurityTab.js'
import Notifications from './Notifications.js'
import Comments from './Comments.js'
import NewsFile from './NewsFile.js'

const UserTabs = ({ active, toggleTab , id , refetch}) => {
  return (
    <Fragment>
      <Nav pills className='mb-2'>
        <NavItem>
          <NavLink active={active === '1'} onClick={() => toggleTab('1')}>
            <Users className='font-medium-3 me-50' />
            <span className='fw-bold'> نظرات</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '2'} onClick={() => toggleTab('2')}>
            <Star className='font-medium-3 me-50' />
            <span className='fw-bold'> فایل ها</span>
          </NavLink>
        </NavItem>
     
   
        
      </Nav>
      <TabContent activeTab={active}>
        <TabPane tabId='1'>
        <Comments id={id} />
        </TabPane>
        <TabPane tabId='2'>
                <NewsFile id={id} refetchB={refetch} />

        </TabPane>
      
      
        
      </TabContent>
    </Fragment>
  )
}
export default UserTabs
