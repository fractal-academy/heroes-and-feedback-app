import { Row, Col, Container, Box } from '@qonsoll/react-design'
import Fuse from 'fuse.js'
import { useRef, useState } from 'react'
import { Input, Spin } from 'antd'

const GallerySelect = (props) => {
  const { data, Component, setSelected, selected } = props

  const [loading, setLoading] = useState(false)
  const [currentData, setCurrentData] = useState(data)

  const handleSelect = (item) => {
    setSelected(item)
  }

  const fuse = new Fuse(data, { keys: ['name'] })

  // CUSTOM HOOKS
  const searchRef = useRef()

  const searchData = () => {
    setLoading(true)
    if (searchRef.current.input.value) {
      const searchRes = fuse.search(searchRef.current.input.value)
      setCurrentData(searchRes.map((item) => item.item))
    } else setCurrentData(data)
    setLoading(false)
  }

  return (
    <Container>
      <Row>
        <Col>
          <Box mb={2}>
            <Input.Search
              ref={searchRef}
              placeholder="input search text"
              onSearch={searchData}
              enterButton
            />
          </Box>
        </Col>
      </Row>
      {loading ? (
        <Spin />
      ) : (
        <Row h="center">
          {currentData?.map((item) => (
            <Col
              cw={[6, 4, 3, 2]}
              onClick={() => {
                handleSelect(item)
              }}
              mb={1}>
              <Component data={item} selected={selected?.id === item.id} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  )
}

export default GallerySelect
