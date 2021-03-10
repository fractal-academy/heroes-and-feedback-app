import { List } from 'app/components'
import { firestore } from 'app/services'
import { COMPANIES } from 'app/constants/collections'
import { useCollectionData } from 'react-firebase-hooks/firestore'

const CompanyList = (props) => {
  const [data] = useCollectionData(firestore.collection(COMPANIES))

  return <List type="company" data={data} />
}

export default CompanyList
