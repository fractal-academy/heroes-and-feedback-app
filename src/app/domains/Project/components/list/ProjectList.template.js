import { List } from 'app/components/list'

const companiesMap = [
  {
    id: '0',
    name: 'FOI Helse',
    image:
      'https://i.pinimg.com/474x/11/cf/91/11cf91fdfca454624e970f0b96cb8dc4.jpg'
  },
  {
    id: '1',
    name: 'Worktube',
    info: 'Easy hiring of workers.'
  }
]

const ProjectList = (props) => {
  return <List type="enterprise" data={companiesMap} />
}

export default ProjectList
