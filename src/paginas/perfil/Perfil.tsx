import { Box, TextField, Typography } from "@material-ui/core";
import React from "react";
import "./Perfil.css";
import FotoPerfil from "./perfil.svg"
import { busca } from "../../services/Service";
import TokenState from "../../store/tokens/tokenReducer";

function Perfil(){


    return (
<>
    <Box className="containerPerfil">
        <Box className="boxPerfil">
        <div className="divFoto">
            <img src={FotoPerfil} alt="Foto de Perfil" />
            <button>Selecionar Imagem</button>
        </div>
        <Box className="infoPerfil">
        <Typography className="nomePerfil mb">
            Usuario: Ivanilson da Silva
        </Typography>
        <Typography className="emailPerfil mb">
            Email: ivan@gmail.com
        </Typography>
        <Typography className="emailPerfil mb">
            Telefone: (21)99999-9999
        </Typography>
        <br />
        <Typography className="emailPerfil mb">
            Endereço: Rio da Pedras, Estrada Principal, 981 <br />
            CEP: 22876-090
        </Typography>
        </Box>
        </Box>
       
    </Box>
</>
    )
}
export default Perfil;