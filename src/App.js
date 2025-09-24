import React from "react";
import { LineChart, Line, XAxis, YAxis, BarChart, Bar, CartesianGrid, Tooltip } from "recharts";

function App() {
  const data = [
    { name: "Barley", d11: 29, d10: 30, d9: 32 },
    { name: "Rosa", d11: 16, d10: 16, d9: 16 },
    { name: "Rico", d11: 12, d10: 15, d9: 18 },
    { name: "Penny", d11: 35, d10: 45, d9: 49 },
    { name: "8-Bit", d11: 34, d10: 37, d9: 39 },
    { name: "Gus", d11: 73, d10: 81, d9: 94 },
    { name: "Pam", d11: 30, d10: 34, d9: 33 },
    { name: "Nani", d11: 12, d10: 12, d9: 14 },
    { name: "Collette", d11: 15, d10: 17, d9: 18 },
    { name: "Belle", d11: 22, d10: 22, d9: 24 },
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
        Brawler Stats
      </h2>

      {/* Line Chart */}
      <LineChart width={750} height={350} data={data} style={{ margin: "0 auto" }}>
        <CartesianGrid stroke="#333" strokeDasharray="5 5" />
        <XAxis dataKey="name" tick={{ fill: "#00f0ff", fontSize: 14 }} />
        <YAxis tick={{ fill: "#00f0ff", fontSize: 14 }} />
        <Tooltip contentStyle={{ backgroundColor: "#222", borderRadius: "10px", color: "#fff" }} />
        <Line dataKey="d11" stroke="cyan" strokeWidth={3} dot={{ r: 5, fill: "#00f0ff" }} />
        <Line dataKey="d10" stroke="#ff6ec7" strokeWidth={3} dot={{ r: 5, fill: "#ff6ec7" }} />
        <Line dataKey="d9" stroke="#a0ff4d" strokeWidth={3} dot={{ r: 5, fill: "#a0ff4d" }} />
      </LineChart>

      {/* Bar Chart */}
      <BarChart width={750} height={350} data={data} style={{ margin: "50px auto" }}>
        <CartesianGrid stroke="#333" strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={{ fill: "#00f0ff", fontSize: 14 }} />
        <YAxis tick={{ fill: "#00f0ff", fontSize: 14 }} />
        <Tooltip contentStyle={{ backgroundColor: "#222", borderRadius: "10px", color: "#fff" }} />
        <Bar dataKey="d11" fill="cyan" radius={[5, 5, 0, 0]} />
        <Bar dataKey="d10" fill="#ff6ec7" radius={[5, 5, 0, 0]} />
        <Bar dataKey="d9" fill="#a0ff4d" radius={[5, 5, 0, 0]} />
      </BarChart>
    </div>
  );
}

export default App;
