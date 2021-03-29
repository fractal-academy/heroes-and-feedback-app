import { Row, Col, Container, Box } from '@qonsoll/react-design'
import Fuse from 'fuse.js'
import { useEffect, useRef, useState } from 'react'
import { Input, Spin } from 'antd'

const GallerySelect = (props) => {
  const { data, Component, setSelected, selected, onScroll, className } = props

  const [loading, setLoading] = useState(false)
  const [currentData, setCurrentData] = useState(data)

  useEffect(() => {
    setCurrentData(data)
  }, [data])

  const handleSelect = (item) => {
    setSelected(item)
  }

  const badgeImageSize = 60
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
        <Container
          overflowY="auto"
          overflowX="hidden"
          className={className}
          onScroll={onScroll}>
          <Row h="center">
            {currentData?.map((item) => (
              <Col
                key={item.id}
                cw="auto"
                onClick={() => {
                  handleSelect(item)
                }}
                mb={1}>
                <Component
                  data={item}
                  selected={selected?.id === item.id}
                  size={badgeImageSize}
                />
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </Container>
  )
}

export default GallerySelect
