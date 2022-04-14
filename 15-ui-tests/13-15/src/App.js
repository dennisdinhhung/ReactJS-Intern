import Container from "./components/14-cart/Container";
import React from "react";
import Container15 from "./components/15-cocktails/Container15";
function App() {
  const [render, setRender] = React.useState(false);

  return (
    <div className="App">
      <button onClick={(e) => setRender(!render)}>Switch 14 - 15</button>
      {render ? <Container /> : <Container15 />}
    </div>
  );
}

export default App;
