import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

function Container() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const api = "https://course-api.com/react-tours-project";

  const fetchData = async () => {
    setLoading(true);
    try {
      const jsonData = await fetch(api);
      const data = await jsonData.json();
      setLoading(false);
      setTours(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return <Loading />;
  }
  if (tours.length === 0) {
    return (
      <div className="refresh-tour">
        <h2>No tour left</h2>
        <button onClick={() => fetchData()}>Refresh</button>
      </div>
    );
  }
  return (
    <>
      <Tours tours={tours} setTours={setTours} />
    </>
  );
}

export default Container;
