// ** User List Component
import Table from './Table'

// ** Reactstrap Imports
import { Row, Col, Spinner } from 'reactstrap'

// ** Custom Components
import StatsHorizontal from '@components/widgets/stats/StatsHorizontal'

// ** Icons Imports
import { File, Watch, X } from 'react-feather'

// ** Styles
import '@styles/react/apps/app-users.scss'
import { useQuery } from '@tanstack/react-query'
import { GetTotalActiveNews , GetTotalNews , GetNewsList } from '../../../../core/services/api/usersmanager'
import { useState } from 'react'


const UsersList = () => {
  
  const {data: NewsList2, isLoading: isLoading2, refetch: refetchL} = useQuery({queryKey: ['GetTotalNews'], queryFn: GetTotalNews})
  const {data: Actives, isLoading: loadingActive, refetch: refetchA} = useQuery({queryKey: ['GetTotalActiveNews'], queryFn: GetTotalActiveNews})

  const [RowsOfPage, setRowsOfPage] = useState(5)
  const [PageNumber, setPageNumber] = useState(1)
  const [Query, setQuery] = useState('')
  const [IsActive, setIsActive] = useState(true)

  const {data: NewsList, refetch, isLoading, isFetching} = useQuery({
    queryKey: ['GetNewsList', RowsOfPage,PageNumber,IsActive,Query], 
    queryFn: () => GetNewsList(RowsOfPage,PageNumber,IsActive,Query),
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  })
  const Sum = NewsList?.totalCount + Actives?.totalCount
  return (
    <>
  <div className='app-user-list'>
  {/* <div className='d-flex' style={{justifyContent: 'center', margin: '50px'}}> <Spinner /> </div> :  */}
      <Row>
        <Col lg='4' sm='4' >
          <StatsHorizontal
            color='danger'
            statTitle=' مقالات غیر فعال شده'
            icon={<X size={30} />}
            renderStats={<h3 className='fw-bolder mb-50'>{Actives?.totalCount || ''}</h3>}
          />
        </Col>
        <Col lg='4' sm='4' >
          <StatsHorizontal
            color='success'
            statTitle=' مقالات فعال '
            icon={<File size={30} />}
            renderStats={<h3 className='fw-bolder mb-50'>{NewsList2?.totalCount}</h3>}
          />
        </Col>
        <Col lg='4' sm='4'>
          <StatsHorizontal
            statTitle=' همه ی مقالات'
            icon={<File size={30} />}
           renderStats={<h3 className='fw-bolder mb-50'>{Sum}</h3>}
          />
        </Col>
      </Row>
      <Table NewsList={NewsList} RowsOfPage={RowsOfPage} setRowsOfPage={setRowsOfPage} PageNumber={PageNumber} setPageNumber={setPageNumber} Query={Query} setQuery={setQuery} isLoading={isLoading} refetch={refetch} isFetching={isFetching} refetchA={refetchA} refetchL={refetchL} />
    </div>
    </>
  )
}

export default UsersList
