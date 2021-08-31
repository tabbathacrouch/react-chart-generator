import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart({ data, fileSize }) {
  return (
    <div style={{ width: fileSize }}>
      <Pie data={data} />
    </div>
  );
}

export default PieChart;
