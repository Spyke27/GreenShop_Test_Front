import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./Navbar.css";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import Sacola from "./sacola.png";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";
import FadeMenu from "./drop/MenuDrop";
import { useDispatch } from "react-redux";
import { addToken } from "../../../store/tokens/action";

function Navbar() {
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const dispatch = useDispatch();

  function goLogout() {
    setToken("");
    dispatch(addToken(token));
    navigate("/login");
  }

  return (
    <>
      <AppBar position="static" className="appbar">
        <Toolbar variant="dense" className="bar">
          <Box>
            <div className="menuicons">
              <div className="menuicon"></div>
              <div className="menuicon"></div>
              <div className="menuicon"></div>
            </div>
          </Box>
        <Link to='/home'>
        <Box className="logo">
            <Typography className="text-logo" variant="h5" color="inherit">
              GreenShop
              <div className="barrinha"></div>
            </Typography>
          </Box>
        </Link>
          
          <Box className="menu-right" display="flex">
            
            <Box className="pesquisa">
              <FormControl variant="standard" color="success">
                <Input
                  placeholder="Buscar Produtos"
                  startAdornment={
                    <InputAdornment position="start">
                      <SearchIcon className="lupa" />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>

            <Box>
              <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                  <React.Fragment>
                    <Button
                      className="perfil"
                      variant="contained"
                      {...bindTrigger(popupState)}
                    >
                      Minha Conta
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                      <Link to='/perfil' className="text-decoration"><MenuItem onClick={popupState.close}>Perfil</MenuItem></Link>
                      <MenuItem onClick={popupState.close}>
                        Meus Pedidos
                      </MenuItem>
                      <Box onClick={goLogout}>
                        <MenuItem onClick={popupState.close}>Logout</MenuItem>
                      </Box>
                    </Menu>
                  </React.Fragment>
                )}
              </PopupState>
            </Box>

            <Box className="sacola">
              <div className="sacolaa">
                <img src={Sacola} alt="" />
                <div className="qtd">5</div>
              </div>
            </Box>
          </Box>
        </Toolbar>
        <Toolbar className="bar2">
          <Link to="/produtos">produtos</Link>
          <FadeMenu />
          <a href="#">promoções</a>
          <a href="#">móveis</a>
          <a href="#">decoração</a>
          <Link to="/sobrenos">sobre nos</Link>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default Navbar;
