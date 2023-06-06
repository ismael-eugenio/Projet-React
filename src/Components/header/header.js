import React from "react";
import './styles.css'
import Logo from '../../assets/imgbat.png';
import { Link } from "react-router-dom";

function Header() {

    return(
        <header>
            <img id='logo'  src={Logo}  />
            <nav>
                <ul>
                    <Link to={'/'} style={{textDecoration: 'none'}}>
                    <li>Home</li>
                    </Link>     
                    <Link to={'/contato'} style={{textDecoration: 'none'}}>
                    <li>Contato</li>
                    </Link>
                    <Link to={'/photos'} style={{textDecoration: 'none'}}>
                    <li>Photos</li>
                    </Link>
                    <Link to={'/comentarios'} style={{textDecoration: 'none'}}>
                    <li>Comentários</li>                   
                    </Link>

                </ul>
                
            </nav>
            <img id='logo'  src={Logo} />
        </header>

    )


}

export default Header ;