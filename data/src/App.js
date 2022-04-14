import React from "react";
import data from "./data";
import "./App.scss";

function App() {
  // New data
  const quarters = [
    { quarter: "1st Quarter" },
    { quarter: "2nd Quarter" },
    { quarter: "3rd Quarter" },
    { quarter: "4th Quarter" },
  ];
  //
  data.map((section, index) => {
    if (section.month_of_year >= 1 && section.month_of_year <= 3) {
      if (!quarters[0].hasOwnProperty(section.type)) {
        quarters[0][section.type] = {
          documents: section.documents,
        };
        quarters[0]["year"] = section.year;
      } else {
        quarters[0][section.type].documents = [
          ...quarters[0][section.type].documents,
          section.documents,
        ];
      }
    } else if (section.month_of_year >= 4 && section.month_of_year <= 6) {
      if (!quarters[1].hasOwnProperty(section.type)) {
        quarters[1][section.type] = {
          documents: section.documents,
        };
        quarters[1]["year"] = section.year;
      } else {
        quarters[1][section.type].documents = [
          ...quarters[1][section.type].documents,
          section.documents,
        ];
      }
    } else if (section.month_of_year >= 7 && section.month_of_year <= 9) {
      if (!quarters[2].hasOwnProperty(section.type)) {
        quarters[2][section.type] = {
          documents: section.documents,
        };
        quarters[2]["year"] = section.year;
      } else {
        quarters[2][section.type].documents = [
          ...quarters[2][section.type].documents,
          section.documents,
        ];
      }
    } else if (section.month_of_year >= 10 && section.month_of_year <= 12) {
      if (!quarters[3].hasOwnProperty(section.type)) {
        quarters[3][section.type] = {
          documents: section.documents,
        };
        quarters[3]["year"] = section.year;
      } else {
        quarters[3][section.type].documents = [
          ...quarters[3][section.type].documents,
          section.documents,
        ];
      }
    }
    return section;
  });

  console.log(quarters);

  return (
    <div className="App">
      <h1 id="h1">Original Data</h1>
      <table className="table table-bordered">
        <thead>
          <tr className="tr">
            <th scope="col">STT</th>
            <th scope="col">ID</th>
            <th scope="col">Year</th>
            <th scope="col">Month of Year</th>
            <th scope="col">Type</th>
            <th scope="col">State</th>
            <th scope="col">Document</th>
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
              <td>{`${item.documents}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
