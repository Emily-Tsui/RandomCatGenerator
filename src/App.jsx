import { useState } from 'react'
import './App.css'
import APICall from './components/APICall';
//import BanList from './components/BanList';

const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

function App() {
  const [banList, setBanList] = useState([]);
  const [catData, setCatData] = useState(null);

  const handleApiResponse = (data) => {
    setCatData(data);
  };

  return (
      <div>
        <h1>Random Cats</h1>
        <h2>Discover cats with certain physical traits displayed and keep generating!</h2>
        
        <APICall 
          banList={banList} 
          setBanList={setBanList}
          onApiResponse={handleApiResponse}
        />

        {catData && (
                <div className="cat-details">
                  <img src={catData.image?.url} alt="Random Cat" />
                  <p>Origin: {catData.origin}</p>
                  <p>Affection Level: {catData.affection_level}</p>
                  <p>Energy Level: {catData.energy_level}</p>
                  <p>Shedding Level: {catData.shedding_level}</p>
                </div>
        )}

        <div>
            <h3>Ban List</h3>
              <ul>
                {banList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
        </div>

      </div>

  )
}

export default App;
