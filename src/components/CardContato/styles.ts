import styled from 'styled-components'

import { Props } from '.'
import variaveis from '../../styles/variaveis'

type PropsSemContentCard = Omit<Props, 'nome' | 'email' | 'numero' | 'id'>

export const Card = styled.div`
  width: 300px;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
  transition: 0.6s ease;

  &:hover {
    transform: translateY(-5px);
    background-color: rgba(0, 0, 0, 0.06);
  }
`

export const TituloCard = styled.h3`
  text-align: center;
  margin: 8px 0;
  font-size: 1.5em;
  color: #182c61;
`

export const ContentCard = styled.h4`
  text-align: start;
  margin: 8px 0;
  font-size: 1.1em;
  color: #2c3a47;
`

export const Email = styled.a`
  font-weight: bold;
  color: #182c61;
  text-decoration: none;
  position: relative;
  transition: color 0.4s;

  &:after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    height: 2px;
    width: 0;
    background: #fff;
    transition:
      width 0.3s ease,
      left 0.3s ease;
  }

  &:hover:after {
    width: 100%;
    left: 0;
  }
`

export const GrupoBotoes = styled.div`
  display: flex;
  justify-content: start;
  gap: 16px;
  margin-top: 16px;
  margin-bottom: 16px;
`

export const Botao = styled.button<PropsSemContentCard>`
  display: inline-block;
  margin-top: 16px;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-size: 0.9em;
  color: black;
  font-weight: bold;
  background-color: ${variaveis.amarelo};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
  transition: transform 0.4s ease;
`

export const BotaoRemoverECancelar = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`
