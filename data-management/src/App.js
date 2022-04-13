import React from "react";
import { data } from "./data";
import "./App.scss";

function App() {
  const [datas, setDatas] = React.useState(
    { quarter: "1st Quarter" },
    { quarter: "2nd Quarter" },
    { quarter: "3rd Quarter" },
    { quarter: "4th Quarter" }
  );

  data.map((item, index) => {
    if (item.month_of_year >= 1 && item.month_of_year <= 3) {
      if (!datas[0].hasOwnProperty(item.type)) {
        setDatas(
          (datas[0][item.type] = {
            documents: item.documents,
          })
        );
      }
    }
  });

  console.log(datas);

  return (
    <div className="App">
      <table className="table table-bordered">
        <thead>
          <tr className="tr">
            <th scope="col">STT</th>
            <th scope="col">ID</th>
            <th scope="col">Year</th>
            <th scope="col">Month of Year</th>
            <th scope="col">Type</th>
            <th scope="col">State</th>
          </tr>
        </thead>
        <tbody id="user">
          {data.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.id}</td>
              <td>{item.year}</td>
              <td>{item.month_of_year}</td>
              <td>{item.type}</td>
              <td>{item.state}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
