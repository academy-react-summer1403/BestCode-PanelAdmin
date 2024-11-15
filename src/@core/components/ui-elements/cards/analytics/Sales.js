// ** Third Party Components
import Chart from 'react-apexcharts'
import { MoreVertical, Circle } from 'react-feather'

// ** Reactstrap Imports
import {
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

const Sales = props => {
  const options = {
      chart: {
        height: 300,
        type: 'radar',
        dropShadow: {
          enabled: true,
          blur: 8,
          left: 1,
          top: 1,
          opacity: 0.2
        },
        toolbar: {
          show: false
        },
        offsetY: 5
      },
      stroke: {
        width: 0
      },
      dataLabels: {
        background: {
          foreColor: ['#ebe9f1']
        }
      },
      legend: { show: false },
      colors: [props.primary, props.info],
      plotOptions: {
        radar: {
          polygons: {
            strokeColors: ['#ebe9f1', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent'],
            connectorColors: 'transparent'
          }
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: [props.primary, props.info],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100]
        }
      },
      labels: ['React.js', 'Node.js', 'Angolar', 'Next.js', 'HTML', 'css'],
      markers: {
        size: 0
      },
      yaxis: {
        show: false
      },
      grid: {
        show: false,
        padding: {
          bottom: -27
        }
      }
    },
    series = [
      {
        name: 'Sales',
        data: [90, 50, 86, 40, 100, 20]
      },
      {
        name: 'Visit',
        data: [70, 75, 70, 76, 20, 85]
      }
    ]
  return (
    <Card>
      <CardHeader className='d-flex justify-content-between align-items-start pb-1'>
        <div>
          <CardTitle className='mb-25 h2' tag='h4'>
            پر فروش ترین دوره ها
          </CardTitle>
          <CardText> 6 ماه اخیر </CardText>
        </div>

        <UncontrolledDropdown className='chart-dropdown'>
          <DropdownToggle color='' className='bg-transparent btn-sm border-0 p-50'>
            <MoreVertical size={18} className='cursor-pointer' />
          </DropdownToggle>
          <DropdownMenu end>
            <DropdownItem className='w-100'>28 روز اخیر</DropdownItem>
            <DropdownItem className='w-100'>ماه اخیر</DropdownItem>
            <DropdownItem className='w-100'>سال قبل</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </CardHeader>

      <CardBody>
        <div className='d-inline-block me-1'>
          <div className='d-flex align-items-center'>
            <Circle size={13} className='text-primary me-50' />
            <h6 className='mb-0'>فروش</h6>
          </div>
        </div>
        <div className='d-inline-block'>
          <div className='d-flex align-items-center'>
            <Circle size={13} className='text-info me-50' />
            <h6 className='mb-0'>بازدید</h6>
          </div>
        </div>
        <Chart options={options} series={series} type='radar' height={300} />
      </CardBody>
    </Card>
  )
}
export default Sales
