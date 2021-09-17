import React, { useState } from "react";
import HorizontalBar from "./Charts/HorizontalBar";
import VerticalBar from "./Charts/VerticalBar";
import PieChart from "./Charts/PieChart";
import LineChart from "./Charts/LineChart";
import FileSaver from "file-saver";
import { defaultData, defaultOptions } from "./defaultValues";
import "./App.css";

function App() {
  const [fileName, setFileName] = useState("react-chart.png");
  const [fileSize, setFileSize] = useState("500px");
  const [chartType, setChartType] = useState("vertical_bar");
  const [chartTitle, setChartTitle] = useState("");
  const [chartDescription, setChartDescription] = useState("# of Votes");
  const [chartData, setChartData] = useState([12, 19, 3, 5, 2, 3]);
  const [chartLabels, setChartLabels] = useState([
    "Red",
    "Blue",
    "Yellow",
    "Green",
    "Purple",
    "Orange",
  ]);
  const [data, setData] = useState(defaultData);
  const [options, setOptions] = useState(defaultOptions);

  const handleDefaultDataButton = () => {
    setData(defaultData);
    setOptions(defaultOptions);
  };

  const handleUpdateCustomChartButton = () => {
    setData((prevState) => ({
      ...prevState,
      labels: chartLabels,
      datasets: [
        {
          label: chartDescription,
          data: chartData,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    }));
    setOptions((prevState) => ({
      ...prevState,
      plugins: {
        ...prevState.plugins,
        title: {
          ...prevState.plugins.title,
          text: chartTitle,
        },
      },
    }));
  };

  const handleFileNameInput = (event) => {
    if (event.target.value.length > 0) {
      setFileName(`${event.target.value}.png`);
    } else {
      setFileName("react-chart.png");
    }
  };

  const handleFileSaveAsButton = () => {
    const canvas = document.querySelector("canvas");
    const dataURL = canvas.toDataURL();
    FileSaver.saveAs(dataURL, fileName);
  };

  return (
    <div className="App">
      <h1>React Chart Generator</h1>
      <div className="row">
        <button type="button" onClick={handleUpdateCustomChartButton}>
          Update Custom Chart
        </button>
        <div className="tooltip">
          <button type="button" onClick={handleDefaultDataButton}>
            Use Default Data
          </button>
          <span className="tooltiptext">
            <span className="tooltipTitle">Default Data: </span>
            <ul>
              <li>Chart Type - Vertical Bar</li>

              <li>Chart Title - Chart Title</li>
              <li>
                Labels (independent variable) - <br />
                Red, Blue, Yellow, Green, Purple, Orange
              </li>
              <li>Description (independent variable) - # of Votes</li>
              <li>Data - 12, 19, 3, 5, 2, 3</li>
            </ul>
          </span>
        </div>
      </div>
      <div className="row radio_buttons">
        Select Chart Type:
        <input
          type="radio"
          id="vertical_bar"
          name="chart_type"
          defaultChecked
          onClick={(e) => {
            setChartType(e.target.id);
          }}
        />
        <label htmlFor="vertical_bar"> Vertical Bar</label>
        <input
          type="radio"
          id="horizontal_bar"
          name="chart_type"
          onClick={(e) => setChartType(e.target.id)}
        />
        <label htmlFor="horizontal_bar"> Horizontal Bar</label>
        <input
          type="radio"
          id="pie"
          name="chart_type"
          onClick={(e) => setChartType(e.target.id)}
        />
        <label htmlFor="pie"> Pie</label>
        <input
          type="radio"
          id="line"
          name="chart_type"
          onClick={(e) => setChartType(e.target.id)}
        />
        <label htmlFor="line"> Line</label>
      </div>
      <div className="row">
        {" "}
        <textarea
          type="text"
          placeholder="Chart Title"
          onChange={(event) => setChartTitle(event.target.value)}
          style={{ width: "65%" }}
        />
        <textarea
          type="text"
          placeholder="Description: # of Votes"
          style={{ width: "35%", padding: "1rem" }}
          onChange={(event) => setChartDescription(event.target.value)}
        />
      </div>
      <div className="row data">
        <textarea
          type="text"
          placeholder={`Data: 12, 19, 3, 5, 2, 3 \n      (separated with commas ",")`}
          style={{ width: "40%" }}
          onChange={(event) => setChartData(event.target.value.split(","))}
        />
        <textarea
          type="text"
          placeholder={`Labels: Red, Blue, Yellow, Green, Purple, Orange \n        (separated with commas ",")`}
          style={{ width: "60%" }}
          onChange={(event) => setChartLabels(event.target.value.split(","))}
        />
      </div>
      <div id="canvas" className="canvas">
        {chartType === "vertical_bar" ? (
          <VerticalBar data={data} options={options} fileSize={fileSize} />
        ) : chartType === "horizontal_bar" ? (
          <HorizontalBar data={data} options={options} fileSize={fileSize} />
        ) : chartType === "pie" ? (
          <PieChart data={data} fileSize={fileSize} />
        ) : (
          <LineChart data={data} options={options} fileSize={fileSize} />
        )}
      </div>
      <div className="row">
        <div className="radio_buttons">
          Select Chart Size:
          <input
            type="radio"
            id="350px"
            name="chart_size"
            onClick={(e) => {
              setFileSize(e.target.id);
            }}
          />
          <label htmlFor="350px"> 350px</label>
          <input
            type="radio"
            id="500px"
            name="chart_size"
            defaultChecked
            onClick={(e) => {
              setFileSize(e.target.id);
            }}
          />
          <label htmlFor="500px"> 500px</label>
          <input
            type="radio"
            id="850px"
            name="chart_size"
            onClick={(e) => setFileSize(e.target.id)}
          />
          <label htmlFor="horizontal_bar"> 850px</label>
          <input
            type="radio"
            id="1100px"
            name="chart_size"
            onClick={(e) => setFileSize(e.target.id)}
          />
          <label htmlFor="1100px"> 1100px</label>
        </div>
      </div>
      <div className="row save_file">
        <textarea
          type="text"
          placeholder="file name"
          onChange={handleFileNameInput}
        />
        <button
          onClick={handleFileSaveAsButton}
          id="fileSaveButton"
          type="button"
        >
          Save Chart as .PNG
        </button>
      </div>
      <div className="more_information">
        To view more information about customizing the{" "}
        <a
          href="https://www.chartjs.org/docs/latest/charts/bar.html"
          target="_blank"
          rel="noreferrer"
        >
          data
        </a>{" "}
        or the{" "}
        <a
          href="https://www.chartjs.org/docs/latest/general/options.html"
          target="_blank"
          rel="noreferrer"
        >
          options
        </a>{" "}
        for each chart type, check out the Chart.js official{" "}
        <a href="https://www.chartjs.org/" target="_blank" rel="noreferrer">
          documentation
        </a>
        .
      </div>
    </div>
  );
}

export default App;
