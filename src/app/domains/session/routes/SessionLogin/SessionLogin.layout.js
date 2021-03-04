import { Box } from '@qonsoll/react-design'
import { SessionSimpleView } from 'app/domains/Session/components/views'

const SessionLogin = (props) => {
  return (
    <Box
      textAlign="center"
      border="lightgray"
      borderWidth="1px"
      borderStyle="solid"
      m={2}>
      <SessionSimpleView />
    </Box>
  )
}

export default SessionLogin
