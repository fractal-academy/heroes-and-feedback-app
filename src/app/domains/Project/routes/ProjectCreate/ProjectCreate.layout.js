import { Title } from 'app/components'
import { ProjectSimpleForm } from 'app/domains/Project/components/form'

const ProjectCreate = (props) => {
  const titleText = 'Create project'

  return (
    <>
      <Title withName titleText={titleText} />
      <ProjectSimpleForm />
    </>
  )
}

export default ProjectCreate
