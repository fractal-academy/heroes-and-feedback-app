import { List } from 'app/components'

const ProjectMemberList = (props) => {
  const { data } = props

  return <List type="user" data={data}></List>
}

export default ProjectMemberList
