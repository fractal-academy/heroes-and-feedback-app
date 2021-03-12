import { firestore } from 'app/services'
import { COMPANIES } from 'app/constants/collections'
import { CompanyList } from 'app/domains/Company/components/list'
import { useCollectionData } from 'react-firebase-hooks/firestore'

const CompanyAll = (props) => {
  const [data] = useCollectionData(firestore.collection(COMPANIES))

  return <CompanyList data={data} />
}

export default CompanyAll
