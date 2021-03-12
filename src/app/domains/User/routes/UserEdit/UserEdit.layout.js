import { firestore } from 'app/services/index'
import { UserSimpleForm } from 'app/domains/User/components/form'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import { useParams } from 'react-router-dom'
import { USERS } from 'app/constants/collections'
import { Header } from 'app/components'

const UserEdit = (props) => {
  const { id } = useParams()

  const [data] = useDocumentData(firestore.collection(USERS).doc(id))

  return (
    <>
      {data && (
        <>
          <Header />
          <UserSimpleForm id={id} data={data} />
        </>
      )}
    </>
  )
}

export default UserEdit
