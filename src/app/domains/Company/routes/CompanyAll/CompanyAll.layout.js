import { Button } from 'antd'
import { firestore } from 'app/services'
import { ROUTES_PATHS } from 'app/constants'
import { useHistory } from 'react-router-dom'
import { COMPANIES } from 'app/constants/collections'
import { CompanyList } from 'app/domains/Company/components/list'
import { useCollectionData } from 'react-firebase-hooks/firestore'

const CompanyAll = (props) => {
  const [data] = useCollectionData(firestore.collection(COMPANIES))

  const history = useHistory()

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          history.push(ROUTES_PATHS.COMPANY_CREATE)
        }}>
        + Add
      </Button>
      <CompanyList data={data} />
    </>
  )
}

export default CompanyAll
