import { List } from 'app/components'

const CompanyList = (props) => {
  const { data } = props

  return <List type="company" data={data} />
}

export default CompanyList
