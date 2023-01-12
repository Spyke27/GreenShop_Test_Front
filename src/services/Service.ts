import axios from "axios";

export const api = axios.create({
    baseURL: 'https://ecommerce-lccu.onrender.com/' /* conexão com a api */
});

/* LOGIN */
export const login = async (url: any, dados: any, setDado: any) =>{
    const resposta = await api.post(url, dados);
    
    setDado(resposta.data.token); 
}
/* CADASTRO */
export const cadastroUsuario = async (url: any, dados: any, setDado: any) =>{
    const resposta = await api.post(url, dados);
    setDado(resposta.data); 
}
/* BUSCAR */
export const busca = async (url: any, setDado: any, header: any) => {
    const resposta = await api.get(url, header)
    setDado(resposta.data);
}
/* BUSCAR POR ID */
export const buscaId = async (url: any, setDado: any, header: any) => {
    const resposta = await api.get(url, header)
    setDado(resposta.data)
}
/* BUSCAR POR NOME */
export const buscaNome = async (url: any, setDado: any, header: any) => {
    const resposta = await api.get(url, header)
    setDado(resposta.data)
}
/* CADASTRAR */
export const post = async (url: any, dados: any, setDado: any, header: any) => {
    const resposta = await api.post(url, dados, header)
    setDado(resposta.data)
}
/* ATUALIZAR */
export const put = async (url: any, dados: any, setDado: any, header: any) => {
    const resposta = await api.put(url, dados, header)
    setDado(resposta.data)
}
/* DELETAR */
export const deleteId = async (url: any, header: any) => {
    await api.delete(url, header)
}







