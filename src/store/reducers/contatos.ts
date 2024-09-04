import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contatos'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'Luiz',
      numero: 999817634,
      email: 'luiz@contato.com'
    },
    {
      id: 2,
      nome: 'Rogério',
      numero: 999817634,
      email: 'rogerio@contato.com'
    },
    {
      id: 3,
      nome: 'Antonio',
      numero: 999817634,
      email: 'antonio@exemplo.com'
    },
    {
      id: 4,
      nome: 'Francisco',
      numero: 999817634,
      email: 'francisco@contato.com'
    },
    {
      id: 5,
      nome: 'Ana',
      numero: 999817634,
      email: 'ana@exemplo.com'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Contato>) => {
      const contatoExistente = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )
      if (contatoExistente) {
        alert('Já existe um contato com esse nome')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

// export const selectItensLista = (state: RootReducer) => state.contatos.itens

export const { remover, editar, cadastrar } = contatosSlice.actions
export default contatosSlice.reducer
