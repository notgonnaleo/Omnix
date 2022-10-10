import { useState } from 'react';
import cepApi from "../../services/cepApi";
import Swal from 'sweetalert2';

function Cep(){

    const [value, setValue] = useState('')

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
            console.log(response.data)
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
            <input 
            id="inputCep" 
            type="text" 
            value={value} 
            onChange={(e) => setValue(e.target.value)}
            placeholder="Insira seu CEP">
            </input>

            <button onClick={getData}>
                Pesquisar
            </button>


        </div>
    )

}

export default Cep