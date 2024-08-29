import styled from 'styled-components'

export const Aside = styled.aside`
  padding: 16px;
  background-color: #eee;
  height: 100vh;
  box-shadow: inset -6px 0px 7px 0px rgba(0, 0, 0, 0.2);
`
export const Campo = styled.input`
  border-radius: 8px;
  border: solid 1px #666666;
  padding: 8px;
  background-color: #fff;
  font-weight: bold;
  color: #666666;
  width: 100%;
`
export const BtnAdicionar = styled.button`
  border-radius: 8px;
  padding: 8px;
  background-color: #55e6c1;
  font-weight: bold;
  color: #2c3a47;
  width: 100%;
  border: none;
  margin-top: 16px;
  cursor: pointer;
  transition: 0.2s ease;
  box-shadow: -1px 6px 4px 0px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: translateY(3px);
    background-color: #9aecdb;
    box-shadow: 1px 6px 1px 0px rgba(0, 0, 0, 0.25);
  }
`
