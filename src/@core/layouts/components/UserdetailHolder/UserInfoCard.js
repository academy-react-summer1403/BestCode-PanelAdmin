// ** React Imports
import { useState, Fragment } from 'react'

// ** Reactstrap Imports
import { Row, Col, Card, Form, CardBody, Button, Badge, Modal, Input, Label, ModalBody, ModalHeader
, FormFeedback

 } from 'reactstrap'


// ** Third Party Components
import Swal from 'sweetalert2'
import Select from 'react-select'
import { Check, Briefcase, X , User} from 'react-feather'
import { useForm, Controller } from 'react-hook-form'
import withReactContent from 'sweetalert2-react-content'
import baner from '../../../../assets/images/banner/upgrade.png'
import arash from '../../../../assets/images/banner/arash.jpg'




// ** Custom Components
import Avatar from '@components/avatar'

// ** Utils
import { selectThemeColors } from '@utils'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'

import { DeleteUser } from '../../../../core/services/api/usersmanager'

import jMoment from 'jalali-moment'

// ** Custom Components
import { yupResolver } from '@hookform/resolvers/yup'
import "flatpickr/dist/themes/material_green.css";
import * as yup from 'yup'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
import { useNavigate, useParams } from 'react-router-dom'
import { UpdateUser } from '../../../../core/services/api/usersmanager'
import toast from 'react-hot-toast'
import FlatPicker from 'react-flatpickr'

const MySwal = withReactContent(Swal)

const UserInfoCard = ({ selectedUser , data }) => {
  // ** State
  const [show, setShow] = useState(false)
  const {id} = useParams()
  console.log(id)
  const SignupSchema = yup.object().shape({
    nationalCode: yup.string().min(10, ' کد ملی معتبر نمی باشد ').required(' کد ملی معتبر نمی باشد '),
    gmail: yup.string().email(' ایمیل وارد شده صحیح نمی باشد ')
  })
  // ** Hook
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      id: id,
      fName: data?.fName || '',
      lName: selectedUser?.lName || '',
      userName: selectedUser?.userName || '',
      gmail: selectedUser?.gmail || '',
      phoneNumber: selectedUser?.phoneNumber || '',
      active: selectedUser?.active,
      isDelete: selectedUser?.isDelete,
      isTecher: selectedUser?.isTecher,
      isStudent: selectedUser?.isStudent,
      recoveryEmail: selectedUser?.recoveryEmail !== null ? selectedUser?.recoveryEmail : 'default@gmail.com',
      twoStepAuth: selectedUser?.twoStepAuth,
      userAbout: selectedUser?.userAbout || '',
      currentPictureAddress: selectedUser?.currentPictureAddress,
      profileCompletionPercentage: selectedUser?.profileCompletionPercentage,
      linkdinProfile: selectedUser?.linkdinProfile || '',
      telegramLink: selectedUser?.telegramLink || '',
      receiveMessageEvent: selectedUser?.receiveMessageEvent,
      homeAdderess: selectedUser?.homeAdderess || '',
      nationalCode: selectedUser?.nationalCode !== null ? selectedUser?.nationalCode : '',
      gender: selectedUser?.gender,
      latitude: selectedUser?.latitude || '',
      longitude: selectedUser?.longitude || '',
      insertDate: selectedUser?.insertDate,
      birthDay: '1998-2-1',
      roles: [],
      courses: [],
      coursesReseves: []
  }
    ,resolver: yupResolver(SignupSchema)
  })

  // ** render user img


  const navigate = useNavigate()

  const onSubmit = async data => {
    data.birthDay = data.birthDay === '2024-09-09' ? '2024-09-09' : selectedUser.birthDay !== data.birthDay ? data.birthDay[0] : selectedUser.birthDay
    console.log(data)
    const response = await UpdateUser(data)
    if (!response){
      toast.error(' کد ملی معتبر نمی باشد یا عملیات موفقیت آمیز نیست ')
    }
    else if(response.success == true){
      toast.success(' عملیات انجام شد ')
      setShow(false)
      handleReset()
      navigate(`/userManagement/userDetail/${id}`)
    }
  }

  const handleReset = () => {
    reset({
        id: id,
        fName: selectedUser?.fName || '',
        lName: selectedUser?.lName || '',
        userName: selectedUser?.userName || '',
        gmail: selectedUser?.gmail || '',
        phoneNumber: selectedUser?.phoneNumber || '',
        active: selectedUser?.active,
        isDelete: selectedUser?.isDelete,
        isTecher: selectedUser?.isTecher,
        isStudent: selectedUser?.isStudent,
        recoveryEmail: selectedUser?.recoveryEmail !== null ? selectedUser?.recoveryEmail : 'default@gmail.com',
        twoStepAuth: selectedUser?.twoStepAuth,
        userAbout: selectedUser?.userAbout || '',
        currentPictureAddress: selectedUser?.currentPictureAddress,
        profileCompletionPercentage: selectedUser?.profileCompletionPercentage,
        linkdinProfile: selectedUser?.linkdinProfile || '',
        telegramLink: selectedUser?.telegramLink || '',
        receiveMessageEvent: selectedUser?.receiveMessageEvent,
        homeAdderess: selectedUser?.homeAdderess || '',
        nationalCode: selectedUser?.nationalCode !== null ? selectedUser?.nationalCode : '',
        gender: selectedUser?.gender,
        latitude: selectedUser?.latitude || '',
        longitude: selectedUser?.longitude || '',
        insertDate: selectedUser?.insertDate,
        birthDay: '1998-2-1',
        roles: [],
        courses: [],
        coursesReseves: []
    })
  }

 

  

  
  return (
    <Fragment>
      <Card>
        <CardBody>
          <div className='user-avatar-section'>
            <div className='d-flex align-items-center flex-column'>
              <img className='w-25' src={data?.currentPictureAddress?  arash : data?.currentPictureAddress} alt="" />
              <div className='d-flex flex-column align-items-center text-center'>
                <div className='user-info'>
                  <h4> {data?.fName} {""} {data?.lName} </h4>
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
                <h4 className='mb-0'>{data?.courses?.length}</h4>
                <small> دوره های فعال </small>
              </div>
            </div>
            <div className='d-flex align-items-start'>
              <Badge color='light-primary' className='rounded p-75'>
                <Briefcase className='font-medium-2' />
              </Badge>
              <div className='ms-75'>
                <h4 className='mb-0'>{data?.coursesReseves?.length}</h4>
                <small> دوره های رزرو شده</small>
              </div>
            </div>
          </div>
          <h4 className='fw-bolder border-bottom pb-50 mb-1'> اطلاعات کاربر </h4>
          <div className='info-container'>
            {selectedUser !== null ? (
              <ul className='list-unstyled'>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'>نام :</span>
                  <span> {data?.fName}</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'>نام خوانوادگی:</span>
                  <span>{data?.lName}</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'>وضعیت :   </span>
                  <Badge className='text-capitalize' >
                  {data?.active? 'فعال': 'غیرفعال'}
                  </Badge>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'> نام کاربری:</span>
                  <span className='text-capitalize'> {data?.userName} </span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'> ایمیل: </span>
                  <span> {data?.gmail} </span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'> شماره موبایل: </span>
                  <span dir='ltr' > {data?.phoneNumber} </span>
                </li>
            
              </ul>
            ) : null}

            
          </div>
          <div className='d-flex justify-content-center pt-2'>
            <Button color='primary' onClick={() => setShow(true)}>
              ویرایش
            </Button>
          
          </div>
        </CardBody>
      </Card>
      <Modal isOpen={show} toggle={() => setShow(!show)} className='modal-dialog-centered modal-lg iranSans'>
        <ModalHeader className='bg-transparent' toggle={() => setShow(!show)}></ModalHeader>
        <ModalBody className='px-sm-5 pt-50 pb-5'>
          <div className='text-center mb-2'>
            <h1 className='mb-1'>ویرایش مشخصات کاربر</h1>
          </div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row className='gy-1 pt-75'>
              <Col md={6} xs={12}>
                <Label className='form-label' for='fName'>
                  نام
                </Label>
                <Controller
                  defaultValue=''
                  control={control}
                  id='fName'
                  name='fName'
                  render={({ field }) => (
                    <Input {...field} id='fName' placeholder='آرش' invalid={errors.fName && true} />
                  )}
                />
              </Col>
              <Col md={6} xs={12}>
                <Label className='form-label' for='lName'>
                  نام خانوادگی
                </Label>
                <Controller
                  defaultValue=''
                  control={control}
                  id='lName'
                  name='lName'
                  render={({ field }) => (
                    <Input {...field} id='lName' placeholder='غفاری' invalid={errors.lName && true} />
                  )}
                />
              </Col>
              <Col xs={12}>
                <Label className='form-label' for='userName'>
                  نام کاربری
                </Label>
                <Controller
                  defaultValue=''
                  control={control}
                  id='userName'
                  name='userName'
                  render={({ field }) => (
                    <Input {...field} id='userName' placeholder='.....' invalid={errors.userName && true} />
                  )}
                />
              </Col>
              <Col xs={6}>
                <Label className='form-label' for='gmail'>
                  ایمیل
                </Label>
                <Controller
                  defaultValue=''
                  control={control}
                  id='gmail'
                  name='gmail'
                  render={({ field }) => (
                    <Input {...field} id='gmail' placeholder='......' invalid={errors.gmail && true} />
                  )}
                />
                {errors.gmail && <FormFeedback>{errors.gmail.message}</FormFeedback>}
              </Col>
              <Col xs={6}>
                <Label className='form-label' for='phoneNumber'>
                  شماره
                </Label>
                <Controller
                  defaultValue=''
                  control={control}
                  id='phoneNumber'
                  name='phoneNumber'
                  render={({ field }) => (
                    <Input {...field} id='phoneNumber' placeholder='.....' invalid={errors.phoneNumber && true} />
                  )}
                />
              </Col>
              <Col xs={12}>
                <Label className='form-label' for='recoveryEmail'>
                  ایمیل پشتیبان
                </Label>
                <Controller
                  defaultValue=''
                  control={control}
                  id='recoveryEmail'
                  name='recoveryEmail'
                  render={({ field }) => (
                    <Input {...field} id='recoveryEmail' placeholder='.....' invalid={errors.recoveryEmail && true} />
                  )}
                />
              </Col>

              <Col xs={12}>
                <Label className='form-label' for='userAbout'>
                  درباره من
                </Label>
                <Controller
                  defaultValue=''
                  control={control}
                  id='userAbout'
                  name='userAbout'
                  render={({ field }) => (
                    <Input {...field} id='userAbout' placeholder='درباره خود شرح دهید...' invalid={errors.userAbout && true} />
                  )}
                />
              </Col>

              <Col xs={6}>
                <Label className='form-label' for='nationalCode'>
                  کد ملی
                </Label>
                <Controller
                  defaultValue=''
                  control={control}
                  id='nationalCode'
                  name='nationalCode'
                  render={({ field }) => (
                    <Input {...field} id='nationalCode' placeholder='.....' invalid={errors.nationalCode && true} />
                  )}
                />
                {errors.nationalCode && <FormFeedback>{errors.nationalCode.message}</FormFeedback>}
              </Col>

              <Col xs={6}>
                <Label className='form-label' for='birthDay'>
                  تاریخ تولد
                </Label>
                <Controller
                  control={control}
                  id='birthDay'
                  name='birthDay'
                  render={({ field }) => (
                    <FlatPicker options={{
                      enableTime: false,
                      dateFormat: 'Y-m-d',
                      altFormat: 'Y-m-d',
                      altInput: true
                    }} {...field} id='birthDay' placeholder='....' style={{width: '100%', height: '37px', outline: 'none'}} invalid={errors.birthDay && true} />
                  )}
                />
              </Col>

              <Col xs={6}>
                <Label className='form-label' for='linkdinProfile'>
                  لینک لینکدین
                </Label>
                <Controller
                  defaultValue=''
                  control={control}
                  id='linkdinProfile'
                  name='linkdinProfile'
                  render={({ field }) => (
                    <Input {...field} id='linkdinProfile' placeholder='https://linkdin.com' />
                  )}
                />
              </Col>

              <Col xs={6}>
                <Label className='form-label' for='telegramLink'>
                  لینک تلگرام
                </Label>
                <Controller
                  defaultValue=''
                  control={control}
                  id='telegramLink'
                  name='telegramLink'
                  render={({ field }) => (
                    <Input {...field} id='telegramLink' placeholder='https://t.me/@example' invalid={errors.nationalCode && true} />
                  )}
                />
              </Col>
              <Col xs={12} className='text-center mt-2 pt-50'>
                <Button type='submit' className='me-1' color='primary'>
                  تایید
                </Button>
                <Button
                  type='reset'
                  color='secondary'
                  outline
                  onClick={() => {
                    handleReset()
                    setShow(false)
                  }}
                >
                  انصراف
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
