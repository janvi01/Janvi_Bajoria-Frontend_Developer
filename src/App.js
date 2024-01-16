import React, { useEffect, useState } from "react";
import "./App.css";
import HeroLayout from "./components/HeroLayout";
import SearchLayout from "./components/SearchLayout";
import DataGridRocket from "./components/DataGridRocket";
import fetch from "cross-fetch";
import DataGridCapsules from "./components/DataGridCapsules";

function App() {
  const [spaceData, setSpaceData] = useState({ rockets: [], capsules: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/index.php");
        const data = await response.json();
        console.log(data);
        setSpaceData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <HeroLayout />
      <DataGridRocket rocketsData={spaceData.rockets} />
      <SearchLayout />
      <DataGridCapsules capsulesData={spaceData.capsules} />
    </div>
  );
}

export default App;
