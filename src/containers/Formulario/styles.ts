import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const ContainerForm = styled.div`
  max-width: 100%;
  background-color: #cad3c8;
`

export const FormularioDeCadastro = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 16px;
  width: 50%;
`

export const Input = styled.input`
  padding: 8px;
  border-radius: 6px;
  border: none;
  margin-top: 16px;
  border: solid 2px #eee;
  font-weight: bold;
  color: #666666;
  width: 100%;
`
export const BotaoCadastro = styled.button`
  display: flex;
  justify-content: center;
  margin-top: 24px;
  border-radius: 8px;
  padding: 8px;
  background-color: #27ae60;
  font-weight: bold;
  border: none;
  cursor: pointer;
  color: #fff;

  &:hover {
    transform: translateY(3px);
    background-color: #2ecc71;
    box-shadow: 1px 6px 1px 0px rgba(0, 0, 0, 0.25);
  }
`
export const Titulo = styled.h1`
  padding: 16px;
  margin-left: 24px;
  color: ${variaveis.azulEscuro};
`
