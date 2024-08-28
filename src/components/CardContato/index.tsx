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

const ContatoCard = ({ remover, nome, numero, email }: Props) => (
  <Card id={nome}>
    <TituloCard>{nome}</TituloCard>
    <ContentCard>{numero}</ContentCard>
    <Email href="mailto:contato@exemplo.com">{email}</Email>
    <GrupoBotoes>
      <Botao>Editar</Botao>
      <Botao remover={remover}>Remover</Botao>
    </GrupoBotoes>
  </Card>
)

export default ContatoCard
