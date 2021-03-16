import { Row, Col, Box } from '@qonsoll/react-design'
import { Typography } from 'antd'
import { CustomAvatar } from 'app/components'
import './BadgeSimpleView.style.css'

const BadgeSimpleView = (props) => {
  const { data, selected } = props

  return (
    <Row v="center" h="center">
      <Col
        cw="auto"
        borderRadius={6}
        p={2}
        className={`${!selected && 'badge-card'} ${selected && 'selected'}`}>
        <CustomAvatar
          shape="badge"
          src={data.image}
          size={60}
          name={data.name}
        />
        <Box textAlign="center">
          <Typography.Text>{data.name}</Typography.Text>
        </Box>
      </Col>
    </Row>
  )
}

export default BadgeSimpleView
