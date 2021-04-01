import './ListItem.styles.css'
import useMedia from 'use-media'
import { PropTypes } from 'prop-types'
import { ROUTES_PATHS } from 'app/constants'
import { CustomAvatar } from 'app/components'
import { useHistory } from 'react-router-dom'
import { useUserAuthContext } from 'app/context'
import { Progress, Typography, Button, Popconfirm, Avatar } from 'antd'
import { PersonalBadgeSimpleForm } from 'app/domains/PersonalBadge/components/form'
import {
  RightOutlined,
  ImportOutlined,
  DeleteOutlined
} from '@ant-design/icons'
import { Row, Col, Box } from '@qonsoll/react-design'

const { Title, Link, Text } = Typography

const ListItem = (props) => {
  const {
    type,
    data,
    subdata,
    currentUserId,
    onProjectMemberDelete,
    onPersonalBadgeDelete,
    itemIds
  } = props

  const history = useHistory()
  const session = useUserAuthContext()
  const isNarrow = useMedia({ minWidth: '375px' })

  const currentUsersListItem = currentUserId === data.id
  const usersPersonalBadgesRule =
    currentUserId !== data.userId && type === 'personalBadge'
  const ItemTypeMap = {
    user: {
      image: 'user',
      imgSize: (isNarrow && 60) || 40,
      style: 'info',
      name: `${data.firstName} ${data.surname}`,
      info: data.email || data.role,
      path: ROUTES_PATHS.USER_SHOW
    },
    badge: {
      image: 'badge',
      imgSize: 35,
      style: 'description',
      name: `${data.name}`,
      info: data.description,
      path: ROUTES_PATHS.BADGE_SHOW
    },
    personalBadge: {
      image: 'badge',
      imgSize: 35,
      style: 'description',
      name: `${data.name}`,
      info: data.currentLvl,
      path: ROUTES_PATHS.BADGE_SHOW,
      personalBadgeProgress: ((data.currentLvl / data.maxLvl) * 100).toFixed(1),
      personalBadgeValue: `${data.currentLvl}/${data.maxLvl} lvl`
    },
    company: {
      image: 'enterprise',
      imgSize: 60,
      style: 'description',
      name: `${data.name}`,
      info: data.description,
      path: ROUTES_PATHS.COMPANY_SHOW
    },
    project: {
      image: 'enterprise',
      imgSize: 60,
      style: 'description',
      name: `${data.name}`,
      info: data.description,
      path: ROUTES_PATHS.PROJECT_SHOW
    }
  }

  const image = ItemTypeMap[type].image
  const imgSize = ItemTypeMap[type].imgSize
  const info = ItemTypeMap[type].info
  const name = ItemTypeMap[type].name
  const style = ItemTypeMap[type].style
  const path = ItemTypeMap[type].path.replace(':id', data.id)
  const itemLinks = itemIds.map((item) =>
    ItemTypeMap[type].path.replace(':id', item)
  )
  const accessRules = session.userDBData.role === 'Superadmin'
  const personalBadgeValue = ItemTypeMap[type]?.personalBadgeValue
  const progressBarValue = ItemTypeMap[type]?.personalBadgeProgress

  return (
    <Row
      display="flex"
      v="center"
      style={{ backgroundColor: '#332E59', borderRadius: '10px' }}
      mb={2}>
      <Col cw="auto" m={2}>
        <CustomAvatar
          shape={image}
          name={name}
          src={data.image}
          size={imgSize}
        />
      </Col>
      <Col m={2}>
        <Box textAlign="left">
          <Title level={5}>
            <Link onClick={() => history.push(path)}>{name}</Link>
          </Title>
          {type === 'personalBadge' ? (
            <Progress
              style={{ alignItems: 'center' }}
              className="progressBar"
              strokeColor={{
                '0%': '#3bc0c7',
                '20%': '#6149ff',
                '40%': '#A940AB',
                '80%': '#FFB393',
                '100%': '#88FDC4'
              }}
              percent={progressBarValue}
              format={() => <Col mb={1}>{personalBadgeValue}</Col>}
            />
          ) : type === 'user' ? (
            <Avatar.Group>
              {subdata
                ?.filter((item) => item.userId === data.id)
                .map((item) => (
                  <CustomAvatar
                    key={item.id}
                    shape="badge"
                    name={name}
                    src={item.image}
                    size={18}
                  />
                ))}
            </Avatar.Group>
          ) : (
            <Box className={style}>
              <Text type="secondary">{info || 'No information.'}</Text>
            </Box>
          )}
        </Box>
      </Col>
      {usersPersonalBadgesRule && (
        <Col cw="auto" m={2}>
          <Popconfirm
            title="Are you sure  to remove this badge from this user?"
            onConfirm={() => onPersonalBadgeDelete(data.id)}
            okText="Yes"
            cancelText="No">
            <Button
              shape="circle"
              type="primary"
              danger
              icon={<DeleteOutlined />}
            />
          </Popconfirm>
        </Col>
      )}
      {type === 'user' && !currentUsersListItem && isNarrow && (
        <Col cw="auto" m={2}>
          <PersonalBadgeSimpleForm
            userId={data.id}
            currentExp={data.currentExp}
          />
        </Col>
      )}
      {data.projectMemberId && accessRules && (
        <Col cw="auto" m={2}>
          <Popconfirm
            title="Are you sure you want to remove this member from the team?"
            onConfirm={() => onProjectMemberDelete(data.projectMemberId)}
            okText="Yes"
            cancelText="No">
            <Button
              shape="circle"
              type="primary"
              danger
              icon={<ImportOutlined />}
            />
          </Popconfirm>
        </Col>
      )}
      {type !== 'personalBadge' && (
        <Col cw="auto" m={2}>
          <Button
            shape="circle"
            type="text"
            onClick={() =>
              history.push(path, {
                itemLinks: itemLinks
              })
            }>
            <RightOutlined />
          </Button>
        </Col>
      )}
    </Row>
  )
}

ListItem.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
}

export default ListItem
