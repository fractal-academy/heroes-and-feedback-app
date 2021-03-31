import { CustomSelect } from 'app/components/select'

const BadgeSelect = (props) => {
  const { data, onChange, value } = props

  return <CustomSelect data={data} onChange={onChange} value={value || ''} />
}

export default BadgeSelect
