import React from "react";
import Logo from '../../assets/imgbat.png'
import './cm.css'

function Hcomenttarios(){
    return(
    <>
        <div className='hd'>

        <div className="hd2">
            <img id='logo'  src={Logo}  />
            <div className="cm"> COMENTÁRIOS </div>
            <img id='logo2'  src={Logo}  />
        </div>
        </div >
    </>
        
    )
}

export default Hcomenttarios;