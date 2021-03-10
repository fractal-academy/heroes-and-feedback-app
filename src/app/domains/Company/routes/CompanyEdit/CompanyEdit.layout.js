import { useEffect, useState } from 'react'
import { getCitiesAndContries } from '../../helpers'
import { firestore } from 'app/services'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import { CompanySimpleForm } from 'app/domains/Company/components/form'
import { COMPANIES } from 'app/constants/collections'
import { useParams } from 'react-router-dom'

const CompanyEdit = (props) => {
  const { id } = useParams()
  const [citiesData, setCitiesData] = useState(undefined)

  const [data] = useDocumentData(firestore.collection(COMPANIES).doc(id))

  useEffect(() => {
    getCitiesAndContries().then((result) => {
      setCitiesData(result)
    })
  }, [])

  return (
    <>
      {data && citiesData && (
        <CompanySimpleForm id={id} data={data} addressData={citiesData} />
      )}
    </>
  )
}

export default CompanyEdit
