import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contatos'

const contatosSlice = createSlice({
  name: 'contatos',
  initialState: [
    new Contato('Kotzen', 9993652371, 'kotzen@guitar.com', 1),
    new Contato('Luiz', 9993652371, 'luiz@guitar.com', 2),
    new Contato('Chico', 9993652371, 'chico@guitar.com', 3),
    new Contato('Francisco', 9993652371, 'francisco@guitar.com', 4)
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((contato) => contato.id !== action.payload)
    }
  }
})

export const { remover } = contatosSlice.actions
export default contatosSlice.reducer
