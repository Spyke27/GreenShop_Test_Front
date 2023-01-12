import Categoria from "./Categoria"
import User from "./User"

interface Produtos {
    id_produto: number,
    nome: string,
    descricao: string,
    valor: number,
    peso: number,
    foto: string,
    usuario?: User | null,
    categoria?: Categoria | null
}
export default Produtos;