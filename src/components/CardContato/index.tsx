import { useState } from 'react'
import Contato from '../../models/Contatos'

import {
  Card,
  TituloCard,
  ContentCard,
  Email,
  Botao,
  GrupoBotoes,
  BotaoRemoverECancelar,
  BotaoSalvar
} from './styles'

export type Props = Contato

const ContatoCard = ({ nome, numero, email }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)
  return (
    <Card>
      <TituloCard>{nome}</TituloCard>
      <ContentCard>{numero}</ContentCard>
      <Email href={`mailto:${email}`}>{email}</Email>
      <GrupoBotoes>
        {estaEditando ? (
          <>
            <BotaoSalvar>Salvar</BotaoSalvar>
            <BotaoRemoverECancelar onClick={() => setEstaEditando(false)}>
              Cancelar
            </BotaoRemoverECancelar>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <BotaoRemoverECancelar>Remover</BotaoRemoverECancelar>
          </>
        )}
      </GrupoBotoes>
    </Card>
  )
}

export default ContatoCard
