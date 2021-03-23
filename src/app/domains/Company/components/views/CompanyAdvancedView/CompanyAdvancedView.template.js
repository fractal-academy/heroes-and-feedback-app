import { Card } from 'app/components'

const CompanyAdvancedView = (props) => {
  const { data } = props

  return <Card type="company" data={data} />
}

export default CompanyAdvancedView
