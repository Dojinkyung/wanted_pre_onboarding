import { useState } from 'react';
import styles from "./Tab.module.css";

function Tab(){
    const [tab,setTab]=useState("0");
    const onClick=(event)=>{
        event.preventDefault();
        setTab(event.target.id);
    }
    return(
        <div>
            <h1>Tab</h1>
            <div className={styles.Tab}>
                <button id='0' onClick={onClick} className={`${styles.Tab_btn} ${tab==='0'? styles.clicked:null}`}>감자</button>
                <button id='1' onClick={onClick} className={`${styles.Tab_btn} ${tab==='1'? styles.clicked:null}`}>고구마</button>
                <button id='2' onClick={onClick} className={`${styles.Tab_btn} ${tab==='2'? styles.clicked:null}`}>카레라이스</button>
            </div>
        </div>
    );
}
export default Tab;