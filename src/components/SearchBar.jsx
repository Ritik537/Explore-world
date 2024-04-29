import './SearchBar.css';
import SearchResultsList from "./SearchResultsList"
import { FaSearch } from 'react-icons/fa';
import Api from './Api';


import React, { useState, useEffect } from 'react';


import data from './csvjson.json';

function SearchBar({}) {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('Choose');


  const handleChange = (e) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);
  };

  useEffect(() => {
    if (inputValue !== "") {
      const citydata = data.filter(city => {


        const name = city.name.toLowerCase();
        return name.startsWith(inputValue.toLowerCase());
      })

      setSuggestions(citydata);
    } else {
      setSuggestions([]);
    }
  }, [inputValue])


  const handleSuggestionClick = (suggestion) => {
    setSuggestions([]);
    setInputValue(suggestion.name);

  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };


  

  return (
    <>
      <div className='input-wrapper'>
        <FaSearch id='search-icon' size={30} />
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Search any city...."
        />


        <div >
          <select value={selectedOption} onChange={handleOptionChange} className="select-box">
            <option value="Choose">Choose</option>
            <option value="Attractions">Attractions</option>
            <option value="Hotels">Hotels</option>
            <option value="Restaurants">Restaurants</option>
          </select>

        </div>

        <Api inputValue={inputValue} selectedOption={selectedOption} />

      </div>


      <SearchResultsList
        suggestions={suggestions}
        handleSuggestionClick={handleSuggestionClick}
      />

    </>

  );
}

export default SearchBar;
