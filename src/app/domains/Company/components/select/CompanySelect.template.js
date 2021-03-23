import { CustomSelect } from 'app/components/select'

const CompanySelect = (props) => {
  const { data, onChange, value } = props

  return <CustomSelect data={data} onChange={onChange} value={value || ''} />
}

export default CompanySelect
