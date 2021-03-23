import moment from 'moment'
import './Card.styles.css'
import { PropTypes } from 'prop-types'
import { ROUTES_PATHS } from 'app/constants'
import {
  USERS,
  COMPANIES,
  PROJECTS,
  PERSONAL_BADGES,
  BADGES
} from 'app/constants/collections'
import { CustomAvatar } from 'app/components'
import { useHistory } from 'react-router-dom'
import { Row, Col, Box } from '@qonsoll/react-design'
import { Typography, Progress, Badge, Button, Popconfirm, message } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { deleteData } from 'app/services'
import { PersonalBadgeSimpleForm } from 'app/domains/PersonalBadge/components/form'
import { useUserAuthContext } from 'app/context'

const { Title, Text } = Typography

const Card = (props) => {
  const { type, data, userId } = props

  const session = useUserAuthContext()
  const history = useHistory()

  const badgeAssignButtonRule = userId !== session.uid && type === 'user'
  const deleteButtonRule = userId
    ? session.userDBData.role === 'Superadmin' && userId !== session.uid
    : session.userDBData.role === 'Superadmin'
  const editButtonRule =
    (userId && userId === session.uid) ||
    session.userDBData.role === 'Superadmin'
  const confirmText = 'Are you sure you want to delete?'
  const birthday =
    data.birthday && moment(data.birthday.toDate()).format('Do MMMM YYYY')
  const userLvl = Math.floor(data.currentExp / 1000)
  const userExperience = (data.currentExp % 1000) * 0.1
  const badgeProgress = (100 / data.maxLvl) * data.currentLvl
  const badgeStatus = (data.receiveData && 'Unlocked!') || 'Locked.'

  const cardTypeMap = {
    user: {
      name: `${data.firstName} ${data.surname}`,
      collection: USERS,
      path: ROUTES_PATHS.USER_EDIT.replace(':id', data.id),
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
      collection: BADGES,
      path: ROUTES_PATHS.BADGE_EDIT.replace(':id', data.id),
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
      collection: PERSONAL_BADGES,
      path: ROUTES_PATHS.BADGE_EDIT.replace(':id', data.id),
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
      collection: COMPANIES,
      path: ROUTES_PATHS.COMPANY_EDIT.replace(':id', data.id),
      shape: 'enterprise',
      layout: (
        <Col>
          <Box textAlign="center" mb={2}>
            <Text type="secondary">
              {data.address?.city}, {data.address?.country}
            </Text>
          </Box>
          <Box textAlign="justify" mb={4}>
            <Text>{data.description}</Text>
          </Box>
        </Col>
      )
    },
    project: {
      name: `${data.name}`,
      collection: PROJECTS,
      path: ROUTES_PATHS.PROJECT_EDIT.replace(':id', data.id),
      shape: 'enterprise',
      layout: (
        <Col>
          <Box display="grid" textAlign="center" mb={4}>
            <Text type="secondary">{data.companyName}</Text>
          </Box>
          <Box textAlign="justify" mb={4}>
            <Text>{data.description}</Text>
          </Box>
        </Col>
      )
    }
  }

  const name = cardTypeMap[type].name
  const shape = cardTypeMap[type].shape
  const path = cardTypeMap[type].path
  const collection = cardTypeMap[type].collection

  const hadleDelete = () => {
    deleteData(collection, data.id)
      .then(() => message.success('Item was deleted.'))
      .then(history.goBack())
  }

  return (
    <>
      <Row h="center" mb={3} style={{ position: 'relative' }}>
        <Col cw="auto">
          <Box display="flex" position="absolute" right="0">
            {badgeAssignButtonRule && (
              <Box mr={1}>
                <PersonalBadgeSimpleForm
                  userId={userId}
                  currentExp={data.currentExp}
                />
              </Box>
            )}
            {editButtonRule && (
              <Box mr={1}>
                <Button
                  type="primary"
                  shape="circle"
                  icon={<EditOutlined />}
                  onClick={() => history.push(path)}
                />
              </Box>
            )}

            <Popconfirm
              placement="bottom"
              title={confirmText}
              onConfirm={hadleDelete}
              okText="Yes"
              cancelText="No">
              {deleteButtonRule && (
                <Button
                  type="primary"
                  danger
                  shape="circle"
                  icon={<DeleteOutlined />}
                />
              )}
            </Popconfirm>
          </Box>
          <Box width="auto">
            <CustomAvatar
              shape={shape}
              size={125}
              src={data.image}
              name={name}
            />
          </Box>
        </Col>
      </Row>

      <Row mb={2}>
        <Col>
          <Box textAlign="center" verticalAlign="center">
            <Title level={2}>
              {name}{' '}
              {(type === 'badge' || type === 'personalBadge') && (
                <Badge
                  count={`+${data.experience} EXP`}
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
