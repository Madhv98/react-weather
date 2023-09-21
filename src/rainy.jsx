import React, { useState } from 'react'
import styles from "./rainy.module.css"
function Rainy() {

     const [weather, setWeather] = useState({

temparature: '55℉',
cityName: "HOUSTON"

 })
 return <>
<div className={styles.container}>
     <div className={styles.box}> 
        <h1>Rainy </h1>
<img src="https://cdn.pixabay.com/animation/2023/03/26/01/15/01-15-42-612_512.gif" alt="" />
<h1>{weather.cityName}</h1>
<p> {weather.temparature}</p>


        </div>

        </div>
       
        </>
    
}

export default Rainy;