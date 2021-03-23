import { List } from 'app/components'

const ProjectList = (props) => {
  const { data } = props

  return <List type="project" data={data} />
}

export default ProjectList
