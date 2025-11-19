import React from "react";
import Logo from "../images/ies1gijon_logo.jpg"

class Header extends React.Component{
    render(){
        return(
            <div className="bg-primary text-center text-white p-3">
                <img src={Logo} alt="Logo Ies N1" width="100px"/>
                <h3>
                    Bienvenido a la página de contactos
                </h3>
            </div>
        );
    }
}
export default Header;