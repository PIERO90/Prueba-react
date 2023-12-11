import React, { useState } from "react";
import "./index.css";
import "./App.css";
import MiApi from "./components/MiApi";
import Buscador from "./components/Buscador";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const [result, setResult] = useState([]);

  return (
    <>
      <main>
        <header className="text-center my-4">
          <Buscador onFilterChange={setSearchTerm} />
        </header>

        <MiApi personajes={result.length > 0 ? result : searchTerm} />
      </main>
    </>
  );
}

export default App;
