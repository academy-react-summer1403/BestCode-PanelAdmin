// ** React Imports
import { Fragment } from 'react'

// ** Third Party Components
import Select from 'react-select'
import { ArrowLeft, ArrowRight } from 'react-feather'

// ** Utils
import { selectThemeColors } from '@utils'

// ** Reactstrap Imports
import { Label, Row, Col, Form, Input, Button } from 'reactstrap'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'

const PersonalInfo = ({ stepper, type }) => {
  const countryOptions = [
    { value: 'UK', label: 'UK' },
    { value: 'USA', label: 'USA' },
    { value: 'Spain', label: 'Spain' },
    { value: 'France', label: 'France' },
    { value: 'Italy', label: 'Italy' },
    { value: 'Australia', label: 'Australia' }
  ]

  const languageOptions = [
    { value: 'English', label: 'English' },
    { value: 'French', label: 'French' },
    { value: 'Spanish', label: 'Spanish' },
    { value: 'Italian', label: 'Italian' },
    { value: 'Japanese', label: 'Japanese' }
  ]

  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'> اطلاعات استاد </h5>
        <small> اطلاعات استاد دوره</small>
      </div>
      <Form onSubmit={e => e.preventDefault()}>
        <Row className='d-flex flex-column'>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for={`first-name-${type}`}>
              نام استاد
            </Label>
            <Input type='text' name='first-name' id={`first-name-${type}`} />
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for={`last-name-${type}`}>
              نام خوانوادگی استاد
            </Label>
            <Input type='text' name='last-name' id={`last-name-${type}`}  />
          </Col>
        </Row >
        <Row className='d-flex flex-column'>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for={`country-${type}`}>
             رزومه استاد
            </Label>
            <Input type='text' name='last-name' id={`last-name-${type}`}  />

          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for={`language-${type}`}>
              نام کاربری استاد
            </Label>
            <Input type='text' name='last-name' id={`last-name-${type}`}  />

          </Col>
        </Row>
        <div className='d-flex justify-content-between'>
          <Button color='primary' className='btn-prev' onClick={() => stepper.previous()}>
            <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'> قبلی </span>
          </Button>
          <Button color='primary' className='btn-next' onClick={() => stepper.next()}>
            <span className='align-middle d-sm-inline-block d-none'>بعدی</span>
            <ArrowRight size={14} className='align-middle ms-sm-25 ms-0'></ArrowRight>
          </Button>
        </div>
      </Form>
    </Fragment>
  )
}

export default PersonalInfo
