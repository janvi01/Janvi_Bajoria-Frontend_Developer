import React from "react";
import "./App.css";
import HeroLayout from "./components/HeroLayout";
import SearchLayout from "./components/SearchLayout";
import DataGrid from "./components/DataGrid";

function App() {
  return (
    <div className="App">
      <HeroLayout />
      <SearchLayout />
      <DataGrid />
    </div>
  );
}

export default App;
