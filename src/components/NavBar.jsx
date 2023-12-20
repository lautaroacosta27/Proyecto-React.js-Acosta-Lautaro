import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const NavBar = ({ allProducts, setAllProducts, total, countProducts,setTotal, }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [active, setActive] = useState(false);
  return (
    
    <div>
    <section className='promotion'>
    <div class="text-promotion1" > 🌈🌈🌈 25% DE DESCUENTO HASTA EL 25 DE DICIEMBRE 🌈🌈🌈</div>
    </section>
    <nav className="navbar navbar-expand-md botonera">
      <div className="container-fluid">
          <a className='nameBrand' href="./index.html">
            <img  src= "/img/logo.png" alt="" />
          </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="white"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li
              className="nav-item dropdown"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"

              >
                Productos
              </a>
              <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                <li>
                  <a className="dropdown-item" href="./pages/men.html">
                    Hombre
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="./pages/woman.html">
                    Mujer
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./pages/nosotros.html">
                Nosotros
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./pages/ayuda.html" >
                Ayuda
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./pages/contacto.html" >
                Contacto
              </a>
            </li>
          </ul>

        </div>
        <div className="container-icon">
          <div className="container-cart-icon"
            onClick={() => setActive(!active)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="icon-cart"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            <div className="count-products">
              <span id="contador-productos">{countProducts}</span>
            </div>
          </div>

          <div className={`container-cart-products ${active ? '' : 'hidden-cart'}`}>

            {


              allProducts.length ? (
                <>
                  <div className="row-product">
                    {allProducts.map(product => (
                      <div className="cart-product" key={product.id}>
                        <div className="info-cart-product">
                          <span className="cantidad-producto-carrito">{product.quantity}</span>
                          <p className="titulo-producto-carrito">{product.nameProduct}</p>
                          <span className="precio-producto-carrito">${product.price}</span>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="icon-close"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>

                    ))}

                  </div>
                  <div className="cart-total ">
                    <h3>Total:</h3>
                    <span className="total-pagar">${total}</span>
                  </div>
          
                </>
              ) : (
                <p className="cart-empty">El carrito está vacío</p>
              )
            }
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default NavBar