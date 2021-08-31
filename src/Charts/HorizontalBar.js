import React from "react";
import { Bar } from "react-chartjs-2";

function HorizontalBar({ data, options, fileSize }) {
  return (
    <div style={{ width: fileSize }}>
      <Bar data={data} options={(options, { indexAxis: "y" })} />
    </div>
  );
}

export default HorizontalBar;
