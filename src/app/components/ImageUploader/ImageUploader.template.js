import { Upload, message } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import React from 'react'
import { useState } from 'react'
import { storage, firestore } from 'app/services'
import { setData } from 'app/services'
import { CustomAvatar } from 'app/components/'
import { useDocumentData } from 'react-firebase-hooks/firestore'

const ImageUploader = (props) => {
  // INTERFACE
  const { shape, collection, itemId, size } = props

  // STATE
  const [loading, setLoading] = useState(false)

  // CUSTOM HOOKS
  const [value] = useDocumentData(firestore.collection(collection).doc(itemId))

  // HELPER FUNCTIONS
  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!')
    }
    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!')
    }
    return isJpgOrPng && isLt2M
  }

  const upload = async (file) => {
    try {
      setLoading(true)
      try {
        const avatarRef = storage.createRefFromULR(value.image)
        await storage.delete(avatarRef)
      } catch (e) {
        console.log('internal', e)
      }
      const res = storage.child(`images/${file.file.name}`).put(file.file)
      res.on(
        'state_changed',
        () => {},
        () => {},
        async () => {
          const url = await res.snapshot.ref.getDownloadURL()
          setData(collection, itemId, { image: url })
          setLoading(false)
        }
      )
    } catch (e) {
      console.log(e)
    }
  }

  // TEMPLATE
  return (
    <>
      {value ? (
        <Upload
          name="avatar"
          customRequest={upload}
          beforeUpload={beforeUpload}
          showUploadList={false}>
          {loading ? (
            <LoadingOutlined />
          ) : (
            <CustomAvatar
              shape={shape}
              src={value.image}
              size={size}
              name={value.name}
            />
          )}
        </Upload>
      ) : (
        <PlusOutlined />
      )}
    </>
  )
}

export default ImageUploader
