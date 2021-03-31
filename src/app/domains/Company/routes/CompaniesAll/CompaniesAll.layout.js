import { Button } from 'antd'
import { Title } from 'app/components'
import { firestore } from 'app/services'
import { Box } from '@qonsoll/react-design'
import { ROUTES_PATHS } from 'app/constants'
import { useHistory } from 'react-router-dom'
import { useUserAuthContext } from 'app/context'
import { COMPANIES } from 'app/constants/collections'
import { CompanyList } from 'app/domains/Company/components/list'
import { useCollectionData } from 'react-firebase-hooks/firestore'

const CompaniesAll = (props) => {
  const [data] = useCollectionData(
    firestore.collection(COMPANIES).orderBy('name')
  )

  const history = useHistory()
  const session = useUserAuthContext()

  const addButtonRule = session.userDBData.role === 'Superadmin'
  const titleText = 'Companies'

  return (
    <>
      <Title withName titleText={titleText} />
      {addButtonRule && (
        <Box textAlign="right" mt={2}>
          <Button
            type="primary"
            onClick={() => {
              history.push(ROUTES_PATHS.COMPANY_CREATE)
            }}>
            + Add
          </Button>
        </Box>
      )}
      <CompanyList data={data} />
    </>
  )
}

export default CompaniesAll
