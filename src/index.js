import App from './app'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { UserProvider } from 'app/context/UserContext'

ReactDOM.render(
  <UserProvider>
    <Router>
      <App />
    </Router>
  </UserProvider>,
  document.getElementById('root')
)
