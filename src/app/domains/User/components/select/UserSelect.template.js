import { CustomSelect } from 'app/components/select'

const UserSelect = (props) => {
  const { data, ...rest } = props

  return <CustomSelect data={data} {...rest} />
}

export default UserSelect
