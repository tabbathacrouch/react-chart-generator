import React from "react";
import { Line } from "react-chartjs-2";
function LineChart({ data, options, fileSize }) {
  return (
    <div style={{ width: fileSize }}>
      <Line data={data} options={options} />
    </div>
  );
}

export default LineChart;
