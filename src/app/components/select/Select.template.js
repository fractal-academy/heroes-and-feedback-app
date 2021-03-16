import { Select } from 'antd'

const { Option } = Select

const CustomSelect = (props) => {
  const { data } = props

  //TODO: Fix for roles

  return (
    <Select>
      {data?.map((item) => (
        <Option value={item.name} key={item.id}>
          {item.name}
        </Option>
      ))}
    </Select>
  )
}

export default CustomSelect
