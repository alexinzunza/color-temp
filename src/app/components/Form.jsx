import React, { useEffect, useState } from 'react'

export default function Form({ }) {

    const [locationInputValue, setLocationInputValue] = useState('');
    const [tempLocationValue, setTempLocationValue] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
    }

    function handleChange(e) {
       setTempLocationValue(e.target.value);
    }

    function handleClick() {
        setLocationInputValue(tempLocationValue);
    }

    /* useEffect(()=>{
        console.log(locationInputValue);
    }, [locationInputValue]); */

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="locationInput" id="locationInput" placeholder='Enter a city name'  onChange={handleChange}/>
      <input type="submit" value="Search" onClick={handleClick} />
    </form>
  )
}
