import React from "react";
import { LineChart, Line, XAxis, YAxis, BarChart, Bar } from "recharts";

function App() {
  const data = [
    { name: "Barley", "11d": 29, "10d": 30, "9d": 32 },
    { name: "Rosa", "11d": 16, "10d": 16, "9d": 16 },
    { name: "Rico", "11d": 12, "10d": 15, "9d": 18 },
    { name: "Penny", "11d": 35, "10d": 45, "9d": 49 },
    { name: "8-Bit", "11d": 34, "10d": 37, "9d": 39 },
    { name: "Gus", "11d": 73, "10d": 81, "9d": 94 },
    { name: "Pam", "11d": 30, "10d": 34, "9d": 33 },
    { name: "Nani", "11d": 12, "10d": 12, "9d": 14 },
    { name: "Collette", "11d": 15, "10d": 17, "9d": 18 },
    { name: "Belle", "11d": 22, "10d": 22, "9d": 24 },
    { name: "Grom", "11d": 20, "10d": 22, "9d": 29 },
    { name: "Ash", "11d": 23, "10d": 24, "9d": 25 },
    { name: "Lola", "11d": 9, "10d": 9, "9d": 9 },
    { name: "Sam", "11d": 23, "10d": 24, "9d": 25 },
    { name: "Maisie", "11d": 46, "10d": 51, "9d": 57 },
    { name: "Hank", "11d": 97, "10d": 106, "9d": 107 },
    { name: "Gene", "11d": 44, "10d": 49, "9d": 48 },
    { name: "Max", "11d": 27, "10d": 32, "9d": 35 },
    { name: "Sprout", "11d": 11, "10d": 11, "9d": 12 },
    { name: "Lou", "11d": 37, "10d": 37, "9d": 38 },
    { name: "Ruffs", "11d": 29, "10d": 30, "9d": 30 },
    { name: "Squeak", "11d": 28, "10d": 29, "9d": 29 },
    { name: "Eve", "11d": 58, "10d": 69, "9d": 70 },
    { name: "Willow", "11d": 13, "10d": 14, "9d": 14 },
    { name: "Moe", "11d": 31, "10d": 32, "9d": 34 },
    { name: "Juju", "11d": 12, "10d": 14, "9d": 15 },
    { name: "Lumi", "11d": 21, "10d": 21, "9d": 21 },
    { name: "Finx", "11d": 48, "10d": 53, "9d": 63 },
    { name: "Spike", "11d": 38, "10d": 43, "9d": 45 },
    { name: "Sandy", "11d": 10, "10d": 10, "9d": 12 },
    { name: "Amber", "11d": 22, "10d": 22, "9d": 23 },
    { name: "Trunk", "11d": null, "10d": 39, "9d": 41 },
    { name: "Dyna", "11d": null, "10d": 123, "9d": 54 },
    { name: "Poco", "11d": null, "10d": null, "9d": 39 },
    { name: "Berry", "11d": null, "10d": null, "9d": 69 },
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Brawler Stats</h2>

      <LineChart width={800} height={400} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line dataKey="11d" stroke="red" />
        <Line dataKey="10d" stroke="orange" />
        <Line dataKey="9d" stroke="green" />
      </LineChart>

      <BarChart width={800} height={400} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="11d" fill="red" />
        <Bar dataKey="10d" fill="orange" />
        <Bar dataKey="9d" fill="green" />
      </BarChart>
    </div>
  );
}

export default App;
