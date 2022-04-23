import { useState,useEffect } from 'react';
import styles from './Dropdown.module.css';

function Dropdown(){ 
    const [coins,setCoins]=useState([]);
    const [values,setValue]=useState("All Symbols");
    const [show,setShow]=useState(false);
    const onClick=(event)=>{
        event.preventDefault();
        setShow(current=>!show);
    }
    const onValue=(event)=>{
        event.preventDefault();
        setValue(event.target.innerText);
    }

    const getCoins = async () => {
        const json= await( 
            await fetch(
                `https://api.coinpaprika.com/v1/tickers`
                )
        ).json();
        setCoins(json);
    };
    useEffect(() => {
        getCoins();
    },[]);
    return(
        <div className={styles.dropDown}>
            <h1>Dropdown</h1>
            <button onClick={onClick} className={styles.dropDownBtn}>{values}</button>
            <ul id = "dropdown" className={show? styles.select:styles.hidden}>
                <li  onClick={onValue} name="All Symbols">All Symbols</li>
            {coins.map((coins)=>(
                <li key={coins.id}onClick={onValue} name={`${coins.symbol}USD.PERP`} >
                    {coins.symbol}USD.PERP
                </li>
            ))}
        </ul>
        </div>
    );
}
export default Dropdown;