import React from 'react'
import "./SearchResultsList.css"
import "./SearchResult.css"


function SearchResultsList({ suggestions, handleSuggestionClick }) {
  return (
    <div className='results-list'>

    
    
    <div >
    {suggestions.map((suggestion, index) => (
      <div className='search-result' key={index} onClick={() => handleSuggestionClick(suggestion)}>
        {suggestion.name}
      </div>
    ))}
  </div>

    </div>
  )
}

export default SearchResultsList