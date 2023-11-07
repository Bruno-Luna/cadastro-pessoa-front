import { Contato } from "./contato.model"

export class Pessoa {
    public id: string
    public nome: string
    public cpf: string
    public datanascimento: Date
    public contato: Contato[]
}