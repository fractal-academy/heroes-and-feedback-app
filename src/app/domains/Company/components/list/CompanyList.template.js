import { List } from 'app/components'

const companiesMap = [
  {
    id: '0',
    name: 'Senseteq Global',
    info: 'Hordaland, Norway',
    image:
      'https://cdn.dribbble.com/users/5746/screenshots/3676209/dribbble-spiderman-salvatier.jpg'
  },
  {
    id: '1',
    name: 'Senseteq Khm.',
    info: 'Khmelnytskyi, Ukraine'
  }
]

const CompanyList = (props) => {
  return <List type="enterprise" data={companiesMap} />
}

export default CompanyList
