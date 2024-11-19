// ** React Imports
import { useState, Fragment } from 'react'

// ** Reactstrap Imports
import { Row, Col, Card, Form, CardBody, Button, Badge, Modal, Input, Label, ModalBody, ModalHeader } from 'reactstrap'

// ** Third Party Components
import Swal from 'sweetalert2'
import Select from 'react-select'
import { Check, Briefcase, X } from 'react-feather'
import { useForm, Controller } from 'react-hook-form'
import withReactContent from 'sweetalert2-react-content'
import baner from '../../../../assets/images/banner/upgrade.png'



// ** Custom Components
import Avatar from '@components/avatar'

// ** Utils
import { selectThemeColors } from '@utils'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'

const roleColors = {
  editor: 'light-info',
  admin: 'light-danger',
  author: 'light-warning',
  maintainer: 'light-success',
  subscriber: 'light-primary'
}

const statusColors = {
  active: 'light-success',
  pending: 'light-warning',
  inactive: 'light-secondary'
}

const statusOptions = [
  { value: 'active', label: ' فعال ' },
  { value: 'inactive', label: ' غیر فعال ' },
  { value: 'suspended', label: 'درحال عضو گیری' }
]

const countryOptions = [
  { value: 'uk', label: 'UK' },
  { value: 'usa', label: 'USA' },
  { value: 'france', label: 'France' },
  { value: 'russia', label: 'Russia' },
  { value: 'canada', label: 'Canada' }
]

const languageOptions = [
  { value: 'english', label: 'English' },
  { value: 'spanish', label: 'Spanish' },
  { value: 'french', label: 'French' },
  { value: 'german', label: 'German' },
  { value: 'dutch', label: 'Dutch' }
]

const MySwal = withReactContent(Swal)

const UserInfoCard = ({ selectedUser }) => {
  // ** State
  const [show, setShow] = useState(false)

  // ** Hook
  // const {
  //   reset,
  //   control,
  //   setError,
  //   handleSubmit,
  //   formState: { errors }
  // } = useForm({
  //   defaultValues: {
  //     username: selectedUser.username,
  //     lastName: selectedUser.fullName.split(' ')[1],
  //     firstName: selectedUser.fullName.split(' ')[0]
  //   }
  // })

  // ** render user img
  const renderUserImg = () => {
    if (selectedUser !== null && selectedUser.avatar.length) {
      return (
        <img
          height='110'
          width='110'
          alt='user-avatar'
          src={selectedUser.avatar}
          className='img-fluid rounded mt-3 mb-2'
        />
      )
    } else {
      return (
        <Avatar
          initials
          color={selectedUser.avatarColor || 'light-primary'}
          className='rounded mt-3 mb-2'
          content={selectedUser.fullName}
          contentStyles={{
            borderRadius: 0,
            fontSize: 'calc(48px)',
            width: '100%',
            height: '100%'
          }}
          style={{
            height: '110px',
            width: '110px'
          }}
        />
      )
    }
  }

  const onSubmit = data => {
    if (Object.values(data).every(field => field.length > 0)) {
      setShow(false)
    } else {
      for (const key in data) {
        if (data[key].length === 0) {
          setError(key, {
            type: 'manual'
          })
        }
      }
    }
  }

  const handleReset = () => {
    reset({
      username: selectedUser.username,
      lastName: selectedUser.fullName.split(' ')[1],
      firstName: selectedUser.fullName.split(' ')[0]
    })
  }

  const handleSuspendedClick = () => {
    return MySwal.fire({
      title: 'آیا مطمعنی?',
      text: "حذف بشه دیگع برگشت نداره ها!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'بله , دوره پاک شود',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-outline-danger ms-1'
      },
      buttonsStyling: false
    }).then(function (result) {
      if (result.value) {
        MySwal.fire({
          icon: ' حذف شد ',
          title: 'نون استادش آجر شد!',
          text: 'دوره با موفیت حدف شد',
          customClass: {
            confirmButton: 'btn btn-success'
          }
        })
      } else if (result.dismiss === MySwal.DismissReason.cancel) {
        MySwal.fire({
          title: 'کنسل شد',
          text: 'آفرین جیگر :)',
          icon: 'error',
          customClass: {
            confirmButton: 'btn btn-success'
          }
        })
      }
    })
  }

  return (
    <Fragment>
      <Card>
        <CardBody>
          <div className='user-avatar-section'>
            <div className='d-flex align-items-center flex-column'>
              <img className='w-50' src={baner} alt="" />
              <div className='d-flex flex-column align-items-center text-center'>
                <div className='user-info'>
                  <h4> دوره اموزشی HTML </h4>
                  {/* {selectedUser !== null ? (
                    <Badge color={roleColors[selectedUser.role]} className='text-capitalize'>
                      {selectedUser.role}
                    </Badge> 
                  ) : null} */}
                </div>
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-around my-2 pt-75'>
            <div className='d-flex align-items-start me-2'>
              <Badge color='light-primary' className='rounded p-75'>
                <Check className='font-medium-2' />
              </Badge>
              <div className='ms-75'>
                <h4 className='mb-0'>100</h4>
                <small> دانشجویان </small>
              </div>
            </div>
            <div className='d-flex align-items-start'>
              <Badge color='light-primary' className='rounded p-75'>
                <Briefcase className='font-medium-2' />
              </Badge>
              <div className='ms-75'>
                <h4 className='mb-0'>21</h4>
                <small> ویدیو های آموزشی </small>
              </div>
            </div>
          </div>
          <h4 className='fw-bolder border-bottom pb-50 mb-1'>اطلاعات</h4>
          <div className='info-container'>
            {selectedUser !== null ? (
              <ul className='list-unstyled'>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'>نام استاد:</span>
                  <span> GHAFFARI </span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'>نام دوره:</span>
                  <span> دوره HTML </span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'>وضعیت دوره:   </span>
                  <Badge className='text-capitalize' >
                  درحال عضو گیر
                  </Badge>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'> سطح دوره :</span>
                  <span className='text-capitalize'>پیشرفته</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'> نوع دوره : </span>
                  <span> آنلاین </span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'> قیمت دوره : </span>
                  <span> 2,000,000 </span>
                </li>
                {/* <li className='mb-75'>
                  <span className='fw-bolder me-25'>Language:  </span>
                  <span>PERSIAN</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'>Country:  </span>
                  <span>IRAN</span>
                </li> */}
              </ul>
            ) : null}

            
          </div>
          <div className='d-flex justify-content-center pt-2'>
            <Button color='primary' onClick={() => setShow(true)}>
              ویرایش
            </Button>
            <Button className='ms-1' color='danger' outline onClick={handleSuspendedClick}>
              غیرفعال کردن
            </Button>
          </div>
        </CardBody>
      </Card>
      <Modal isOpen={show} toggle={() => setShow(!show)} className='modal-dialog-centered modal-lg'>
        <ModalHeader className='bg-transparent' toggle={() => setShow(!show)}></ModalHeader>
        <ModalBody className='px-sm-5 pt-50 pb-5'>
          <div className='text-center mb-2'>
            <h1 className='mb-1'> ادیت کردن دوره!!! </h1>
            <p> !!!با اپدیت کردن دوره نسخه  قبلی پاک میشود </p>
          </div>
          <Form >
            <Row className='gy-1 pt-75'>
              
              
             
              <Col md={6} xs={12}>
                <Label className='form-label' for='billing-email'>
                نام دوره 
                </Label>
                <Input
                  type='email'
                  id='billing-email'
                  defaultValue={''}
                  placeholder='c++ ابتدایی'
                />
              </Col>
              <Col md={6} xs={12}>
                <Label className='form-label' for='status'>
                وضعیت دوره
                </Label>
                <Select
                  id='status'
                  isClearable={false}
                  className='react-select'
                  classNamePrefix='select'
                  options={statusOptions}
                  theme={selectThemeColors}
                  // defaultValue={statusOptions[statusOptions.findIndex(i => i.value === selectedUser.status)]}
                />
              </Col>
              <Col md={6} xs={12}>
                <Label className='form-label' for='tax-id'>
                نام استاد
                </Label>
                <Input
                  id='tax-id'
                  placeholder='فلانی'
                  // defaultValue={selectedUser.contact.substr(selectedUser.contact.length - 4)}
                />
              </Col>
              <Col md={6} xs={12}>
                <Label className='form-label' for='contact'>
                 سطح دوره
                </Label>
                <Input id='contact'
                //  defaultValue={selectedUser.contact}
                 placeholder='ابتدایی' />
              </Col>
              <Col md={6} xs={12}>
                <Label className='form-label' for='language'>
                  نوع دوره
                </Label>
                <Input id='contact'
                //  defaultValue={selectedUser.contact}
                 placeholder='حضوری/انلاین' />
              </Col>
              <Col md={6} xs={12}>
                <Label className='form-label' for='country'>
                  قیمت دوره
                </Label>
                <Input
                  id='tax-id'
                  placeholder='123000'
                  // defaultValue={selectedUser.contact.substr(selectedUser.contact.length - 4)}
                />
              </Col>
              <Col xs={12}>
                <div className='d-flex align-items-center mt-1'>
                  <div className='form-switch'>
                    <Input type='switch' defaultChecked id='billing-switch' name='billing-switch' />
                    <Label className='form-check-label' htmlFor='billing-switch'>
                      <span className='switch-icon-left'>
                        <Check size={14} />
                      </span>
                      <span className='switch-icon-right'>
                        <X size={14} />
                      </span>
                    </Label>
                  </div>
                  <Label className='form-check-label fw-bolder' for='billing-switch'>
                    تمام تغییرات ثبت شود
                  </Label>
                </div>
              </Col>
              <Col xs={12} className='text-center mt-2 pt-50'>
                <Button type='submit' className='me-1' color='primary'>
                  ثبت تغییرات
                </Button>
                <Button
                  type='reset'
                  color='secondary'
                  outline
                  // onClick={() => {
                  //   handleReset()
                  //   setShow(false)
                  // }}
                >
                 منصرف شدن
                </Button>
              </Col>
            </Row>
          </Form>
        </ModalBody>
      </Modal>
    </Fragment>
  )
}

export default UserInfoCard
