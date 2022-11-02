import React from 'react';

const Header = () => {
    return(
        <>
        <div className="promo">
            <h5>HOT SALE -30% EN SANDALIAS</h5>
        </div>
        <div className='menu1'>
            <ul>
                <li>
                    <a href="/">DIRECTORIO DE TIENDAS</a>
                </li>
                <li>
                    <a href="/">SERVICIO AL CLIENTE</a>
                </li>
                <li>
                    <a href="/">CUENTA</a>
                </li>
            </ul>
        </div>
        <div className='container'>
            <div className='row'>
                <div className="col">
                    <h1> hola</h1>
                    <div className='menu1'>
                    <ul>
                        <li>
                            <a href="/">HOMBRE</a>
                        </li>
                         <li>
                            <a href="/">MUJER</a>
                        </li>
                        <li>
                            <a href="/">BLOG</a>
                        </li>
                         <li>
                            <a href="/">HISTORIA</a>
                        </li>
                        <li>
                            <a href="/">TIENDAS</a>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="col">
                    <h2>2faf</h2>
                    <h6 className='text-danger'>ENVIOS GRATIS PARA PEDIDOS SUPERIORES A $300.000</h6>
                    <h6>carrito</h6>
                </div>
            </div>
        </div>
        </>
    )
};

export default Header;