import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'

import { alteraNome } from '../../store/reducers/filtro'
import {
  selectItensLista,
  selectNomeDoContato
} from '../../store/reducers/selectors'

type Props = {
  mostrarCampoDePesquisa: boolean
}

const BarraLateral = ({ mostrarCampoDePesquisa }: Props) => {
  const dispatch = useDispatch()
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
    <S.Aside>
      {mostrarCampoDePesquisa ? (
        <>
          <S.Campo
            type="text"
            placeholder="Procurar"
            value={nomeDoContato}
            onChange={(evento) => dispatch(alteraNome(evento.target.value))}
          />

          <div>
            <S.BtnAdicionar to="/novo">Adicionar contato</S.BtnAdicionar>
          </div>
          <S.RetornoDoFiltro>
            {nomeDoContato && contatos.length > 0
              ? `${contatos.length} contato(s) encontrado(s) para: "${nomeDoContato}"`
              : nomeDoContato
                ? 'Nenhum contato encontrado'
                : ''}
          </S.RetornoDoFiltro>
        </>
      ) : (
        <S.BtnVoltar to="/" type="button">
          Voltar
        </S.BtnVoltar>
      )}
    </S.Aside>
  )
}

export default BarraLateral
