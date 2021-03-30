import Fuse from 'fuse.js'

import { Item } from 'app/components'
import { PropTypes } from 'prop-types'
import { List, Divider, Input } from 'antd'
import { Row, Col, Box } from '@qonsoll/react-design'
import { useEffect, useRef, useState } from 'react'

const CustomList = (props) => {
  // INTERFACE
  const {
    type,
    data,
    currentUserId,
    onProjectMemberDelete,
    className,
    onScroll,
    message,
    onPersonalBadgeDelete
  } = props

  // STATE
  const [currentData, setCurrentData] = useState(data)

  // USE EFFECTS
  useEffect(() => {
    data && setCurrentData(data)
  }, [data])

  const fuse = new Fuse(data, { keys: ['name'] })

  // CUSTOM HOOKS
  const searchRef = useRef()

  const searchData = () => {
    if (searchRef.current.input.value) {
      const searchRes = fuse.search(searchRef.current.input.value)
      setCurrentData(searchRes.map((item) => item.item))
    } else setCurrentData(data)
  }

  return (
    <Row noGutters>
      <Col>
        <Box my={2}>
          <Input.Search
            ref={searchRef}
            placeholder={message}
            onSearch={searchData}
            enterButton
          />
        </Box>
        <List
          onScroll={onScroll}
          className={className}
          itemLayout="horizontal"
          dataSource={currentData}
          renderItem={(item) => (
            <>
              <Item
                itemIds={currentData.map((item) => item.id)}
                type={type}
                data={item}
                currentUserId={currentUserId}
                onProjectMemberDelete={onProjectMemberDelete}
                onPersonalBadgeDelete={onPersonalBadgeDelete}
              />
              <Divider style={{ margin: '0' }} />
            </>
          )}
        />
      </Col>
    </Row>
  )
}

CustomList.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.array
}

export default CustomList
