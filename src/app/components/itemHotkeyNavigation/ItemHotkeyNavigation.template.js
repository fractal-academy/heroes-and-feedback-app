import { Row, Col } from '@qonsoll/react-design'
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useHistory } from 'react-router-dom'

const ItemHotkeyNavigation = () => {
  const history = useHistory()

  const itemIndex = history.location?.state?.itemLinks.findIndex(
    (item) => item === history.location.pathname
  )
  const previousItem = history.location?.state?.itemLinks?.[itemIndex - 1]
  const nextItem = history.location?.state?.itemLinks?.[itemIndex + 1]

  return (
    <Row h="center" v="bottom">
      <Col cw="auto">
        <Button
          disabled={!Boolean(previousItem)}
          shape="circle"
          type="text"
          icon={<CaretLeftOutlined />}
          onClick={() =>
            history.push(previousItem, {
              itemLinks: history.location?.state?.itemLinks
            })
          }
        />
        <Button
          disabled={!Boolean(nextItem)}
          shape="circle"
          type="text"
          icon={<CaretRightOutlined />}
          onClick={() =>
            history.push(nextItem, {
              itemLinks: history.location?.state?.itemLinks
            })
          }
        />
      </Col>
    </Row>
  )
}

export default ItemHotkeyNavigation
