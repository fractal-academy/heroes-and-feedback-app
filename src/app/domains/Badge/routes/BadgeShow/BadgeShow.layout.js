import { useParams, useHistory } from 'react-router-dom'
import { Row, Col } from '@qonsoll/react-design'
import { BADGES } from 'app/constants/collections'
import { getCollectionRef } from 'app/services/Firestore'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import { BadgeAdvancedView } from 'app/domains/Badge/components/views'
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons'
import { Button } from 'antd'

const BadgeShow = (props) => {
  const { id } = useParams()

  const [data] = useDocumentData(getCollectionRef(BADGES).doc(id))

  const history = useHistory()

  const itemIndex = history.location?.state?.itemLinks.findIndex(
    (item) => item === history.location.pathname
  )
  const previousItem = history.location?.state?.itemLinks?.[itemIndex - 1]
  const nextItem = history.location?.state?.itemLinks?.[itemIndex + 1]

  return (
    <>
      <Row noGutters h="center">
        <Col>{data && <BadgeAdvancedView data={data} />}</Col>
      </Row>
      <Row h="center">
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
    </>
  )
}

export default BadgeShow
