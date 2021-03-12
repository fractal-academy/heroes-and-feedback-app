import { List } from 'app/components'
import { firestore } from 'app/services'
import { PERSONAL_BADGES } from 'app/constants/collections'
import { useCollectionData } from 'react-firebase-hooks/firestore'

const PersonalBadgeList = (props) => {
  const [data] = useCollectionData(firestore.collection(PERSONAL_BADGES))

  return <List type="personalBadge" data={data} />
}

export default PersonalBadgeList
