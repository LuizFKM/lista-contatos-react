import {
  Card,
  TituloCard,
  ContentCard,
  Email,
  Botao,
  GrupoBotoes
} from './styles'

export type Props = {
  remover?: boolean
  nome: string
  numero: number
  email: string
  id?: number
}

const ContatoCard = ({ remover, nome, numero, email }: Props) => (
  <Card>
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
