import React, { useEffect, useState } from "react";
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
        setSpaceData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App mb-8">
      <HeroLayout />
      <SearchLayout />
      <DataGridRocket rocketsData={spaceData.rockets} />
      <DataGridCapsules capsulesData={spaceData.capsules} />
    </div>
  );
}

export default App;
