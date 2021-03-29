import { deleteData } from 'app/services'
import { useHistory } from 'react-router-dom'
import { useUserAuthContext } from 'app/context'
import { Menu, Button, Dropdown, Popconfirm, message } from 'antd'
import { PersonalBadgeSimpleForm } from 'app/domains/PersonalBadge/components/form'
import {
  EditOutlined,
  DeleteOutlined,
  EllipsisOutlined
} from '@ant-design/icons'

const CustomDropdown = (props) => {
  const { userId, type, data, path, collection } = props

  const history = useHistory()
  const session = useUserAuthContext()

  const hadleDelete = () => {
    deleteData(collection, data.id)
      .then(() => message.success('Item was deleted.'))
      .then(history.goBack())
  }

  const confirmText = 'Are you sure you want to delete?'
  const badgeAssignButtonRule = userId !== session.uid && type === 'user'
  const deleteButtonRule = userId
    ? session.userDBData.role === 'Superadmin' && userId !== session.uid
    : session.userDBData.role === 'Superadmin'
  const editButtonRule =
    (userId && userId === session.uid) ||
    session.userDBData.role === 'Superadmin'

  const menu = (
    <Menu>
      {badgeAssignButtonRule && (
        <Menu.Item>
          <PersonalBadgeSimpleForm
            withText={true}
            userId={userId}
            currentExp={data?.currentExp}
          />
        </Menu.Item>
      )}
      {editButtonRule && (
        <Menu.Item icon={<EditOutlined />} onClick={() => history.push(path)}>
          Edit
        </Menu.Item>
      )}
      {deleteButtonRule && (
        <Menu.Item icon={<DeleteOutlined />} danger>
          <Popconfirm
            placement="bottom"
            title={confirmText}
            onConfirm={hadleDelete}
            okText="Yes"
            cancelText="No">
            Delete
          </Popconfirm>
        </Menu.Item>
      )}
    </Menu>
  )

  return (
    <Dropdown overlay={menu} placement="bottomRight" trigger={['click']}>
      <Button shape="circle" icon={<EllipsisOutlined />} />
    </Dropdown>
  )
}

export default CustomDropdown
