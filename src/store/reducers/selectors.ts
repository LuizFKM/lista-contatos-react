import { RootReducer } from '..'

export const selectNomeDoContato = (state: RootReducer) =>
  state.filtro.nomeDoContato

export const selectItensLista = (state: RootReducer) => state.contatos.itens
