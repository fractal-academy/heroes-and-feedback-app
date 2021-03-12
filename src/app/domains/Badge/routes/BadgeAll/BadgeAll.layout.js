import { firestore } from 'app/services'
import { BADGES } from 'app/constants/collections'
import { BadgeList } from 'app/domains/Badge/components/list'
import { useCollectionData } from 'react-firebase-hooks/firestore'

const BadgeAll = (props) => {
  const [data] = useCollectionData(firestore.collection(BADGES))

  return <BadgeList data={data} />
}

export default BadgeAll
