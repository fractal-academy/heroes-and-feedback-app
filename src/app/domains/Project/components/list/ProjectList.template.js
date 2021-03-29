import { List } from 'app/components'

const ProjectList = (props) => {
  const { data } = props

  const message = 'Enter project name...'

  return <List type="project" data={data} message={message} />
}

export default ProjectList
