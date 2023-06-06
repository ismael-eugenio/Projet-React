import React from "react";
import './footer.css'
import Logo from '../../assets/imgbat.png';
import { Link } from "react-router-dom";
function Footer() {
    return(
        <>
        <footer>
            <img id='logo'  src={Logo}  />
            <span>Todos os direitos reservados ©</span>
            <span> Desenvolvido por: Ismael Alves</span>

            

            <nav class="footer-navigation">
                    <ul class="footer-list">
                            <Link to={'/'} style={{textDecoration: 'none'}} >
                            <li>Home</li>                    
                            </Link>   
                        
                            <Link to={'contato'} style={{textDecoration: 'none'}} >
                            <li>Contatos</li>
                            </Link>
                        
                            <Link to={'photos'} style={{textDecoration: 'none'}} >
                            <li>Photos</li >
                            </Link>
                        
                            <Link to={'comentarios'} style={{textDecoration: 'none'}} >
                            <li>Comentários</li>
                            </Link>
                        
                    </ul>


            </nav>

  </footer>
        
        </>


    )
}

export default Footer;