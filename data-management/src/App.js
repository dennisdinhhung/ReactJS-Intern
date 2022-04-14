import './App.css';
import { data } from './data';

function App() {
  const quarter1_func = () => {
    let rows = data[0].quarter_sections;
    let output = []

    for (let i = 0; i < rows.length; i++) {
      if (rows[i].month_of_year >= 6 && rows[i].month_of_year <= 8 && rows[i].year === 2021){
        output.push(rows[i])
      }
    }

    return output;
  }

  const quarter2_func = () => {
    let rows = data[0].quarter_sections;
    let output = []

    for (let i = 0; i < rows.length; i++) {
      if (rows[i].month_of_year >= 9 && rows[i].month_of_year <= 11 && rows[i].year === 2021){
        output.push(rows[i])
      }
    }

    return output;
  }

  const quarter3_func = () => {
    let rows = data[0].quarter_sections;
    let output = []

    for (let i = 0; i < rows.length; i++) {
      if (rows[i].month_of_year === 12 || rows[i].month_of_year === 1 || rows[i].month_of_year === 2){
        output.push(rows[i])
      }
    }

    return output;
  }

  const quarter4_func = () => {
    let rows = data[0].quarter_sections;
    let output = []

    for (let i = 0; i < rows.length; i++) {
      if (rows[i].month_of_year >= 3 && rows[i].month_of_year <= 5 && rows[i].year === 2022){
        output.push(rows[i])
      }
    }

    return output;
  }

  const quarter1 = quarter1_func();
  const quarter2 = quarter2_func();
  const quarter3 = quarter3_func();
  const quarter4 = quarter4_func();

  return (
    <div className="App">

      <div>
        <h1>Everything</h1>
      </div>

      <table>
        <thead>
          <tr>
            <th>INDEX</th>
            <th>ID</th>
            <th>YEAR</th>
            <th>MONTH</th>
            <th>TYPE</th>
            <th>STATE</th>
            <th>DOC</th>
          </tr>
        </thead>
        <tbody>
          {data[0].quarter_sections.map((obj, index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{obj.id}</td>
              <td>{obj.year}</td>
              <td>{obj.month_of_year}</td>
              <td>{obj.type}</td>
              <td>{obj.state}</td>
              <td>{'obj.documents'}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <h1>Quarter 1</h1>
      </div>

      <table >
      <thead>
          <tr>
            <th>INDEX</th>
            <th>ID</th>
            <th>YEAR</th>
            <th>MONTH</th>
            <th>TYPE</th>
            <th>STATE</th>
            <th>DOC</th>
          </tr>
        </thead>
        <tbody>
          {quarter1.map((obj, index) => (
            <tr key={index}>
              {/* {console.log(obj, 'quarter_obj')} */}
              <td>{index+1}</td>
              <td>{obj.id}</td>
              <td>{obj.year}</td>
              <td>{obj.month_of_year}</td>
              <td>{obj.type}</td>
              <td>{obj.state}</td>
              <td>{obj.documents.map((doc) => (
                <div key={doc}>
                  <div>
                    {'id: '}{doc.id}
                  </div>
                  <div>
                    {'name: '}{doc.name}
                  </div>
                  <div>
                    {'type: '}{doc.type}
                  </div>
                  <div>
                    {'filename '}{doc.filename}
                  </div>
                  <div>
                    {'uploaded_on: '}{doc.uploaded_on}
                  </div>
                  <div>
                    {'uploaded_by: '}{doc.uploaded_by}
                  </div>
                  <div>
                    {'last_edited_on: '}{doc.last_edited_on}
                  </div>
                  <div>
                    {'last_edited_by: '}{doc.last_edited_by}
                  </div>
                </div>
              ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      
      <div>
        <h1>Quarter 2</h1>
      </div>

      <table >
      <thead>
          <tr>
            <th>INDEX</th>
            <th>ID</th>
            <th>YEAR</th>
            <th>MONTH</th>
            <th>TYPE</th>
            <th>STATE</th>
            <th>DOC</th>
          </tr>
        </thead>
        <tbody>
          {quarter2.map((obj, index) => (
            <tr key={index}>
              {/* {console.log(obj, 'quarter_obj')} */}
              <td>{index+1}</td>
              <td>{obj.id}</td>
              <td>{obj.year}</td>
              <td>{obj.month_of_year}</td>
              <td>{obj.type}</td>
              <td>{obj.state}</td>
              <td>{obj.documents.map((doc) => (
                <div key={doc}>
                  <div>
                    {'id: '}{doc.id}
                  </div>
                  <div>
                    {'name: '}{doc.name}
                  </div>
                  <div>
                    {'type: '}{doc.type}
                  </div>
                  <div>
                    {'filename '}{doc.filename}
                  </div>
                  <div>
                    {'uploaded_on: '}{doc.uploaded_on}
                  </div>
                  <div>
                    {'uploaded_by: '}{doc.uploaded_by}
                  </div>
                  <div>
                    {'last_edited_on: '}{doc.last_edited_on}
                  </div>
                  <div>
                    {'last_edited_by: '}{doc.last_edited_by}
                  </div>
                </div>
              ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      
      <div>
        <h1>Quarter 3</h1>
      </div>

      <table >
      <thead>
          <tr>
            <th>INDEX</th>
            <th>ID</th>
            <th>YEAR</th>
            <th>MONTH</th>
            <th>TYPE</th>
            <th>STATE</th>
            <th>DOC</th>
          </tr>
        </thead>
        <tbody>
          {quarter3.map((obj, index) => (
            <tr key={index}>
              {/* {console.log(obj, 'quarter_obj')} */}
              <td>{index+1}</td>
              <td>{obj.id}</td>
              <td>{obj.year}</td>
              <td>{obj.month_of_year}</td>
              <td>{obj.type}</td>
              <td>{obj.state}</td>
              <td>{obj.documents.map((doc) => (
                <div key={doc}>
                  <div>
                    {'id: '}{doc.id}
                  </div>
                  <div>
                    {'name: '}{doc.name}
                  </div>
                  <div>
                    {'type: '}{doc.type}
                  </div>
                  <div>
                    {'filename '}{doc.filename}
                  </div>
                  <div>
                    {'uploaded_on: '}{doc.uploaded_on}
                  </div>
                  <div>
                    {'uploaded_by: '}{doc.uploaded_by}
                  </div>
                  <div>
                    {'last_edited_on: '}{doc.last_edited_on}
                  </div>
                  <div>
                    {'last_edited_by: '}{doc.last_edited_by}
                  </div>
                </div>
              ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      
      <div>
        <h1>Quarter 4</h1>
      </div>

      <table >
      <thead>
          <tr>
            <th>INDEX</th>
            <th>ID</th>
            <th>YEAR</th>
            <th>MONTH</th>
            <th>TYPE</th>
            <th>STATE</th>
            <th>DOC</th>
          </tr>
        </thead>
        <tbody>
          {quarter4.map((obj, index) => (
            <tr key={index}>
              {/* {console.log(obj, 'quarter_obj')} */}
              <td>{index+1}</td>
              <td>{obj.id}</td>
              <td>{obj.year}</td>
              <td>{obj.month_of_year}</td>
              <td>{obj.type}</td>
              <td>{obj.state}</td>
              <td>{obj.documents.map((doc) => (
                <div key={doc}>
                  <div>
                    {'id: '}{doc.id}
                  </div>
                  <div>
                    {'name: '}{doc.name}
                  </div>
                  <div>
                    {'type: '}{doc.type}
                  </div>
                  <div>
                    {'filename '}{doc.filename}
                  </div>
                  <div>
                    {'uploaded_on: '}{doc.uploaded_on}
                  </div>
                  <div>
                    {'uploaded_by: '}{doc.uploaded_by}
                  </div>
                  <div>
                    {'last_edited_on: '}{doc.last_edited_on}
                  </div>
                  <div>
                    {'last_edited_by: '}{doc.last_edited_by}
                  </div>
                </div>
              ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
