import { PropTypes } from 'prop-types'
import { Typography, Progress } from 'antd'
import { CustomAvatar } from 'app/components'
import { Row, Col, Box } from '@qonsoll/react-design'

const { Title, Text } = Typography

const Card = (props) => {
  const { type, data } = props

  const userLvl = Math.floor(data.currentExp / 1000)
  const userExperience = (data.currentExp % 1000) * 0.1
  const badgeProgress = (100 / data.maxLvl) * data.currentLvl
  const badgeStatus = (data.receiveData && 'Unlocked!') || 'Locked.'

  const cardTypeMap = {
    user: {
      name: `${data.firstName} ${data.secondName}`,
      shape: 'user',
      layout: (
        <>
          <Box display="grid" textAlign="center">
            <Text type="success">{data.role}</Text>
            <Text type="secondary">{data.mail}</Text>
            <Text type="secondary">{data.birth}</Text>
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
        </>
      )
    },
    badge: {
      name: `${data.name}`,
      shape: 'badge',
      layout: (
        <>
          {data.receiveData && (
            <Progress
              strokeColor={{
                '0%': '#108ee9',
                '100%': '#87d068'
              }}
              percent={badgeProgress}
              format={() => (
                <Title level={4} type="secondary">
                  {data.maxLvl}
                </Title>
              )}
            />
          )}
          <Box textAlign="center" mt={6}>
            <Title level={4}>{badgeStatus}</Title>
          </Box>
        </>
      )
    },
    company: {
      name: `${data.name}`,
      shape: 'enterprise',
      layout: (
        <Box textAlign="center">
          <Text type="secondary">{data.address}</Text>
        </Box>
      )
    },
    project: {
      name: `${data.name}`,
      shape: 'enterprise',
      layout: (
        <Box display="grid" textAlign="center">
          <Text type="secondary">{data.company?.name}</Text>
        </Box>
      )
    }
  }

  const shape = cardTypeMap[type].shape
  const name = cardTypeMap[type].name

  return (
    <Row>
      <Col>
        <Row h="center" m={4}>
          <Col cw="auto">
            <CustomAvatar shape={shape} size={125} src={data.image} />
          </Col>
        </Row>
        <Row mb={2}>
          <Col>
            <Box textAlign="center">
              <Title level={2}>{name}</Title>
            </Box>
          </Col>
        </Row>
        {type !== 'user' && (
          <Row mb={4}>
            <Col>
              <Box textAlign="justify">
                <Text>{data.description}</Text>
              </Box>
            </Col>
          </Row>
        )}
        <Row>
          <Col>{cardTypeMap[type].layout}</Col>
        </Row>
      </Col>
    </Row>
  )
}

Card.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.array
}

export default Card
