// ** React Imports
import { useState, Fragment, useEffect } from 'react'
import avatar from '../../../assets/images/avatars/12.png'
// ** Reactstrap Imports
import { Row, Col, Card, Form, CardBody, Button, Badge, Modal, Input, Label, ModalBody, ModalHeader,
  DropdownToggle,
  UncontrolledDropdown,

 } from 'reactstrap'

import { NavLink } from 'react-router-dom'
import toast from 'react-hot-toast'
import { MessageSquare,Star,Eye,ThumbsUp,ThumbsDown, ChevronDown ,  Bookmark,
  Trash,
  Edit2} from 'react-feather'
import { kFormatter } from '@utils'

// ** Third Party Components
import Swal from 'sweetalert2'
import Select from 'react-select'
import { Check, Briefcase, X } from 'react-feather'
import { useForm, Controller } from 'react-hook-form'
import withReactContent from 'sweetalert2-react-content'
import jMoment from 'moment-jalaali'

import { useParams } from 'react-router-dom'
// ** Custom Components
// ** Utils
import { selectThemeColors } from '@utils'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'


const statusOptions = [
  { value: 'active', label: ' فعال ' },
  { value: 'inactive', label: ' غیر فعال ' },
  { value: 'suspended', label: 'درحال عضو گیری' }
]



const MySwal = withReactContent(Swal)

const UserInfoCard = ({ data ,  handleDelete}) => {
  // ** State

  return (
    <Fragment>
      <Card>
        <CardBody>
          <div className='user-avatar-section'>
            <div className='d-flex align-items-center flex-column'>
              <img className='w-50' src={data?.currentImageAddress?  data.currentImageAddress : avatar} alt="" />
              <div className='d-flex flex-column align-items-center text-center'>
                <div className='user-info'>
                  <h4>{data?.title} </h4>
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
                <h4 className='mb-0'>{data?.courseUserTotal}</h4>
                <small> دانشجویان </small>
              </div>
            </div>
            <div className='d-flex align-items-start'>
              <Badge color='light-primary' className='rounded p-75'>
                <Briefcase className='font-medium-2' />
              </Badge>
              <div className='ms-75'>
                <h4 className='mb-0'>{data?.reserveUserTotal}</h4>
                <small> دانشجویانی که رزرو کردند</small>
              </div>
            </div>
          </div>
          <h4 className='fw-bolder border-bottom pb-50 mb-1'>اطلاعات</h4>
          <div className='info-container'>
            {data !== null ? (
              <ul className='list-unstyled'>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'>نام نویسنده:</span>
                  <span> {data?.addUserFullName} </span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'>نام اخبار</span>
                  <span> {data?.title} </span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'>وضعیت اخبار:   </span>
                  <Badge className='text-capitalize' >
                    {data?.isActive? 'فعال': 'غیرفعال'}
                  </Badge>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'> توضیحات:</span>
                  <span className='text-capitalize'>{data?.describe}</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'> توضیحات کوتاه: </span>
                  <span> {data?.miniDescribe}</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'> به روز شده در تاریخ </span>
                  <span>{(jMoment(data.updateDate).locale('fa').format('jYYYY jMMMM jD'))}  </span>
                </li>
                <li className='mb-75'>
                <div className='d-flex align-items-center justify-content-between'>
                        <div className='d-flex align-items-center'>
                          <div className='d-flex align-items-center me-1'>
                            <div>
                              <MessageSquare size={21} className='text-body align-middle' style={{marginLeft:"5px"}} />
                            </div>
                            <div>
                              <div className='text-body align-middle' style={{marginLeft:"3px"}}>{kFormatter(data.commentsCount)}</div>
                            </div>
                          </div>
                          <div className='d-flex align-items-cente  me-1'>
                            <div>
                              <Bookmark size={21} className='text-body align-middle' 
                              style={{marginLeft:"5px"}} />
                            </div>
                            <div>
                              <div className='text-body align-middle' style={{marginLeft:"3px"}}>{data.inUsersFavoriteCount}</div>
                            </div>
                          </div>
                          <div className='d-flex align-items-cente me-1'>
                            <div>
                              <Eye size={21} className='text-body align-middle' style={{marginLeft:"5px"}} />
                            </div>
                            <div>
                              <div className='text-body align-middle' style={{marginLeft:"3px"}}>{data.currentView}</div>
                            </div>
                          </div>
                          <div className='d-flex align-items-cente me-1'>
                            <div>
                              <Star size={21} className='text-body align-middle' style={{marginLeft:"5px"}} />
                            </div>
                            <div>
                              <div className='text-body align-middle' style={{marginLeft:"3px"}}>{data.currentRate}</div>
                            </div>
                          </div>
                          <div className='d-flex align-items-cente me-1'>
                            <div>
                              <ThumbsUp size={21} className='text-body align-middle' style={{marginLeft:"5px"}} />
                            </div>
                            <div>
                              <div className='text-body align-middle' style={{marginLeft:"3px"}}>{data.currentLikeCount}</div>
                            </div>
                          </div>
                          <div className='d-flex align-items-cente me-1'>
                            <div>
                              <ThumbsDown size={21} className='text-body align-middle' style={{marginLeft:"5px"}} />
                            </div>
                            <div>
                              <div className='text-body align-middle' style={{marginLeft:"3px"}}>{data.currentDissLikeCount}</div>
                            </div>
                          </div>
                        </div>
                        
                      
                      </div>
                </li>
              </ul>
            ) : null}

            
          </div>
          <div className='d-flex justify-content-center pt-2'>
            <Button color='primary' tag={NavLink}
            to={`/News/edit/${data.id}`}
            >
              ویرایش
            </Button>
            <Button className='ms-1' color='danger'   outline 
            onClick={()=> handleDelete(data.id)}
            >
          حذف
      </Button>
          </div>
        </CardBody>
      </Card>
      {/* <ModalEditCourse isOpen={isModalOpen}  toggleModal={toggleModal} Course={data1} /> */}

    </Fragment>
  )
}

export default UserInfoCard
