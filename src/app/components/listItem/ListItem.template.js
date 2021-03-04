import { PropTypes } from 'prop-types'
import { Progress, Typography } from 'antd'
import { CustomAvatar } from 'app/components'
import { RightOutlined } from '@ant-design/icons'
import { Row, Col, Box } from '@qonsoll/react-design'

const { Title, Text } = Typography

const ListItem = (props) => {
  const { type, name, image, info } = props

  return (
    <Row display="flex" v="center">
      <Col cw="auto" m={2}>
        <CustomAvatar shape={type} name={name} src={image} size="large" />
      </Col>
      <Col m={2}>
        <Box textAlign="left">
          <Title level={5}>{name}</Title>
          {type === 'badge' ? (
            <Progress
              strokeColor={{
                '0%': '#108ee9',
                '100%': '#87d068'
              }}
              percent={info}
            />
          ) : (
            <Text>{info}</Text>
          )}
        </Box>
      </Col>
      <Col cw="auto" m={2}>
        <RightOutlined />
      </Col>
    </Row>
  )
}

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string
}

export default ListItem
