import Navbar from "../../components/layout/navbar/navbar";
import Footer from "../../components/layout/footer/footer";
import {useState, useEffect} from "react"
function Offers(){
const [dados, setDados] = useState({"bairro": "", "localidade":"","cep":"","logradouro":""})

    useEffect(()=>{
        const dadosLocal = {"bairro": localStorage.getItem("bairro"), "localidade": localStorage.getItem("localidade"), "cep": localStorage.getItem("cep"), "logradouro": localStorage.getItem("logradouro")}
        setDados(dados=> ({...dados, ...dadosLocal}))
    },[dados])
    
    return(
        <div>
            <Navbar />
            <h1>Offers</h1>
            <br></br>
            <span>{dados.bairro}</span>
            <span>{dados.localidade}</span>
            <span>{dados.cep}</span>
            <span>{dados.logradouro}</span>
            <Footer />
        </div>
    )
}

export default Offers