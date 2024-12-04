// ** Reactstrap Imports
import { Card, CardBody, CardText, Button } from 'reactstrap'

// ** Images
import medal from '@src/assets/images/illustration/badge.svg'
import { useEffect, useState } from 'react'
import { userPanelProfile } from '../../../../../core/services/api/usersmanager'

const CardMedal = () => {
  const [getProfile , setgetProfile] = useState([])
  const GetProfileInfo = async () => {
    const result = await userPanelProfile()
    setgetProfile(result)
  }
  console.log(getProfile)
  useEffect(()=> {
    GetProfileInfo()
  }, [])

  return (
    <Card className='card-congratulations-medal'>
      <CardBody>
        <h5> سلام {getProfile.fName } {getProfile.lName}  خوش آمدی 🎉 </h5>
        <CardText className='font-small-3'> مدال طلا برای رکورد در امد ماهو گرفتی!!! </CardText>
        <h3 className='mb-75 mt-2 pt-50'>
          <a href='/' onClick={e => e.preventDefault()}>
            $48.9k
          </a>
        </h3>
        {/* <Button color='primary'>View Sales</Button> */}
        <img className='congratulation-medal' src={medal} alt='Medal Pic' />
      </CardBody>
    </Card>
  )
}

export default CardMedal
