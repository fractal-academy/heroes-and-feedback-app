import { CompanyList } from 'app/domains/Company/components/list'
import { useContext } from 'react'
import { UserContext } from 'app/context/UserContext'

const CompanyAll = (props) => {
  const user = useContext(UserContext)
  return <CompanyList />
}

export default CompanyAll
