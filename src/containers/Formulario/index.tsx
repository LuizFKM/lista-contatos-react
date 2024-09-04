import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { cadastrar } from '../../store/reducers/contatos'

import {
  BotaoCadastro,
  ContainerForm,
  FormularioDeCadastro,
  Input,
  Titulo
} from './styles'
import Contato from '../../models/Contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNomeContato] = useState('')
  const [numero, setNumero] = useState('')
  const [email, setEmail] = useState('')

  const cadastrarNumero = (evento: FormEvent) => {
    evento.preventDefault()
    const contatoParaAdicionar = new Contato(nome, Number(numero), email, 8)
    dispatch(cadastrar(contatoParaAdicionar))
    navigate('/')
  }

  return (
    <ContainerForm>
      <Titulo>Novo contato</Titulo>
      <FormularioDeCadastro onSubmit={cadastrarNumero}>
        <Input
          required
          value={nome}
          onChange={(evento) => setNomeContato(evento.target.value)}
          type="text"
          placeholder="Nome do contato"
        />
        <Input
          required
          value={numero}
          onChange={(evento) => setNumero(evento.target.value)}
          type="number"
          placeholder="Número"
        />
        <Input
          required
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          type="email"
          placeholder="e-mail"
        />
        <BotaoCadastro type="submit">Cadastar</BotaoCadastro>
      </FormularioDeCadastro>
    </ContainerForm>
  )
}

export default Formulario
