import { Upload, message } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { storage } from 'app/services'
import { CustomAvatar } from 'app/components'
import { Row, Col } from '@qonsoll/react-design'
import './ImageUploader.style.css'

const ImageUploader = (props) => {
  // INTERFACE
  const { shape, src, name, size, value, onChange } = props

  // STATE
  const [loading, setLoading] = useState(false)
  const [currentSource, setCurrentSource] = useState(src)

  // HELPER FUNCTIONS
  const triggerChange = (src) => {
    onChange?.(src)
  }

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!')
    }
    const isLessThan2Megabytes = file.size / 1024 / 1024 < 2
    if (!isLessThan2Megabytes) {
      message.error('Image must be smaller than 2MB!')
    }
    return isJpgOrPng && isLessThan2Megabytes
  }

  const upload = async (file) => {
    try {
      setLoading(true)
      try {
        const imageRef = storage.refFromURL(currentSource)
        await imageRef.delete()
      } catch (e) {
        console.log('internal', e)
      }
      const res = storage.ref().child(`images/${file.file.name}`).put(file.file)
      res.on(
        'state_changed',
        () => {},
        () => {},
        async () => {
          const url = await res.snapshot.ref.getDownloadURL()
          setLoading(false)
          triggerChange(url)
          setCurrentSource(url)
        }
      )
    } catch (e) {
      console.log(e)
    }
  }

  // TEMPLATE
  return (
    <Row h="center">
      <Col cw="auto">
        <Upload
          value={value}
          name="avatar"
          customRequest={upload}
          beforeUpload={beforeUpload}
          showUploadList={false}>
          {loading ? (
            <LoadingOutlined />
          ) : (
            <CustomAvatar
              shape={shape}
              src={currentSource}
              size={size}
              name={name}
              className="image-component"
            />
          )}
        </Upload>
      </Col>
    </Row>
  )
}

export default ImageUploader
