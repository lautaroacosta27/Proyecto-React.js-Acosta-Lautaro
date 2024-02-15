const FormularioCheckout = ({ datosForm, guardarDatosInput, enviarOrden }) => {
    return (
      <div>
        <h2>Completa con tus datos para continuar con la compra</h2>
        <form className="formulario" onSubmit={enviarOrden}>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={datosForm.nombre}
            onChange={guardarDatosInput}
          />
  
          <label htmlFor="telefono">Telefono</label>
          <input
            type="number"
            id="telefono"
            name="telefono"
            value={datosForm.telefono}
            onChange={guardarDatosInput}
          />
  
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={datosForm.email}
            onChange={guardarDatosInput}
          />
  
          <label htmlFor="repetir-email">Repetir Email</label>
          <input
            type="email"
            id="repetir-email"
            name="repetirEmail"
            value={datosForm.repetirEmail}
            onChange={guardarDatosInput}
          />
  
          <button type="submit">Enviar orden</button>
        </form>
      </div>
    );
  };
  export default FormularioCheckout;