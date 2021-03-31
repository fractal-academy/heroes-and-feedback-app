import { List } from 'app/components'

const CompanyList = (props) => {
  const { data } = props

  const message = 'Enter company name...'

  return <List type="company" data={data} message={message} />
}

export default CompanyList
