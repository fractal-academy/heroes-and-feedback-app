import moment from 'moment'
import { PropTypes } from 'prop-types'
import { CustomAvatar } from 'app/components'
import { Row, Col, Box } from '@qonsoll/react-design'
// import { EditOutlined } from '@ant-design/icons'
import { Typography, Progress, Badge } from 'antd'

const { Title, Text } = Typography

const Card = (props) => {
  const { type, data } = props

  const birthday =
    data.birthday && moment(data.birthday.toDate()).format('Do MMMM YYYY')
  const userLvl = Math.floor(data.currentExp / 1000)
  const userExperience = (data.currentExp % 1000) * 0.1
  const badgeProgress = (100 / data.maxLvl) * data.currentLvl
  const badgeStatus = (data.receiveData && 'Unlocked!') || 'Locked.'

  const cardTypeMap = {
    user: {
      name: `${data.firstName} ${data.surname}`,
      shape: 'user',
      layout: (
        <Col>
          <Box display="grid" textAlign="center">
            <Text type="success">{data.role}</Text>
            <Text type="secondary">{data.email}</Text>
            {birthday && <Text type="secondary">{birthday}</Text>}
          </Box>
          <Progress
            strokeColor={{
              '0%': '#108ee9',
              '100%': '#87d068'
            }}
            percent={userExperience}
            format={() => (
              <Title level={4} type="secondary">
                {userLvl} lvl
              </Title>
            )}
          />
        </Col>
      )
    },
    badge: {
      name: `${data.name}`,
      shape: 'badge',
      layout: (
        <Col>
          <Box textAlign="justify">
            <Text>{data.description}</Text>
          </Box>
          <Box textAlign="center" mt={6}>
            <Title level={4}>Maximum level: {data.maxLvl}</Title>
          </Box>
        </Col>
      )
    },
    personalBadge: {
      name: `${data.name}`,
      shape: 'badge',
      layout: (
        <Col>
          <Box textAlign="justify">
            <Text>{data.description}</Text>
          </Box>
          {data.receiveData && (
            <Progress
              strokeColor={{
                '0%': '#108ee9',
                '100%': '#87d068'
              }}
              percent={badgeProgress}
              format={() => (
                <Title level={4} type="secondary">
                  {data.maxLvl} lvl
                </Title>
              )}
            />
          )}
          <Box textAlign="center" mt={6}>
            <Title level={4}>{badgeStatus}</Title>
          </Box>
        </Col>
      )
    },
    company: {
      name: `${data.name}`,
      shape: 'enterprise',
      layout: (
        <Col>
          <Box textAlign="center" mb={2}>
            <Text type="secondary">
              {data.address?.city}, {data.address?.country}
            </Text>
          </Box>
          <Box textAlign="justify">
            <Text>{data.description}</Text>
          </Box>
        </Col>
      )
    },
    project: {
      name: `${data.name}`,
      shape: 'enterprise',
      layout: (
        <Col>
          <Box textAlign="justify" mb={4}>
            <Text>{data.description}</Text>
          </Box>
          <Box display="grid" textAlign="center">
            <Text type="secondary">{data.company?.name}</Text>
          </Box>
        </Col>
      )
    }
  }

  const name = cardTypeMap[type].name
  const shape = cardTypeMap[type].shape

  return (
    <>
      <Row h="center" m={4}>
        <Col cw="auto">
          <CustomAvatar shape={shape} size={125} src={data.image} name={name} />
        </Col>
      </Row>
      <Row mb={2}>
        <Col>
          <Box textAlign="center" verticalAlign="center">
            <Title level={2}>
              {name}{' '}
              {(type === 'badge' || type === 'personalBadge') && (
                <Badge
                  count={`+${data.lvlExperience} EXP`}
                  overflowCount={1000}
                  style={{ backgroundColor: '#87d068' }}
                />
              )}
            </Title>
          </Box>
        </Col>
      </Row>
      <Row>{cardTypeMap[type].layout}</Row>
    </>
  )
}

Card.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
}

export default Card
