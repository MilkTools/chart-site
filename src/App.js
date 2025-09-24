import React from "react";
import { LineChart, Line, XAxis, YAxis, BarChart, Bar, CartesianGrid, Tooltip } from "recharts";

function App() {
  const data = [
    { name: "Barley", d11: 29, d10: 30, d9: 32, d8: 33 },
    { name: "Rosa", d11: 16, d10: 16, d9: 16, d8: 17 },
    { name: "Rico", d11: 12, d10: 15, d9: 18, d8: 17 },
    { name: "Penny", d11: 35, d10: 45, d9: 49, d8: 49 },
    { name: "8-Bit", d11: 34, d10: 37, d9: 39, d8: 39 },
    { name: "Gus", d11: 73, d10: 81, d9: 94, d8: 94 },
    { name: "Pam", d11: 30, d10: 34, d9: 33, d8: 33 },
    { name: "Nani", d11: 12, d10: 12, d9: 14, d8: 14 },
    { name: "Collette", d11: 15, d10: 17, d9: 18, d8: 18 },
    { name: "Belle", d11: 22, d10: 22, d9: 24, d8: 24 },
    { name: "Grom", d11: 20, d10: 22, d9: 29, d8: 29 },
    { name: "Ash", d11: 23, d10: 24, d9: 25, d8: 25 },
    { name: "Lola", d11: 9, d10: 9, d9: 9, d8: 9 },
    { name: "Sam", d11: 23, d10: 24, d9: 25, d8: 25 },
    { name: "Maisie", d11: 46, d10: 51, d9: 57, d8: 57 },
    { name: "Hank", d11: 97, d10: 106, d9: 107, d8: 107 },
    { name: "Larry", d11: null, d10: null, d9: null, d8: null },
    { name: "Meeple", d11: null, d10: null, d9: null, d8: null },
    { name: "Trunk", d11: null, d10: 39, d9: 41, d8: 41 },
    { name: "Gene", d11: 44, d10: 49, d9: 48, d8: 48 },
    { name: "Max", d11: 27, d10: 32, d9: 35, d8: 35 },
    { name: "Sprout", d11: 11, d10: 11, d9: 12, d8: 12 },
    { name: "Lou", d11: 37, d10: 37, d9: 38, d8: 38 },
    { name: "Ruffs", d11: 29, d10: 30, d9: 30, d8: 30 },
    { name: "Squeak", d11: 28, d10: 29, d9: 29, d8: 29 },
    { name: "Eve", d11: 58, d10: 69, d9: 70, d8: 70 },
    { name: "Willow", d11: 13, d10: 14, d9: 14, d8: 14 },
    { name: "Moe", d11: 31, d10: 32, d9: 34, d8: 34 },
    { name: "Juju", d11: 12, d10: 14, d9: 15, d8: 15 },
    { name: "Lumi", d11: 21, d10: 21, d9: 21, d8: 21 },
    { name: "Finx", d11: 48, d10: 53, d9: 63, d8: 63 },
    { name: "Spike", d11: 38, d10: 43, d9: 45, d8: 45 },
    { name: "Sandy", d11: 10, d10: 10, d9: 12, d8: 12 },
    { name: "Amber", d11: 22, d10: 22, d9: 23, d8: 23 },
    { name: "Dyna", d11: null, d10: 123, d9: 54, d8: 54 },
    { name: "Poco", d11: null, d10: null, d9: 39, d8: 39 },
    { name: "Berry", d11: null, d10: null, d9: 69, d8: 69 },
  ];

  return (
    <div style={{
      textAlign: "center",
      marginTop: "20px",
      backgroundColor: "#0e0e0e",
      color: "#f0f0f0",
      minHeight: "100vh",
      padding: "20px"
    }}>
      <h2 style={{ fontFamily: "Arial, sans-serif", fontSize: "2rem", marginBottom: "40px", color: "#00f0ff" }}>
        Brawler Stats (Last 4 Days)
      </h2>

      {/* Line Chart */}
      <LineChart width={900} height={400} data={data} style={{ margin: "0 auto" }}>
        <CartesianGrid stroke="#333" strokeDasharray="5 5" />
        <XAxis dataKey="name" tick={{ fill: "#00f0ff", fontSize: 12, angle: -45, textAnchor: "end" }} height={70} />
        <YAxis tick={{ fill: "#00f0ff", fontSize: 14 }} />
        <Tooltip contentStyle={{ backgroundColor: "#222", borderRadius: "10px", color: "#fff" }} />
        <Line dataKey="d11" stroke="cyan" strokeWidth={3} dot={{ r: 4, fill: "#00f0ff" }} />
        <Line dataKey="d10" stroke="#ff6ec7" strokeWidth={3} dot={{ r: 4, fill: "#ff6ec7" }} />
        <Line dataKey="d9" stroke="#a0ff4d" strokeWidth={3} dot={{ r: 4, fill: "#a0ff4d" }} />
        <Line dataKey="d8" stroke="#ffd700" strokeWidth={3} dot={{ r: 4, fill: "#ffd700" }} />
      </LineChart>

      {/* Bar Chart */}
      <BarChart width={900} height={400} data={data} style={{ margin: "50px auto" }}>
        <CartesianGrid stroke="#333" strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={{ fill: "#00f0ff", fontSize: 12, angle: -45, textAnchor: "end" }} height={70} />
        <YAxis tick={{ fill: "#00f0ff", fontSize: 14 }} />
        <Tooltip contentStyle={{ backgroundColor: "#222", borderRadius: "10px", color: "#fff" }} />
        <Bar dataKey="d11" fill="cyan" radius={[5, 5, 0, 0]} />
        <Bar dataKey="d10" fill="#ff6ec7" radius={[5, 5, 0, 0]} />
        <Bar dataKey="d9" fill="#a0ff4d" radius={[5, 5, 0, 0]} />
        <Bar dataKey="d8" fill="#ffd700" radius={[5, 5, 0, 0]} />
      </BarChart>
    </div>
  );
}

export default App;
