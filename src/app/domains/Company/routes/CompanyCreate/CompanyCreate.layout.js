import { CompanySimpleForm } from 'app/domains/Company/components/form'
import { useState, useEffect } from 'react'
import { getCitiesAndContries } from '../../helpers'

const CompanyCreate = (props) => {
  const [citiesData, setCitiesData] = useState(undefined)

  useEffect(() => {
    getCitiesAndContries().then((result) => {
      setCitiesData(result)
    })
  }, [])
  return <>{citiesData && <CompanySimpleForm addressData={citiesData} />}</>
}

export default CompanyCreate
