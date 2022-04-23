import { useState } from 'react';
import styles from "./Toggle.module.css";
function Toggle(){
    const [toggle,setToggle]=useState(false);
    const onClick=()=>{
        setToggle((current)=>!toggle);
    }
    return(
        <div >
            <h1>Toggle</h1>
            <div className={styles.toggle_part}>
                <button className={`${styles.toggle_btn} ${toggle? styles.clicked:null}`} onClick={onClick}>기본</button>
                <button className={`${styles.toggle_btn} ${!toggle? styles.clicked:null}`} onClick={onClick}>상세</button>
            </div>
        </div>
    );
}
export default Toggle;  