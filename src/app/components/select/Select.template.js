import { Select } from 'antd'
import { useState } from 'react'

const { Option } = Select

const CustomSelect = (props) => {
  const { data, onChange, value, disabled } = props

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
    setSelectedOption(key.value)
    triggerChange({ id: key.key, selectedOption: key.children })
  }

  return (
    <Select
      disabled={disabled}
      value={selectedOption}
      defaultValue={selectedOption}
      onChange={handleNewOptionSelected}
      style={{ width: '100%' }}>
      {data?.map((item) => (
        <Option
          value={
            typeof item === 'object'
              ? item.name ||
                `${item.email}` ||
                `${item.firstName} ${item.surname}`
              : item
          }
          key={typeof item === 'object' ? item.id : item}>
          {typeof item === 'object'
            ? item.name || `${item.firstName} ${item.surname}`
            : item}
        </Option>
      ))}
    </Select>
  )
}

export default CustomSelect
