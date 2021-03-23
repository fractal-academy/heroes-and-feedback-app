import { Card } from 'app/components'

const UserAdvancedView = (props) => {
  const { data, id } = props

  return (
    <>
      <Card data={data} type="user" userId={id} />
    </>
  )
}

export default UserAdvancedView
