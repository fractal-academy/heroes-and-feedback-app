import { Row, Col, Box } from '@qonsoll/react-design'
import { Typography } from 'antd'
import { CustomAvatar } from 'app/components'
import './BadgeSimpleView.style.css'

const BadgeSimpleView = (props) => {
  const { data, selected, size } = props

  const textWidth = size * 2

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
          size={size}
          name={data.name}
        />
        <Box textAlign="center" maxWidth={textWidth}>
          <Typography.Text>{data.name}</Typography.Text>
        </Box>
      </Col>
    </Row>
  )
}

export default BadgeSimpleView
