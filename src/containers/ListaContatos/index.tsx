import { useSelector } from 'react-redux'
import ContatoCard from '../../components/CardContato'
import { ListaContainer } from '../../styles'
import {
  selectItensLista,
  selectNomeDoContato
} from '../../store/reducers/selectors'

const ListaDeContatos = () => {
  const nomeDoContato = useSelector(selectNomeDoContato)
  const itens = useSelector(selectItensLista)

  const filtraContatos = () => {
    return itens.filter(
      (item: { nome: string }) =>
        item.nome.toLowerCase().search(nomeDoContato.toLowerCase()) >= 0
    )
  }

  const contatos = filtraContatos()
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
