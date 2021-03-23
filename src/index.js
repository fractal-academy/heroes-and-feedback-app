import App from './app'
import ReactDOM from 'react-dom'
import { UserAuthProvider } from 'app/context'
import { ThemeProvider } from 'styled-components'
import theme from 'app/config/theme/customTheme'
import './index.less'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <UserAuthProvider>
      <App />
    </UserAuthProvider>
  </ThemeProvider>,
  document.getElementById('root')
)
