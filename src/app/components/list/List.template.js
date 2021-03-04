import { List, Divider } from 'antd'
import { PropTypes } from 'prop-types'
import { Item } from 'app/components/listItem'
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
              <Item
                id={item.id}
                type={type}
                name={item.name}
                info={item.info}
                image={item.image}
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
