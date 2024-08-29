import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Lato', sans-serif;
}
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const ListaContainer = styled.div`
  padding: 24px;
  height: 100vh;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  grid-auto-columns: 300px;
  grid-auto-flow: row;
  justify-content: space-between;
  justify-items: center;
  gap: 24px;
  background-color: #cad3c8;
  box-sizing: border-box;
`

export default EstiloGlobal
