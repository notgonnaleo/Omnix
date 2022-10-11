import { useState } from 'react';
import { Link } from "react-router-dom";
import cepApi from "../../services/cepApi";
import InputMask from "react-input-mask";
import Swal from 'sweetalert2';
import "./formCep.css"

function Cep(){
    
    return(
        <div>
            <div className="product-card">
                <div className="form-item">
            <h1 className="titleCep">Cadastre sua região para ver nossas ofertas!</h1>
                <div>
                    <input 
                    className="field"
                    value={Endereco.bairro}
                    placeholder="Bairro"></input>
                </div>
                    <div className="btn-group">
                        <Link to="/">
                        <button className="btnView">
                            Ver ofertas!
                        </button>           
                        </Link>
                    </div>
 
                </div>
            </div>
        </div>
    )

}

export default Cep