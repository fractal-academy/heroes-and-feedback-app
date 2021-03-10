import './ListItem.styles.css'
import { PropTypes } from 'prop-types'

import { ROUTES_PATHS } from 'app/constants'
import { Progress, Typography } from 'antd'
import { CustomAvatar } from 'app/components'
import { useHistory } from 'react-router-dom'
import { RightOutlined } from '@ant-design/icons'
import { Row, Col, Box } from '@qonsoll/react-design'

const { Title, Text } = Typography

const ListItem = (props) => {
  const { type, data } = props

  const history = useHistory()

  const ItemTypeMap = {
    user: {
      image: 'user',
      style: 'info',
      name: `${data.firstName} ${data.surname}`,
      info: data.email,
      path: ROUTES_PATHS.USER_SHOW
    },
    badge: {
      image: 'badge',
      style: 'description',
      name: `${data.name}`,
      info: data.description,
      path: ROUTES_PATHS.BADGE_SHOW
    },
    company: {
      image: 'enterprise',
      style: 'description',
      name: `${data.name}`,
      info: data.description,
      path: ROUTES_PATHS.COMPANY_SHOW
    },
    project: {
      image: 'enterprise',
      style: 'description',
      name: `${data.name}`,
      info: data.description,
      path: ROUTES_PATHS.PROJECT_SHOW
    }
  }

  const image = ItemTypeMap[type].image
  const info = ItemTypeMap[type].info
  const name = ItemTypeMap[type].name
  const path = ItemTypeMap[type].path.replace(':id', data.id)
  const style = ItemTypeMap[type].style

  return (
    <Row display="flex" v="center">
      <Col cw="auto" m={2}>
        <CustomAvatar shape={image} name={name} src={data.image} size={50} />
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
              percent={data.maxLvl}
            />
          ) : (
            <Box className={style}>
              <Text type="secondary">{info || 'No description.'}</Text>
            </Box>
          )}
        </Box>
      </Col>
      <Col cw="auto" m={2}>
        <RightOutlined onClick={() => history.push(path)} />
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
