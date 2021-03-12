import App from './app'
import ReactDOM from 'react-dom'
import { UserAuthProvider } from 'app/context'

ReactDOM.render(
  <UserAuthProvider>
    <App />
  </UserAuthProvider>,
  document.getElementById('root')
)
