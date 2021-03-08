import { useState } from 'react'
import { Select } from 'antd'
import { Row, Col } from '@qonsoll/react-design'

const { Option } = Select

const AddressSelect = (props) => {
  const { data, onChange, value = {} } = props

  const countries = Object.entries(data)

  const [selectedCountry, setSelectedCountry] = useState(
    value.selectedCountry || Object.keys(data)[0]
  )
  const [cities, setCities] = useState(
    value.selectedCountry
      ? data[value.selectedCountry]
      : data[Object.keys(data)[0]]
  )
  const [selectedCity, setSelectedCity] = useState(
    value.selectedCity ? value.selectedCity : data[Object.keys(data)[0]][0]
  )

  const triggerChange = (changedValue) => {
    onChange?.({
      selectedCountry,
      selectedCity,
      ...value,
      ...changedValue
    })
  }

  const handleProvinceChange = (value) => {
    setSelectedCountry(value)
    setCities(data[value])
    setSelectedCity(data[value][0])
    triggerChange({
      selectedCountry: value,
      selectedCity: data[value][0]
    })
  }

  const onSecondCityChange = (value) => {
    setSelectedCity(value)
    triggerChange({
      selectedCountry: selectedCountry,
      selectedCity: value
    })
  }

  return (
    <Row h="between">
      <Col>
        <Select
          showSearch
          value={selectedCountry}
          defaultValue={countries[0]}
          style={{ width: 200 }}
          onChange={handleProvinceChange}
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }>
          {countries.map(([key, value]) => (
            <Option key={key}>{key}</Option>
          ))}
        </Select>
        <Select
          showSearch
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          style={{ width: 200 }}
          value={selectedCity}
          onChange={onSecondCityChange}>
          {cities.map((city) => (
            <Option key={city}>{city}</Option>
          ))}
        </Select>
      </Col>
    </Row>
  )
}
export default AddressSelect
