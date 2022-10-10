import { useState } from 'react';
import { Link } from "react-router-dom";
import cepApi from "../../services/cepApi";
import InputMask from "react-input-mask";
import Swal from 'sweetalert2';

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
            <h1>Formulario Cep</h1>
            <InputMask 
            id="inputCep" 
            type="text"
            mask="99999-999"
            value={value} 
            onChange={(e) => setValue(e.target.value)}
            placeholder="Insira seu CEP">
            </InputMask>

            <button onClick={getData}>
                Pesquisar
            </button>
        
            <div>
                <input value={Endereco.bairro}></input>
                <input value={Endereco.localidade}></input>
                <input value={Endereco.logradouro}></input>
                <input value={Endereco.uf}></input>
            </div>

        </div>
    )

}

export default Cep