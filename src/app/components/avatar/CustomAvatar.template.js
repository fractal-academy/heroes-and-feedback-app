import { Avatar } from 'antd'
import './CustomAvatar.styles.css'

const imageMap = {
  badge: (src) => (
    <div className="polygon">
      <img
        alt="badge"
        src={src || './assets/image-placeholder.png'}
        className="avatar"
      />
    </div>
  ),
  avatar: (src, size) => (
    <Avatar
      alt="avatar"
      src={src || './assets/avatar-placeholder.png'}
      shape="circle"
      size={size || 64}
    />
  ),
  logo: (src, size) => (
    <Avatar
      alt="avatar"
      src={src || './assets/avatar-placeholder.png'}
      shape="square"
      size={size || 64}
    />
  )
}

const CustomAvatar = (props) => {
  const { shape, size, src } = props
  return imageMap[shape](src, size)
}

export default CustomAvatar
