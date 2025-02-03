import { useState } from "react";
import "./App.css";
import SearchBar from "./components/Search/SearchBar";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./hero-img.png" alt="hero-image" />
          <h1>
            Find <span className="text-gradient">Movies</span> You'll Enjoy
            Without the Hassle
          </h1>
        </header>

        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

      </div>
    </main>
  );
}

export default App;
