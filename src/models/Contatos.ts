class Contato {
  nome: string
  numero: number
  email: string
  id?: string
  remover?: boolean

  constructor(
    nome: string,
    numero: number,
    email: string,
    id: string,
    remover: boolean
  ) {
    this.nome = nome
    this.numero = numero
    this.email = email
    this.id = id
    this.remover = remover
  }
}

export default Contato
