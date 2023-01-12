import { Button, Grid, Link, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
import "./SobreNos.css";

import FotoPerfil from "./perfil.jpg";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

function SobreNos() {
  return (
    <>
      <Grid container className="containerSN">
        <Grid item sm={6}>
            <Typography variant="h3" className="sobreProjeto">sobre o projeto</Typography>
            <div className="barrinha"></div>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
            tempore iure hic cum voluptate? Odio laborum vel numquam nostrum
            totam. Temporibus numquam aliquid distinctio id vero recusandae
            magni quia sequi. Vitae, non adipisci aut expedita eos rem
            consequatur quisquam sequi sint ducimus fuga obcaecati, harum earum
            accusantium! Rem enim nesciunt quae labore officia consequuntur
            quisquam dolor assumenda consequatur? In, ratione?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aliquam exercitationem, aliquid accusamus cupiditate, velit nulla, quaerat necessitatibus nihil veniam beatae officiis omnis voluptates repellendus vitae quasi at et vero?
            quisquam dolor assumenda consequatur? In, ratione?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aliquam exercitationem, aliquid accusamus cupiditate, velit nulla, quaerat necessitatibus nihil veniam beatae officiis omnis voluptates repellendus vitae quasi at et vero?
          </Typography>
        </Grid>
        <Grid item sm={6}>
          <img
            src="https://reciclaje.com.co/wp-content/uploads/2018/03/Destacada-reciclador-asociado.jpg"
            alt="imagem1"
            className="imagem"
          />
        </Grid>
      </Grid>

    <Box className="desenvolvedores">
        <Typography variant="h4" className="textDesenvolvedores ">equipe desenvolvedora</Typography>
    </Box>

    <Box className="boxPerfil3">

    <Card sx={{ maxWidth: 345 }} className="card2">
      <CardMedia className="fotoCard" component="img" width="100%" image={FotoPerfil} alt="perfil" />
      <CardContent>
        <Typography variant="h5" component="div">Amanda Torres</Typography>
      </CardContent>
      <CardActions className="socialPerfil">
        <Button className="btnGithub" size="small">GitHub</Button>
        <Button className="btnLinkedin" size="small">Linkedin</Button>
      </CardActions>
    </Card>
    
      
      </Box>

    </>
  );
}
export default SobreNos;