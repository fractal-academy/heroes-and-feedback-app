import { deleteData } from 'app/services'
import { List } from 'app/components'
import { message } from 'antd'
import { PROJECT_MEMBER } from 'app/constants/collections'

const ProjectMemberList = (props) => {
  const { data, currentUserId } = props

  const placeholderMessage = 'Enter member name...'
  const editedData =
    data &&
    data.map((item) => ({ ...item, id: item.userId, projectMemberId: item.id }))

  const onProjectMemberDelete = (projectMemberId) => {
    try {
      deleteData(PROJECT_MEMBER, projectMemberId)
      message.success('Successfully deleted.')
    } catch (error) {
      console.log(error)
      message.error('Error occured during deletion. Try again.')
    }
  }

  return (
    <List
      type="user"
      data={editedData}
      message={placeholderMessage}
      currentUserId={currentUserId}
      onProjectMemberDelete={onProjectMemberDelete}></List>
  )
}

export default ProjectMemberList
