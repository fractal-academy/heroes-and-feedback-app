import { useHistory } from 'react-router-dom'
import { Box } from '@qonsoll/react-design'
import { Button, Divider, Typography } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'

const Title = (props) => {
  const { titleText, withName } = props

  const history = useHistory()

  return (
    <Box display="flex" my={3}>
      <Button shape="circle" type="text" onClick={() => history.goBack()}>
        <ArrowLeftOutlined />
      </Button>

      {withName && (
        <>
          <Divider type="vertical" style={{ height: 'inherit' }} />

          <Typography.Title level={4} style={{ marginBottom: 0 }}>
            {titleText}
          </Typography.Title>
        </>
      )}
    </Box>
  )
}

export default Title
