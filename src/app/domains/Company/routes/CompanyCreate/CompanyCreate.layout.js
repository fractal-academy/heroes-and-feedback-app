import { Title } from 'app/components'
import { useState, useEffect } from 'react'
import { getCitiesAndContries } from '../../helpers'
import { CompanySimpleForm } from 'app/domains/Company/components/form'

const CompanyCreate = (props) => {
  const [citiesData, setCitiesData] = useState(undefined)

  useEffect(() => {
    getCitiesAndContries().then((result) => {
      setCitiesData(result)
    })
  }, [])

  const titleText = 'Create company'

  return (
    <>
      <Title withName titleText={titleText} />
      {citiesData && <CompanySimpleForm addressData={citiesData} />}
    </>
  )
}

export default CompanyCreate
