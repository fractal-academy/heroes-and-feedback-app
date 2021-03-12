import { Row } from '@qonsoll/react-design'
import { Button } from 'antd'
import { logOut } from 'app/services/Auth'
import { useHistory } from 'react-router-dom'

const Header = () => {
  const history = useHistory()
  return (
    <Row h="right" mb={2}>
      <Button onClick={() => logOut(history)}>Log Out</Button>
    </Row>
  )
}

export default Header
