import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FiltroState = {
  nomeDoContato: string
}

const initialState: FiltroState = {
  nomeDoContato: ''
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteraNome: (state, action: PayloadAction<string>) => {
      state.nomeDoContato = action.payload
    }
  }
})

// export const selectNomeDoContato = (state: RootReducer) =>
//   state.filtro.nomeDoContato

export const { alteraNome } = filtroSlice.actions
export default filtroSlice.reducer
