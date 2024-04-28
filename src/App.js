import React from 'react';
import "./App.css"
import SearchBar from './components/SearchBar';
import CardComponent from './components/CardComponent';
import { DataProvider } from './components/DataContext';
import myImage from './LlUXZ6cxQi6EG8Ed94QpvA.png';


function App() {





  return (

    <DataProvider>
      <div className='App'>

        <div className="image-container">
        <img src={myImage} alt="Description of the image" style={{ backgroundColor: 'lightgray' }}/>
        </div>

        <div className="search-bar-container">

          <SearchBar />

        </div>


        <CardComponent />

      </div>
    </DataProvider>
  );
}

export default App