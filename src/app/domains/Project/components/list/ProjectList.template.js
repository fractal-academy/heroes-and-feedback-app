import { List } from 'app/components'

const companiesMap = [
  {
    id: '0',
    name: 'FOI Helse',
    image:
      'https://cdn.dribbble.com/users/5746/screenshots/3676209/dribbble-spiderman-salvatier.jpg'
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
