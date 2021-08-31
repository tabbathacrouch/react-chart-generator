import React from "react";
import { Bar } from "react-chartjs-2";

function VerticalBar({ data, options, fileSize }) {
  return (
    <div style={{ width: fileSize }}>
      <Bar data={data} options={options} />
    </div>
  );
}

export default VerticalBar;
