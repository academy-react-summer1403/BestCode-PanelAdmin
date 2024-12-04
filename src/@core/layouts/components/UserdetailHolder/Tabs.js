// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'

// ** Icons Imports
import { Users, Star, MessageSquare , DollarSign } from 'react-feather'

// ** User Components
import SecurityTab from './SecurityTab'
import Connections from './Connections'
import BillingPlanTab from './BillingTab'
import Notifications from './Notifications'
import TableBordered from './TableBordered'

const UserTabs = ({ active, toggleTab , data }) => {
  return (
    <Fragment>
      <Nav pills className='mb-2'>
        <NavItem>
          <NavLink active={active === '1'} onClick={() => toggleTab('1')}>
            <Users className='font-medium-3 me-50' />
            <span className='fw-bold'> دوره ها </span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '2'} onClick={() => toggleTab('2')}>
            <Star className='font-medium-3 me-50' />
            <span className='fw-bold'> دوره های فعال </span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '3'} onClick={() => toggleTab('3')}>
            <MessageSquare className='font-medium-3 me-50' />
            <span className='fw-bold'> کامنت ها </span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '4'} onClick={() => toggleTab('4')}>
            <DollarSign  className='font-medium-3 me-50' />
            <span className='fw-bold'> پرداختی ها </span>
          </NavLink>
        </NavItem>
        
      </Nav>
      <TabContent activeTab={active}>
        <TabPane tabId='1'>
        <TableBordered data={data} />
        </TabPane>
        <TabPane tabId='2'>
          <SecurityTab />
        </TabPane>
        <TabPane tabId='3'>
          <BillingPlanTab />
        </TabPane>
        <TabPane tabId='4'>
          <Notifications />
        </TabPane>
        <TabPane tabId='5'>
          <Connections />
        </TabPane>
      </TabContent>
    </Fragment>
  )
}
export default UserTabs
