import { Avatar } from 'antd'
import './CustomAvatar.styles.css'

const imageMap = {
  badge: (src, size, name) => (
    <div className="polygon">
      <img
        alt="badge"
        src={src || './assets/image-placeholder.png'}
        className="avatar"
      />
    </div>
  ),
  user: (src, size, name) => (
    <Avatar alt="avatar" src={src} shape="circle" size={size || 64}>
      {name && name[0]}
    </Avatar>
  ),
  enterprise: (src, size, name) => (
    <Avatar alt="avatar" src={src} shape="square" size={size || 64}>
      {name && name[0]}
    </Avatar>
  )
}

const CustomAvatar = (props) => {
  const { shape, size, src, name } = props
  return imageMap[shape](src, size, name)
}

export default CustomAvatar
