import { List, Divider } from 'antd'
import { PropTypes } from 'prop-types'
import { Item } from 'app/components'
import { Row, Col } from '@qonsoll/react-design'

const CustomList = (props) => {
  const { type, data } = props

  return (
    <Row>
      <Col>
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
