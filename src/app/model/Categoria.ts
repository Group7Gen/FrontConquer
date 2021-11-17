import { Produto } from "./Produto"

export class Categoria{
     public id: number
     public tipo: string
     public organizacao: string
     public data: Date
     public produto: Produto[]
}
