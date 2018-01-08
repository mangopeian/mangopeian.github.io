import React from 'react';

const Search = ({fetching, value, ingredientsInput, submit_button}) => {
  return (
    <form className='content-container'>
      <h1 id='home-title'>Iron Chef Leftover</h1>
      <input
        className='form-input'
        type="text"
        value={value}
        onChange={ingredientsInput}
        placeholder='What is in your fridge? eg. Egg, Pasta, Brocolli...'
        required
      />
      <button type="submit" className="form-submit" onClick={(e) => submit_button(e)}>
        { !fetching && <span className='emphasis-text'>Search For Recipes</span> }
        { fetching && <div className='loading'></div> }
      </button>
    </form>
  )
}

export default Search;