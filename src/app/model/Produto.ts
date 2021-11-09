import { Categoria } from "./Categoria"
import { Usuario } from "./User"

export class Produto{
    public id: number
    public curso: string
    public descricao: string
    public preco: number
    public categoria: Categoria[]
    public usuario: Usuario[]

}