import { Card } from 'app/components'

const ProjectAdvancedView = (props) => {
  const { data } = props

  return <Card type="project" data={data} />
}

export default ProjectAdvancedView
