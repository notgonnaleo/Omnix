import { Link } from "react-router-dom";
import FormCep from "../../components/form/formCep";

function Home(){
    return(
        <div className="app">
            <h1>Home</h1>
            <FormCep />
            <button>
                <Link to="/Offers">
                    Ofertas
                </Link>
            </button>
        </div>
    )
}

export default Home