import ContatoCard from '../../components/CardContato'
import { ListaContainer } from '../../styles'

const contatos = [
  {
    nome: 'Chico',
    numero: 14323436784,
    email: 'luiz@chico.com'
  },
  {
    nome: 'Luiz',
    numero: 12356452465,
    email: 'luiz@chico.com'
  },
  {
    nome: 'Francisco',
    numero: 2234456,
    email: 'francisco@chico.com'
  },
  {
    nome: 'Cafu',
    numero: 2234456,
    email: 'cafu@chico.com'
  },
  {
    nome: 'Maia',
    numero: 2234456,
    email: 'maia@chico.com'
  }
]

const ListaDeContatos = () => (
  <ListaContainer>
    {contatos.map((c) => (
      <div key={c.nome}>
        <ContatoCard nome={c.nome} email={c.email} numero={c.numero} remover />
      </div>
    ))}
  </ListaContainer>
)

export default ListaDeContatos
