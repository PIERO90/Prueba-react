import React from "react";

const Buscador = ({ onFilterChange }) => {
  const handleChange = (event) => {
    const filter = event.target.value;
    onFilterChange(filter);
  };

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <h3>Elige tu personaje de la serie</h3>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="text" placeholder="Buscar por nombre o género" aria-label="Search" onChange={handleChange} />
        </form>
      </div>
    </nav>
  );
};

export default Buscador;
