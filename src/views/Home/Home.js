import { Link } from "react-router-dom";
import FormCep from "../../components/form/formCep";
import Navbar from "../../components/layout/navbar/navbar";
import Footer from "../../components/layout/footer/footer";
import "./Home.css"

function Home(){
    return(
        <div className="app">
            <body>
                <Navbar />
                <h1>Home</h1>
                <FormCep />
                <Footer />
            </body>
        </div>
    )
}

export default Home