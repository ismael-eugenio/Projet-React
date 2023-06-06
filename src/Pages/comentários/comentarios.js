import React from "react";
import './comentario.css'
import Hcomenttarios from "../../Components/H-coments/h-coment";
function Comentarios(){

    return(
    <> 
        <Hcomenttarios/>
        <div class="pai">

        <div className="box"> 
         <label for="login">ID</label>
         <input  style={{display:'block'}} type="text" name="" id="nick" placeholder="Nick Name"/>
 
         <label for="comentarios">Texto</label>
         <textarea className="caixa" name="Comentários" id="comentários" cols="53" placeholder="Comentários" rows="30"></textarea>
         
         <button className="btm">Enviar</button>
 
        </div>
        </div>


</>
    )


}

export default Comentarios;