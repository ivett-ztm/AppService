function Bienvenido( {user, setUser} ) {
    const cerrarSesion = () => {
        setUser([])
    }
    return (
        <>
        <h1>Bienvenido Pollito</h1>
        <h2>esto es una prueba xd {user}</h2>
        <button onClick={cerrarSesion}>Cerrar Sesión</button>

        </>
    )
}
export default Bienvenido;