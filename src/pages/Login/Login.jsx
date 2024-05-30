import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
const Login = () => {
  const [signState, setSignState] = useState("Registro"); // Estado para manejar el estado de registro/inicio de sesión
  const [estadoboton, setboton] = useState("Registrar"); // Estado para el boton

  return (
    <div className="login">
      <div className="login-form">
        <h1 className="title-form">{signState}</h1>
        <form className="form">
          {signState === "Registro" && (
            <input type="text" placeholder="Tu nombre" />
          )}
          
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <div className="BotonIniciar">
          <Link className="boton"  to="/peliculas">{estadoboton}</Link>
          </div>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Recordar Cuenta</label>
            </div>
            <p>¿Necesita ayuda?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Registro" ? (
            <p>
              ¿Ya tienes una Cuenta?{" "}
              <span 
                onClick={() => {
                  setSignState("Iniciar Sesion") 
                  setboton("Play")
                }    
                }
                style={{ cursor: 'pointer', color: 'white' }}
              >
                
                presione aqui
              </span>


            </p>
          ) : (
            <p>
              ¿Nuevo en caplix?{" "}
              <span 
                onClick={() =>{ setSignState("Registro")
                                setboton("Registrar")
                }}
                style={{ cursor: 'pointer', color: 'white' }}
              >

                Regístrate
              </span>
            </p>
          )}
        </div>

      </div>
    </div>
  );
};


export default Login;
