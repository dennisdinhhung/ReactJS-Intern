import React, { useEffect, useState } from 'react';
import Review from './Review';
import reviews from './data';

function App() {
  
  return (
    <div className='app'>
      <div className="section">
        <Review/>
      </div>
    </div>
  )
}

export default App;
