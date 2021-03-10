import { List } from 'app/components'
import { firestore } from 'app/services'
import { BADGES } from 'app/constants/collections'
import { useCollectionData } from 'react-firebase-hooks/firestore'

const BadgeList = (props) => {
  const [data] = useCollectionData(firestore.collection(BADGES))

  return <List type="badge" data={data} />
}

export default BadgeList
