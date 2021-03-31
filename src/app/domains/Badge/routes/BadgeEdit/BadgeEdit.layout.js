import { Title } from 'app/components'
import { firestore } from 'app/services'
import { useParams } from 'react-router-dom'
import { BADGES } from 'app/constants/collections'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import { BadgeSimpleForm } from 'app/domains/Badge/components/form'

const BadgeEdit = (props) => {
  const { id } = useParams()

  const [data] = useDocumentData(firestore.collection(BADGES).doc(id))

  const titleText = 'Edit badge'

  return (
    <>
      {data && (
        <>
          <Title titleText={titleText} withName />
          <BadgeSimpleForm id={id} data={data} />
        </>
      )}
    </>
  )
}

export default BadgeEdit
