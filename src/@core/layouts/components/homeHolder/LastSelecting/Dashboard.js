import React from 'react'
import { useContext } from 'react'
import { Row, Col } from 'reactstrap'
import { ThemeColors } from '../../../../../utility/context/ThemeColors'


import CardBrowserState from '../../../../components/ui-elements/cards/advance/CardBrowserState'
import CardMedal from '../../../../components/ui-elements/cards/advance/CardMedal'
import StatsCard from '../../../../components/ui-elements/cards/statistics/StatsCard'
import Sales from '../../../../components/ui-elements/cards/analytics/Sales'
import GoalOverview from '../../../../components/ui-elements/cards/analytics/GoalOverview'
import SupportTracker from '../../../../components/ui-elements/cards/analytics/SupportTracker'
import AvgSessions from '../../../../components/ui-elements/cards/analytics/AvgSessions'


const Dashboard = () => {
 
 
    const { colors } = useContext(ThemeColors)

    const trackBgColor = '#e9ecef'


    return (
    <>
        <div id='dashboard'>
      
     
      <Row className='match-height'>
       
        
        <Col xl='4' md='6' xs='12'>
           <CardMedal /> 
        </Col>
        <Col xl='8' md='6' xs='12'>
          <StatsCard cols={{ xl: '3', sm: '6' }} />
        </Col>
       
      </Row>

      <Row className='match-height'>
        <Col lg='6' xs='12'>
          <AvgSessions primary={colors.primary.main} />
        </Col>
        <Col lg='6' xs='12'>
          <SupportTracker primary={colors.primary.main} danger={colors.danger.main} />
        </Col>
      </Row>


      <Row className='match-height'>
       
       <Col lg='4' md='6' xs='12'>
         <Sales primary={colors.primary.main} info={colors.info.main} />
       </Col>

       <Col lg='4' xs='12'>
          <GoalOverview />
        </Col>
        
        <Col lg='4' md='6' xs='12'>
          <CardBrowserState colors={colors} trackBgColor={trackBgColor} />
        </Col>
       
      
     </Row>
       
    </div>
    </>
  )
}

export default Dashboard