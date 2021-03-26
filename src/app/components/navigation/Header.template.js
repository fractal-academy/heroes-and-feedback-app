import { Button } from 'antd'
import { Row, Col } from '@qonsoll/react-design'
import { LogoutOutlined } from '@ant-design/icons'
import { UserSimpleView } from 'app/domains/User/components/views'

const Header = () => {
  return (
    <Row noGutters h="right">
      <Col cw="auto" display="flex">
        <UserSimpleView size={32} />
        <Button
          type="primary"
          shape="circle"
          icon={<LogoutOutlined />}
          danger></Button>
      </Col>
    </Row>
  )
}

export default Header
