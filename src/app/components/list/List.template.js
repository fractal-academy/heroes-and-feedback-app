// import Fuse from 'fuse.js'
import { Item } from 'app/components'
import { PropTypes } from 'prop-types'
import { List, Divider, Input } from 'antd'
import { Row, Col, Box } from '@qonsoll/react-design'

const CustomList = (props) => {
  const { type, data } = props

  const searchData = () => {
    return
  }

  return (
    <Row>
      <Col>
        <Box my={4}></Box>
        <Box mb={2}>
          <Input.Search
            placeholder="input search text"
            onSearch={searchData}
            enterButton
          />
        </Box>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <>
              <Item type={type} data={item} />
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
