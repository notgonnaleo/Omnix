import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import cepApi from "../../services/cepApi";
import InputMask from "react-input-mask";
import Swal from 'sweetalert2';
import "./formCep.css"

function Cep(){
    const [value, setValue] = useState('')
    const [Endereco, setEndereco] = useState({}); 

    async function getData(valor){
        if(valor === '' || valor == isNaN(value) ){
            Swal.fire({
                title: 'Campo inválido',
                icon: 'info',
                })
            return;
        }
        try
        {
            const response = await cepApi.get(valor+'/json');
            const data = response.data
            setEndereco(data);
            localStorage.setItem('bairro', data.bairro);
            localStorage.setItem('cep', data.cep);
            localStorage.setItem('logradouro', data.logradouro);
            localStorage.setItem('uf', data.uf);
            localStorage.setItem('localidade', data.localidade);
        }
        catch{
            console.log("Testing. . .")
        }
    }
    
    const ChangeCep = (e) => {
        const valor = e.target.value
        console.log(valor)
        setValue(valor)
        if (!valor.includes("_") && valor !== "") {
            getData(valor)
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
                onChange={ChangeCep}
                placeholder="Insira seu CEP">
                </InputMask>

                <div>
                    <input 
                    className="field"
                    value={Endereco.bairro}
                    placeholder="Bairro"/>
                    <input 
                    className="field"
                    value={Endereco.localidade}
                    placeholder="Localidade"/>
                    <input 
                    className="field"
                    value={Endereco.logradouro}
                    placeholder="Logradouro"/>
                    <input 
                    className="field"
                    value={Endereco.uf}
                    placeholder="UF"/>
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