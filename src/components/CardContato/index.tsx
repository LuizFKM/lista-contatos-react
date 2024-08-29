import { useState } from 'react'
import Contato from '../../models/Contatos'

import {
  Card,
  TituloCard,
  ContentCard,
  Email,
  Botao,
  GrupoBotoes
} from './styles'

export type Props = Contato

const ContatoCard = ({ remover, nome, numero, email, id }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)
  return (
    <Card id={id}>
      <TituloCard>{nome}</TituloCard>
      <ContentCard>{numero}</ContentCard>
      <Email href={`mailto:${email}`}>{email}</Email>
      <GrupoBotoes>
        {estaEditando ? (
          <>
            <Botao>Salvar</Botao>
            <Botao remover={remover} onClick={() => setEstaEditando(false)}>
              Cancelar
            </Botao>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <Botao remover={remover}>Remover</Botao>
          </>
        )}
      </GrupoBotoes>
    </Card>
  )
}

export default ContatoCard
