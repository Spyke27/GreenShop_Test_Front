import React  from "react";
import './Home.css';
import { Button, Grid, Typography } from '@material-ui/core';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Carousel from "./slideShow/SlideShow";
import { countries } from "./slideShow/Data";

const area_externa =  require('./img/area_externa.png');
const jardim = require('./img/jardim.png');
const cozinha = require('./img/cozinha.png')
const salalazer = require('./img/salalazer.png')



function Home() {

    return (
        <>
            <Grid container direction='row' justifyContent='center' alignItems='center' className="aa">

            {<Carousel images={countries} />}
                <Grid xs={12} style={{ backgroundColor: 'white' }}></Grid>
            </Grid>


            <Grid className="espaço" container direction='row' justifyContent='center' alignItems='center' >

                <Stack spacing={5} direction='row'>
                    <Avatar src= "https://cdn-icons-png.flaticon.com/512/372/372754.png"sx={{width:45, height:45}} >

                    </Avatar>
                    <Avatar sx={{width:55, height:55, bgcolor:"white"}}> 
                       <img width={43} height={43} src="https://seeklogo.com/images/W/whatsapp-logo-112413FAA7-seeklogo.com.png" alt="forma de pagamento"/>

                    </Avatar>
                    <Avatar sx={{width:55, height:55, bgcolor:"white"}}> 
                       <img width={48} height={48} src="https://cdn-icons-png.flaticon.com/512/3076/3076631.png" alt="forma de pagamento"
                    />
                    </Avatar>
                    <Avatar sx={{width:50, height:50, bgcolor:"white"}}>
                        <img width={43} height={43} src="https://cdn-icons-png.flaticon.com/512/2298/2298267.png" alt="Primeira compra" />
                    </Avatar>
                </Stack>

            </Grid>

            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Box className="font cf">
                    <Typography variant="h4" gutterBottom  >
                        Produtos sustentáveis para o seu lar
                    </Typography>
                </Box>

            </Grid>

            <Grid className="espaço img mg" container direction="row" justifyContent="center" alignItems="center" spacing={5}>
               
                <Grid item xs={3}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image="https://cdn.discordapp.com/attachments/1024654367556636732/1027586188153978880/moveis-varanda.jpg"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography >
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image="https://cdn.discordapp.com/attachments/1024654367556636732/1027586187604541571/horta-vertical.jpg"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography >
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image="https://cdn.discordapp.com/attachments/1024654367556636732/1027586187382227104/cadeira-papelao.jpg"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography >
                            Painel de base para planta feito de lata e madeira
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>

                </Grid>

                <Grid className="espaço" container direction='row' justifyContent='center' alignItems='center' >

<Stack spacing={5} direction='row'>
    <Avatar  sx={{width:230, height:250, bgcolor:"white"}}> 
       <img width={150} height={150} src={salalazer} />
    </Avatar>
    <Avatar sx={{width:230, height:250, bgcolor:"white"}}> 
       <img width={150} height={150} src= {cozinha} alt="forma de pagamento"/>

    </Avatar>
    <Avatar sx={{width:230, height:230, bgcolor:"white"}}> 
       <img width={150} height={150} src={area_externa} alt="área externa"
    />
    </Avatar>
    <Avatar sx={{width:230, height:230, bgcolor:"white"}}>
        <img width={150} height={150} src= {jardim} alt="jardim" />
    </Avatar>
</Stack>

</Grid>
</>
  );
}
export default Home;