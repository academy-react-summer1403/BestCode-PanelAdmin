// ** React Imports
import { useRef, useState } from 'react'

// ** Custom Components
import Wizard from '@components/wizard'

// ** Steps
import Address from './steps/Address'
import SocialLinks from './steps/SocialLinks'
import PersonalInfo from './steps/PersonalInfo'
import AccountDetails from './steps/AccountDetails'

const WizardVertical = () => {
  // ** Ref
  const ref = useRef(null)
  // ** State
  const [stepper, setStepper] = useState(null)

  const steps = [
    {
      id: 'account-details',
      title: ' اطلاعات دوره  ',
      subtitle: 'اطلاعات تکمیلی را بنویسید',
      content: <AccountDetails stepper={stepper}
      
      type='wizard-vertical' />
    },
    {
      id: 'personal-info',
      title: ' توضیحات تکمیلی دوره ',
      subtitle: '  توضیحات تکمیلی را وارد کنید ',
      content: <PersonalInfo stepper={stepper} type='wizard-vertical' />
    },
    {
      id: 'step-address',
      title: 'تاریخ شروع و پایان دوره',
      subtitle: ' تاریخ را وارد کنید ',
      content: <Address stepper={stepper} type='wizard-vertical' />
    },
    {
      id: 'social-links',
      title: ' عکس دوره ',
      subtitle: '  عکس دوره را انتخواب کنید  ',
      content: <SocialLinks stepper={stepper} type='wizard-vertical' />
    }
  ]

  return (
    <div className='vertical-wizard '>
      <Wizard
        type='vertical'
        ref={ref}
        steps={steps}
        options={{
          linear: false
        }}
        instance={el => setStepper(el)}
      />
    </div>
  )
}

export default WizardVertical
