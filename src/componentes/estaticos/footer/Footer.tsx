import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <div className='footer-container'>

                <div className='footer1'>

                <section>

                    <p className='footer-descricao'>ENTRE EM CONTATO</p>

                    <input className='form-input' name='email' type='email' placeholder='Email'/>
                    <input className='form-input' name='email' type='text' placeholder='Mensagem'/>

                    <button className='form-btn'>Enviar</button>
                
                </section>

                </div>

                <div className='footer-link-wrapper'>

                    <div className='footer-link-items'>

                        <h2>POLÍTICAS</h2>

                        <Link to='/'>Politicas de Privacidade</Link>
                        <Link to='/'>Politicas de Segurança</Link>
                        <Link to='/'>Politicas de Entrega</Link>
                        <Link to='/'>Politicas de Pagamentos</Link>
                        <Link to='/'>Politicas de Devoluções</Link>

                    </div>
                    <div className='footer-link-items'>

                        <h2>PAGAMENTO</h2>
                        
                        <div className='Pagamentos'>

                        <div className='pagamento'>
                        <Link to='/'><img src='https://cf.shopee.com.br/file/a65c5d1c5e556c6197f8fbd607482372'/></Link>
                        </div>
                        
                        <div className='pagamento'>
                        <Link to='/'><img src='https://cf.shopee.com.br/file/95d849253f75d5e6e6b867af4f7c65aa'/></Link>
                        </div>

                        <div className='pagamento'>
                        <Link to='/'><img src='https://cf.shopee.com.br/file/5ee8fb5f33fdf1e42ea32b86f47f54c4'/></Link>
                        </div>

                        <div className='pagamento'>
                        <Link to='/'><img src='https://cf.shopee.com.br/file/2d091a1c189e8e4c529a73f3ec3a118d'/></Link>
                        </div>

                        <div className='pagamento'>
                        <Link to='/'><img src='https://cf.shopee.com.br/file/44734b7fc343eb46237c2d90c6c9ca60'/></Link>
                        </div>

                        <div className='pagamento'>
                        <Link to='/'><img src='https://cf.shopee.com.br/file/285e5ab6207eb562a9e893a42ff7ee46'/></Link>
                        </div>

                        <div className='pagamento'>
                        <Link to='/'><img src='https://cf.shopee.com.br/file/2a2cfeb34b00ef7b3be23ea516dcd1c5'/></Link>
                        </div>

                        </div>

                    </div>

                    <div className='footer-link-items'>

                        <h2>Redes Sociais</h2>

                        <Link to='/'><img src=''/>Twitter</Link>
                        <Link to='/'><img src=''/>Facebook</Link>
                        <Link to='/'><img src=''/>Youtube</Link>
                        <Link to='/'><img src=''/>Instagram</Link>

                    </div>

                </div>

                <div className='end'>GreenShop © 2022</div>

            </div>

        </>
    )
}

export default Footer;