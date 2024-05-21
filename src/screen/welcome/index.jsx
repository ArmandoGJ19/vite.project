import './welcome.css';

function Welcome() {
return (
    <div className="app">
        <h1>App con React</h1>
        <p>Bienvenido a mi app donde podras consultar temas interesantes</p>
        <div className="buttons">
            <button className="btn">Ir al listado de temas</button>
            <button className="btn">Más sobre mi</button>
        </div>
    </div>
);
}

export default Welcome;