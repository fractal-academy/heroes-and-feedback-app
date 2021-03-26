import { deleteData } from 'app/services'
import { List } from 'app/components'
import { PROJECT_MEMBER } from 'app/constants/collections'
import { message } from 'antd'

const ProjectMemberList = (props) => {
  const { data, currentUserId } = props

  const editedData =
    data &&
    data.map((item) => ({ ...item, id: item.userId, projectMemberId: item.id }))

  const onProjectMemberDelete = (projectMemberId) => {
    try {
      deleteData(PROJECT_MEMBER, projectMemberId)
      message.success('Successfully deleted')
    } catch (e) {
      console.log(e)
      message.error('Error occured during deletion. Try again')
    }
  }

  return (
    <List
      type="user"
      data={editedData}
      currentUserId={currentUserId}
      onProjectMemberDelete={onProjectMemberDelete}></List>
  )
}

export default ProjectMemberList
