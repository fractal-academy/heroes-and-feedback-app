import { Row } from '@qonsoll/react-design'
import { Button } from 'antd'
import { logOut } from 'app/services/Auth'

const Header = () => {
  return (
    <Row h="right" mb={2}>
      <Button onClick={logOut}>Log Out</Button>
    </Row>
  )
}

export default Header
