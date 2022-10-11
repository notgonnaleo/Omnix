import { useState } from 'react';
import { Link } from "react-router-dom";
import cepApi from "../../services/cepApi";
import InputMask from "react-input-mask";
import Swal from 'sweetalert2';
import "./formCep.css"

function Cep(){

    const [value, setValue] = useState('')
    const [Endereco, setEndereco] = useState({}); 

    async function getData(){
        if(value === '' || value == isNaN(value) ){
            Swal.fire({
                title: 'Campo inválido',
                icon: 'info',
                text: 'Insira seu CEP!'
                })
            return;
        }
        try
        {
            const response = await cepApi.get(value+'/json');
            setEndereco(response.data);
        }
        catch
        {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Erro ao inserir o CEP!'
                })
        }   
    }
    
    return(
        <div>
            <div className="form-cep">
                <div className="form-item">
            <h1 className="titleCep">Cadastre sua região para ver nossas ofertas!</h1>
                <InputMask 
                id="inputCep" 
                type="text"
                mask="99999-999"
                className="field"
                value={value} 
                onChange={(e) => setValue(e.target.value)}
                placeholder="Insira seu CEP">
                </InputMask>

                <div>
                    <input 
                    className="field"
                    value={Endereco.bairro}
                    placeholder="Bairro"></input>
                    <br></br>
                    <input 
                    className="field"
                    value={Endereco.localidade}
                    placeholder="Localidade"></input>
                    <br></br>
                    <input 
                    className="field"
                    value={Endereco.logradouro}
                    placeholder="Logradouro"></input>
                    <br></br>
                    <input 
                    className="field"
                    value={Endereco.uf}
                    placeholder="UF"></input>

                </div>
                    <div className="btn-group">
                        <button className="btnCep" onClick={getData}>
                            Pesquisar
                        </button>
                        <Link to="/Offers">
                        <button className="btnCep">
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