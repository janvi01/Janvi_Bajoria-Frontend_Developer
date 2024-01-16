// src/components/DataGrid.js
import React, { useEffect, useState } from "react";
import fetch from "cross-fetch";

function DataGrid() {
  const [rockets, setRockets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/index.php");
        const data = await response.json();
        console.log(data);
        setRockets(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>SpaceX Rockets</h1>
      <ul>
        {rockets.map((rocket) => (
          <li key={rocket.rocket_id}>{rocket.rocket_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataGrid;
