import React from 'react';

const ErrorCard = () => {
  return(
    <div className='error-container'>
      <p className='error-text'>Sorry, we could not find any recipes for those ingredients. </p>
      <p className='error-text'>Are any of the ingredients misspelled?</p>
      <p className='error-text'>Are the ingredients separated only by a space?</p>
    </div>
  )
}
export default ErrorCard;