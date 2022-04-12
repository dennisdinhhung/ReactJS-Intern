import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true)
    try{
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error, 1)
    }
  }

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours);
  }

  // have the fetchTours run only once during initilization
  useEffect(() => {
    fetchTours()
  }, [])

  if(loading){
    return (
      <Loading/>
    )
  }

  if(tours.length === 0 ){
    return(
      <div className='title'>
        <h2>
          There are no tours left
        </h2>
        <button
          onClick={() => fetchTours()}
          >
            Refresh</button>
      </div>
    )
  }

  return (
    <div>
      <Tours tours={tours} removeTour={removeTour}/>
    </div>
    )
}

export default App
