import { useSelector } from 'react-redux'
import ContatoCard from '../../components/CardContato'
import { ListaContainer } from '../../styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { contatos } = useSelector((state: RootReducer) => state)
  return (
    <ListaContainer>
      {contatos.map((c) => (
        <div key={c.nome}>
          <ContatoCard
            nome={c.nome}
            email={c.email}
            numero={c.numero}
            id={c.id}
          />
        </div>
      ))}
    </ListaContainer>
  )
}

export default ListaDeContatos
