import React, { useEffect, useState } from 'react'

export default function Temperature() {
    //Hacer la solicitud en el componente form y enviar como props la infor al componente temperatura.
    const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '98a9072af1msh56953915c39a8e9p15d0f4jsn401599ecee0b',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    useEffect(()=>{
        async function getTempData(){
            try {
                const res = await fetch(url, options);
                const data = await res.json();
                console.log(data);

                setCurrentLocation(`${data?.location.name}, ${data.location.country}`);
                setCurrentTemperature(`${data?.current.temp_c}°`);

            } catch (error) {
                console.error(error);
            }
        }
        getTempData();
    });
    
    const [currentLocation, setCurrentLocation] = useState(`Loading...`);
    const [currentTemperature, setCurrentTemperature] = useState(`0°`);


    return (
        <div>
            <p>{currentLocation}</p>
            <h1>{currentTemperature}</h1>
        </div>
    )
}





