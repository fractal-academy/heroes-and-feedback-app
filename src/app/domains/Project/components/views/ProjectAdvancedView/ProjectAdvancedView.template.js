import { Card } from 'app/components'

const data = {
  id: 0,
  name: 'Worktube AS',
  company: {
    id: 0,
    name: 'Senseteq Global'
  },
  address: 'Khmelnytskyi, Urkaine',
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  image:
    'https://cdn.dribbble.com/users/5746/screenshots/3676209/dribbble-spiderman-salvatier.jpg'
}

const ProjectAdvancedView = (props) => {
  return <Card type="project" data={data} />
}

export default ProjectAdvancedView
