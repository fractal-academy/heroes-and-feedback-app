import { Select } from 'antd'
import { useState } from 'react'

const { Option } = Select

const CustomSelect = (props) => {
  const { data, onChange, value } = props

  const [selectedOption, setSelectedOption] = useState(
    value?.selectedOption || ''
  )

  const triggerChange = (changedValue) => {
    onChange?.({
      selectedOption,
      ...value,
      ...changedValue
    })
  }

  const handleNewOptionSelected = (value, key) => {
    setSelectedOption(value)
    triggerChange({ id: key.key, selectedOption: value })
  }
  //TODO: Fix for roles

  return (
    <Select
      value={selectedOption}
      defaultValue={selectedOption}
      onChange={handleNewOptionSelected}>
      {data?.map((item) => (
        <Option value={item.name || item} key={item.name || item}>
          {item.name || item}
        </Option>
      ))}
    </Select>
  )
}

export default CustomSelect
