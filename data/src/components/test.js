import React from "react";
import data from "./data";
import { useState } from "react";
const OriginalForm2 = () => {
  const [quarters, setQuarters] = useState([
    { quarter: "quarter_1" },
    { quarter: "quarter_2" },
    { quarter: "quarter_3" },
    { quarter: "quarter_4" },
  ]);

  const [items, setItems] = useState(data);
  console.log(quarters);
  items.filter((item) => {
    if (item.month_of_year <= 3 && item.month_of_year >= 1) {
      setQuarters(
        (quarters[0][item.type] = {
          documents: item.documents,
        })
      );
    }
    if (item.month_of_year <= 6 && item.month_of_year >= 4) {
      setQuarters(
        (quarters[1][item.type] = {
          documents: item.documents,
        })
      );
    }
    if (item.month_of_year <= 9 && item.month_of_year >= 7) {
      setQuarters(
        (quarters[2][item.type] = {
          documents: item.documents,
        })
      );
    }
    if (item.month_of_year <= 12 && item.month_of_year >= 10) {
      setQuarters(
        (quarters[3][item.type] = {
          documents: item.documents,
        })
      );
    }
  });

  //   const obj = [{ id: 1, name: "Châu" }];

  //   obj[0]["address"] = "123 trung kinh";
  //   console.log(obj);
  return (
    <div>
      <div className="list">
        <h3>List</h3>
        <table className="grid-info" id="grid-info">
          <thead>
            <tr>
              <th>id</th>
              <th>year</th>
              <th>month_of_year</th>
              <th>type</th>
            </tr>
          </thead>
          <tbody>
            {quarters[0].map((item, index) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.year}</td>
                <td>{item.month_of_year}</td>
                <td>{item.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OriginalForm2;
