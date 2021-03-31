import { Title } from 'app/components'
import { firestore } from 'app/services'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCitiesAndContries } from '../../helpers'
import { COMPANIES } from 'app/constants/collections'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import { CompanySimpleForm } from 'app/domains/Company/components/form'

const CompanyEdit = (props) => {
  const { id } = useParams()
  const [citiesData, setCitiesData] = useState(undefined)

  const [data] = useDocumentData(firestore.collection(COMPANIES).doc(id))

  useEffect(() => {
    getCitiesAndContries().then((result) => {
      setCitiesData(result)
    })
  }, [])

  const titleText = 'Edit company'

  return (
    <>
      <Title titleText={titleText} withName />
      {data && citiesData && (
        <CompanySimpleForm id={id} data={data} addressData={citiesData} />
      )}
    </>
  )
}

export default CompanyEdit
