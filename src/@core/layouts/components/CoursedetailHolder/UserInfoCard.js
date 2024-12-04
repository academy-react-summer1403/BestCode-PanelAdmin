// ** React Imports
import { useState, Fragment, useEffect } from 'react'

// ** Reactstrap Imports
import { Row, Col, Card, Form, CardBody, Button, Badge, Modal, Input, Label, ModalBody, ModalHeader } from 'reactstrap'
import toast from 'react-hot-toast'

// ** Third Party Components
import Swal from 'sweetalert2'
import Select from 'react-select'
import { Check, Briefcase, X } from 'react-feather'
import { useForm, Controller } from 'react-hook-form'
import withReactContent from 'sweetalert2-react-content'

import { useParams } from 'react-router-dom'
import { getCourseId } from '../../../../core/services/api/usersmanager'
import ModalEditCourse from '../../../../pages/UpdateCourse/ModalEditCourse'
// ** Custom Components
// ** Utils
import { selectThemeColors } from '@utils'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'

import { ActiveCourse } from '../../../../core/services/api/usersmanager'

const statusOptions = [
  { value: 'active', label: ' فعال ' },
  { value: 'inactive', label: ' غیر فعال ' },
  { value: 'suspended', label: 'درحال عضو گیری' }
]



const MySwal = withReactContent(Swal)

const UserInfoCard = ({ selectedUser }) => {
  // ** State
  const [show, setShow] = useState(false)
  const [data1 , setData1] = useState([])
  const {id} = useParams()
  const getCourseId2 = async () => {
    const data = await getCourseId(id)
    setData1(data)
  }

  useEffect(() => {
    getCourseId2()
  }, [])

useEffect(() => {
    if (data1) {
      setIsActive(data1.isActive); 
    }
}, [data1]);

  const [isActive, setIsActive] = useState(data1?.isActive); 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const handleToggle = async () => {
    const data = {
      active: !isActive, 
      id: data1?.courseId,
    };
    try {
      const response = await ActiveCourse(data); 
      if (response.success) {
        toast.success(response.message);
        setIsActive(!isActive);
      } else {
        toast.error('عملیات انجام نشد');
      }
    } catch (error) {
      toast.error('خطایی رخ داد');
      console.error(error);
    }
  };
  return (
    <Fragment>
      <Card>
        <CardBody>
          <div className='user-avatar-section'>
            <div className='d-flex align-items-center flex-column'>
              <img className='w-50' src={data1?.imageAddress} alt="" />
              <div className='d-flex flex-column align-items-center text-center'>
                <div className='user-info'>
                  <h4>{data1?.title} </h4>
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
                <h4 className='mb-0'>{data1?.courseUserTotal}</h4>
                <small> دانشجویان </small>
              </div>
            </div>
            <div className='d-flex align-items-start'>
              <Badge color='light-primary' className='rounded p-75'>
                <Briefcase className='font-medium-2' />
              </Badge>
              <div className='ms-75'>
                <h4 className='mb-0'>{data1?.reserveUserTotal}</h4>
                <small> دانشجویانی که رزرو کردند</small>
              </div>
            </div>
          </div>
          <h4 className='fw-bolder border-bottom pb-50 mb-1'>اطلاعات</h4>
          <div className='info-container'>
            {selectedUser !== null ? (
              <ul className='list-unstyled'>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'>نام استاد:</span>
                  <span> {data1?.teacherName} </span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'>نام دوره:</span>
                  <span> {data1?.title} </span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'>وضعیت دوره:   </span>
                  <Badge className='text-capitalize' >
                    {data1?.isActive? 'فعال': 'درحال عضوگیری'}
                  </Badge>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'> سطح دوره :</span>
                  <span className='text-capitalize'>{data1?.courseLevelName}</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'> نوع دوره : </span>
                  <span> {data1?.courseTypeName}</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'> قیمت دوره : </span>
                  <span>{data1?.cost} </span>
                </li>
            
              </ul>
            ) : null}

            
          </div>
          <div className='d-flex justify-content-center pt-2'>
            <Button color='primary' onClick={toggleModal}>
              ویرایش
            </Button>
            <Button className='ms-1' color={isActive ? 'danger' : 'success'}  outline 
                   onClick={handleToggle}

            >
               {isActive ? 'غیرفعال' : 'فعال' }
               {console.log(isActive)}
      </Button>
          </div>
        </CardBody>
      </Card>
      <ModalEditCourse isOpen={isModalOpen}  toggleModal={toggleModal} Course={data1} />

    </Fragment>
  )
}

export default UserInfoCard
