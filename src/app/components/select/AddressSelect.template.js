import { useState } from 'react'
import { Select } from 'antd'
import { Row, Col } from '@qonsoll/react-design'

const { Option } = Select

const AddressSelect = (props) => {
  // INTERFACE
  const { data, onChange, value = {} } = props

  // COMPUTED PROPERTIES
  const countries = Object.entries(data)

  // STATE
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

  // HELPER FUNCTIONS
  const triggerChange = (changedValue) => {
    onChange?.({
      selectedCountry,
      selectedCity,
      ...value,
      ...changedValue
    })
  }

  const selectSearchFieldFilter = (input, option) =>
    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0

  const handleCountryChange = (value) => {
    setSelectedCountry(value)
    setCities(data[value])
    setSelectedCity(data[value][0])
    triggerChange({
      selectedCountry: value,
      selectedCity: data[value][0]
    })
  }

  const handleCityChange = (value) => {
    setSelectedCity(value)
    triggerChange({
      selectedCountry: selectedCountry,
      selectedCity: value
    })
  }

  // TEMPLATE
  return (
    <Row h="between">
      <Col>
        <Select
          showSearch
          value={selectedCountry}
          defaultValue={countries[0]}
          style={{ width: 200 }}
          onChange={handleCountryChange}
          optionFilterProp="children"
          filterOption={selectSearchFieldFilter}>
          {countries.map(([key, value]) => (
            <Option key={key}>{key}</Option>
          ))}
        </Select>
        <Select
          showSearch
          optionFilterProp="children"
          filterOption={selectSearchFieldFilter}
          style={{ width: 200 }}
          value={selectedCity}
          onChange={handleCityChange}>
          {cities.map((city) => (
            <Option key={city}>{city}</Option>
          ))}
        </Select>
      </Col>
    </Row>
  )
}
export default AddressSelect
