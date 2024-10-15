import { useState } from 'react';

const APICall = ({banList, setBanList, onApiResponse}) => {
    const [loading, setLoading] = useState(false);

    const fetchCatData = async () => {
        setLoading(true);

        try {
            const res = await fetch(`https://api.thecatapi.com/v1/breeds?api_key=${import.meta.env.VITE_APP_ACCESS_KEY}`);
            const data = await res.json();
            let cat = null;
            for (let i = 0; i < data.length; i++) {
                if (!banList.includes(data[i].origin) && !banList.includes(data[i].affection_level)) {
                cat = data[i];
                break;
            }
        }

        if (cat) {
            onApiResponse(cat); // Send data back to App
          } else {
            alert("No cats available that fit the criteria.");
          }
    
        } catch (error) {
          console.error("Error fetching cat data:", error);
        } finally {
          setLoading(false);
        }
    };

    const handleBan = (attribute) => {
        setBanList([...banList, attribute]);
    };
    


    return (
        <div>
            <button className='button' onClick={fetchCatData}>
                {loading ? 'Loading...' : 'Discover 🎞'}
            </button>

            {/* Ban form (for simplicity, no form inputs) */}
            <button onClick={() => handleBan("origin")}>Ban Origin</button>
            <button onClick={() => handleBan("affection_level")}>Ban Affection Level</button>
            <button onClick={() => handleBan("energy_level")}>Ban Energy Level</button>
            <button onClick={() => handleBan("shedding_level")}>Ban Shedding Level</button>

            
            
        </div>
        
    );
};


export default APICall;
