import { useState } from "react";

//base de datos ficticia 
const users = [
    {username: 'amy', password: '12345'},
    {username: 'sharis', password: 'sistemas'},
];

function Login( {setUser} ){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    //Para enviar y validar los datos
    const validandoDatos = (e) =>{
        e.preventDefault();
        //evalua lo datos
        if (username==="" || password===""){
            setError(true);
            setErrorMessage("Todos los campos son obligatorios");
            return;
        }
        //para buscar el usuario en la bd
        const user = users.find(
            (u) => u.username === username && u.password === password
        );
        //si el usuario ya existe, lo establece como  usuario activo
        if (user) { 
            setError(false);
            setUser(username)
        }
        //en caso de que no exista usuario
        else {
            setError(true);
            setErrorMessage("no estas registrado lero, lero")
        }
        //limpiar los campos
        setUsername("");
        setPassword("");
    };
    return (
        <>
        <h1>Iniciar Sesión</h1>
        <form action="" onSubmit={validandoDatos}>
            <input type="text"
            placeholder="Nombre de Usuario"
            value={username}
            onChange={(x) => setUsername(x.target.value)}
            name="username"
             />
             <input 
             type="password"
             placeholder="Contraseña"
             value={password}
             onChange={(x) => setPassword(x.target.value)}
             name="password"
              />
              <button type="submit">Iniciar Sesión</button>
        </form>
        {error && <p>{errorMessage}</p>}
        </>
    )
}
export default Login;