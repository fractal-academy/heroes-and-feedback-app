import { List } from 'app/components'

const ProjectMemberList = (props) => {
  const { data, userId } = props

  return <List type="user" data={data} currentUserId={userId}></List>
}

export default ProjectMemberList
