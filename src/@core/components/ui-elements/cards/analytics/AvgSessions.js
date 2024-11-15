// ** React Imports
import { useEffect, useState } from 'react'

// ** Third Party Components
import axios from 'axios'
import Chart from 'react-apexcharts'

// ** Utils
import { kFormatter } from '@utils'

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  Button,
  CardBody,
  CardText,
  Progress,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown
} from 'reactstrap'

const AvgSessions = props => {
  // ** States
 
  const options = {
      chart: {
        sparkline: { enabled: true },
        toolbar: { show: false }
      },
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0
        }
      },
      states: {
        hover: {
          filter: 'none'
        }
      },
      colors: ['#ebf0f7', '#ebf0f7', props.primary, '#ebf0f7', '#ebf0f7', '#ebf0f7'],
      plotOptions: {
        bar: {
          columnWidth: '40%',
          distributed: true,
          borderRadius: 8,
          borderRadiusApplication: 'end'
        }
      },
      tooltip: {
        x: { show: false }
      },
      xaxis: {
        type: 'numeric'
      }
    },
    series = [
      {
        name: 'Sessions',
        data: [75, 125, 225, 175, 125, 75, 25]
      }
    ]

  return  (
    <Card>
      <CardBody>
        <Row className='pb-50'>
          <Col
            sm={{ size: 6, order: 1 }}
            xs={{ order: 2 }}
            className='d-flex justify-content-between flex-column mt-lg-0 mt-2'
          >
            <div className='session-info mb-1 mb-lg-0'>
              <h2 className='fw-bold mb-25'> آخرین آمار چهار دوره برتر </h2>
              {/* <CardText className='fw-bold mb-2'>Avg Sessions</CardText> */}
              <h5 className='font-medium-2'>
                {/* <span className='text-success me-50'>{'salam'}</span> */}
                <span className='font-small' size={10}> بر اساس تعداد کاربران جذب شده </span>
              </h5>
            </div>
            {/* <Button color='primary'>View Details</Button> */}
          </Col>
          <Col
            sm={{ size: 6, order: 2 }}
            xs={{ order: 1 }}
            className='d-flex justify-content-between flex-column text-end'
          >
            <UncontrolledDropdown className='chart-dropdown'>
              <DropdownToggle color='' className='bg-transparent btn-sm border-0 p-50'>
              در 7 روز گدشته 
              </DropdownToggle>
              <DropdownMenu end>
                  <DropdownItem className='w-100' >
                    123
                  </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <Chart options={options} series={series} type='bar' height={200} />
          </Col>
        </Row>
        <hr />
        <Row className='pt-50'>
          <Col className='mb-2' md='6' sm='12'>
            <p className='mb-50'>React.js: {'616'}</p>
            <Progress className='avg-session-progress mt-25' value='80' />
          </Col>
          <Col className='mb-2' md='6' sm='12'>
            <p className='mb-50'>Next.js: {'434'}</p>
            <Progress className='avg-session-progress progress-bar-warning mt-25' value='60' />
          </Col>
          <Col md='6' sm='12'>
            <p className='mb-50'>Node.js: {'150'}</p>
            <Progress className='avg-session-progress progress-bar-danger mt-25' value='25' />
          </Col>
          <Col md='6' sm='12'>
            <p className='mb-50'>HTML/css: {'300'}</p>
            <Progress className='avg-session-progress progress-bar-success mt-25' value='45' />
          </Col>
        </Row>
      </CardBody>
    </Card>
  ) 
}
export default AvgSessions
