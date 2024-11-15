// ** React Imports
import { useEffect, useState } from 'react'

// ** Third Party Components
import axios from 'axios'
import Chart from 'react-apexcharts'

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardHeader,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown
} from 'reactstrap'

const SupportTracker = props => {
  // ** State
  // const [data, setData] = useState(null)

  // useEffect(() => {
  //   axios.get('/card/card-analytics/support-tracker').then(res => setData(res.data))
  //   return () => setData(null)
  // }, [])

  const options = {
      plotOptions: {
        radialBar: {
          size: 150,
          offsetY: 20,
          startAngle: -150,
          endAngle: 150,
          hollow: {
            size: '65%'
          },
          track: {
            background: '#fff',
            strokeWidth: '100%'
          },
          dataLabels: {
            name: {
              offsetY: -5,
              fontFamily: 'Montserrat',
              fontSize: '1rem'
            },
            value: {
              offsetY: 15,
              fontFamily: 'Montserrat',
              fontSize: '1.714rem'
            }
          }
        }
      },
      colors: [props.danger],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: [props.primary],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      stroke: {
        dashArray: 8
      },
      labels: [' کاربران ورودی جدید ']
    },
    series = [65]

  return  (
    <Card>
      <CardHeader className='pb-0'>
        <CardTitle tag='h4'>{' پرظرفدار ترین دوره '}</CardTitle>
        <UncontrolledDropdown className='chart-dropdown'>
          <DropdownToggle color='' className='bg-transparent btn-sm border-0 p-50'>
           در 7 روز گدشته
          </DropdownToggle>
          <DropdownMenu end>
           
              <DropdownItem className='w-100' >
                {'l,km'}
              </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </CardHeader>
      <CardBody>
        <Row>
          <Col sm='2' className='d-flex flex-column flex-wrap text-center'>
            <h1 className=' fw-bolder mt-2 mb-0'>{'React.js'}</h1>
            <CardText>دوره</CardText>
          </Col>
          <Col sm='10' className='d-flex justify-content-center'>
            <Chart options={options} series={series} type='radialBar' height={270} id='support-tracker-card' />
          </Col>
        </Row>
        <div className='d-flex justify-content-between mt-1'>
          <div className='text-center'>
            <CardText className='mb-50'>کاربران جدید</CardText>
            <span className='font-large-1 fw-bold'>{'616'}</span>
          </div>
          <div className='text-center'>
            <CardText className='mb-50'>کاربران قدیمی</CardText>
            <span className='font-large-1 fw-bold'>{'123'}</span>
          </div>
          <div className='text-center'>
            <CardText className='mb-50'>تاریخ پایان دوره</CardText>
            <span className='font-large-1 fw-bold'>{'1403/9/10'}</span>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
export default SupportTracker
