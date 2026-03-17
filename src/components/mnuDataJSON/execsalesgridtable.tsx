// file:   execsalesgridtable.tsx 

// import React from "react";
import type { User } from "./execsalesgrid";

type Props = {
  rows: User[];
};

export default function PrintTable({ rows }: Props) {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "Arial", fontSize: "12px", }}>
      <thead>
        <tr style={{ backgroundColor: "#f5f5f5", fontWeight: "bold" }}>
          <th style={{ border: "1px solid #ccc", padding: "8px" }}>User ID</th>
          <th style={{ border: "1px solid #ccc", padding: "8px" }}>User Name</th>
          <th style={{ border: "1px solid #ccc", padding: "8px" }}>Country</th>
          <th style={{ border: "1px solid #ccc", padding: "8px" }}>Country Desc</th>
          <th style={{ border: "1px solid #ccc", padding: "8px" }}>Hired</th>
          <th style={{ border: "1px solid #ccc", padding: "8px" }}>Active</th>
          <th style={{ border: "1px solid #ccc", padding: "8px" }}>Sales</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.userid}>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>{row.userid}</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>{row.username}</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>{row.country}</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>{row.countrydesc}</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              {row.hired ? new Date(row.hired).toISOString().split("T")[0] : ""}
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              {row.active === 1 ? "Yes" : "No"}
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              {Number(row.sales ?? 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
