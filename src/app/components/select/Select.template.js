import { Select } from 'antd'

const { Option } = Select

const CustomSelect = (props) => {
  const { data } = props

  //TODO: Fix for roles

  return (
    <Select>
      {data?.map((item) => (
        <Option value={item.name || item} key={item.name || item}>
          {item.name || item}
        </Option>
      ))}
    </Select>
  )
}

export default CustomSelect
