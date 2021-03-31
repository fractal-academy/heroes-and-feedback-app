import { Title } from 'app/components'
import { BadgeSimpleForm } from 'app/domains/Badge/components/form'

const BadgeCreate = (props) => {
  const titleText = 'New badge'

  return (
    <>
      <Title titleText={titleText} withName />
      <BadgeSimpleForm />
    </>
  )
}

export default BadgeCreate
