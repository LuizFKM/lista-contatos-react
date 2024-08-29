import { Provider } from 'react-redux'

import BarraLateral from './containers/BarraLateral'
import ListaDeContatos from './containers/ListaContatos'
import EstiloGlobal, { Container } from './styles'

import store from './store'
function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeContatos />
      </Container>
    </Provider>
  )
}
export default App
