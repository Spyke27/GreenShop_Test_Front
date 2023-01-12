import Produtos from "./Produto";

interface Categoria{
    id_categoria: number,
    moveis: string,
    ambiente: string,
    produto?: Produtos | null
}
export default Categoria;