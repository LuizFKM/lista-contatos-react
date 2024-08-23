import BarraLateral from './containers/BarraLateral'
import ListaDeContatos from './containers/ListaContatos'
import EstiloGlobal, { Container } from './styles'
function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeContatos />
      </Container>
    </>
  )
}
export default App
