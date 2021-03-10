import { Avatar } from 'antd'
import './CustomAvatar.styles.css'

// CONSTANTS
const imageMap = {
  badge: (src, size, name) => (
    <div
      className="polygon"
      style={{
        maxHeight: `${size * Math.sqrt(3)}px`,
        minWidth: `${2 * size}px`,
        minHeight: `${size * Math.sqrt(3)}px`
      }}>
      <img
        alt=""
        src={src || './assets/image-placeholder.png'}
        style={{ width: `${size * 2}px`, height: `${size * 2}px` }}
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
  // INTERFACE
  const { shape, size, src, name } = props

  // TEMPLATE
  return imageMap[shape](src, size, name)
}

export default CustomAvatar
