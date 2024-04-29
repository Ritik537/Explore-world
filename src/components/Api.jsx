import React,{useState} from 'react';
import './SearchBar.css';
import './SearchResult.css';
import { useData  } from './DataContext';
import CircularProgress from '@material-ui/core/CircularProgress';


function Api({ inputValue, selectedOption }) {

  const { setResponseData } = useData();

  const [isLoading, setIsLoading] = useState(false);

  const [weatherIcon, setWeatherIcon] = useState(null);

  const [showweather, setshowweather] = useState(false);

  const handleSearch = () => {

    setIsLoading(true);

    let url = '';
    if (selectedOption !== 'Choose' && inputValue.trim() !== '') {
      const city = encodeURIComponent(inputValue.trim());
      url = `https://explore-worldserver.onrender.com/${selectedOption.toLowerCase()}/${city}`;
      // Send request to Spring Boot application
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          // Handle response data
          console.log(data.weather);
          setIsLoading(false);
          setResponseData(data.response1.data.filter((place)=> place.name && place.num_reviews>0 && place.rating));
          setshowweather(true)
          const icon =  data.weather.weather[0].icon;
          setWeatherIcon(icon);
          console.log(icon);
          //setmainData(data.response1.data);
        })
        .catch(error => {
          // Handle error
          console.error('There was a problem with the fetch operation:', error);
        });
    } else {
      console.log('Please select an option and enter a city');
    }
  };

  return (
    <>
    <button onClick={handleSearch} className="search-button">
      Search
    </button>
    {isLoading && <CircularProgress color="secondary" className="circular-progress"/>}
    {showweather && <img src={`https://openweathermap.org/img/w/${weatherIcon}.png`}/>}
    
    </>
  );
}

export default Api;
