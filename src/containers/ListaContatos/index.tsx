import ContatoCard from '../../components/CardContato'
import { ListaContainer } from '../../styles'

const ListaDeContatos = () => (
  <ListaContainer>
    <ContatoCard
      remover
      nome="Luiz"
      numero={9991110}
      email="email@exemplo.com"
    />
    <ContatoCard
      remover
      nome="Luiz"
      numero={9991110}
      email="email@exemplo.com"
    />
    <ContatoCard
      remover
      nome="Luiz"
      numero={9991110}
      email="email@exemplo.com"
    />
    <ContatoCard
      remover
      nome="Luiz"
      numero={9991110}
      email="email@exemplo.com"
    />
  </ListaContainer>
)

export default ListaDeContatos
