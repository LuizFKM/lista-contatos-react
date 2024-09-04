import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { remover, editar } from '../../store/reducers/contatos'
import Contato from '../../models/Contatos'

import {
  Card,
  TituloCard,
  ContentCard,
  Email,
  Botao,
  GrupoBotoes,
  BotaoRemoverECancelar,
  BotaoSalvar,
  EditandoEmail,
  EditandoTitulo,
  EditandoContent
} from './styles'

export type Props = Contato

const ContatoCard = ({
  nome: nomeOriginal,
  numero: numeroOriginal,
  email: emailOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNomeContato] = useState(nomeOriginal)
  const [numero, setNumero] = useState(numeroOriginal)
  const [email, setEmail] = useState(emailOriginal)

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setNomeContato(nomeOriginal)
    }
    if (numeroOriginal > 0) {
      setNumero(Number(numeroOriginal))
    }
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [nomeOriginal, numeroOriginal, emailOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setNomeContato(nomeOriginal)
    setNumero(Number(numeroOriginal))
    setEmail(emailOriginal)
  }

  return (
    <Card>
      {estaEditando ? (
        <EditandoTitulo
          type="text"
          value={nome}
          placeholder="nome"
          onChange={(evento) => setNomeContato(evento.target.value)}
        />
      ) : (
        <TituloCard as="div">{nome}</TituloCard>
      )}
      {estaEditando ? (
        <>
          <EditandoContent
            type="number"
            placeholder="numero"
            value={numero}
            onChange={(evento) => setNumero(Number(evento.target.value))}
          />
        </>
      ) : (
        <ContentCard as="div">{numero}</ContentCard>
      )}
      {estaEditando ? (
        <EditandoEmail
          type="email"
          placeholder="e-mail"
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
        />
      ) : (
        <Email href={`mailto:${email}`}>{email}</Email>
      )}
      <GrupoBotoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    email,
                    id,
                    nome,
                    numero
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <BotaoRemoverECancelar onClick={cancelarEdicao}>
              Cancelar
            </BotaoRemoverECancelar>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <BotaoRemoverECancelar onClick={() => dispatch(remover(id))}>
              Remover
            </BotaoRemoverECancelar>
          </>
        )}
      </GrupoBotoes>
    </Card>
  )
}

export default ContatoCard
