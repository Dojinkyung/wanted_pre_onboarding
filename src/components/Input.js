import { useState, } from 'react';
import styles from "./Input.module.css";
import {faCheckCircle,faEye, faEyeSlash} from'@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
function Input(){
    const [values, setValues] = useState("");
    const [errors, setErrors] = useState({});
    const [show, setShow] = useState(false);
    
    const EMAIL_RE = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/, "i");
    
    const onClick = (event) => {
        event.preventDefault();
        setShow((current)=>!show);
    };

    const onChange = (event) => {
        event.preventDefault();
        setValues(event.target.value);
    };

    const onBlur = (event) => {
        event.preventDefault();
        if (event.target.value &&!EMAIL_RE.test(event.target.value)){
            setErrors(true);
        }
        else if (!event.target.value) {
            setErrors(true);
        }
        else{
            setErrors(false);
        }
    };  
    return (
    <div>
        <h1>Input</h1>
        <form>
            <label>Email</label>    
            <div className={styles.input}>
                <input
                className={styles.input_email}
                type="email"
                name="email"
                placeholder="E-mail"
                onChange={onChange}
                onBlur={onBlur}
                />
                <span> 
                    <FontAwesomeIcon icon={faCheckCircle}
                    className={errors?  styles.errorcolor:styles.correct}/>
                </span>
            </div>
            {errors? <div className={styles.errorText}>Invalid e-mail address</div>:null}
        </form>
        <form>
            <label>Password</label>
            <div className={styles.input}>
                <input
                className={styles.input_password}
                type={show? "text":"password"}
                name="password"
                placeholder="Password"
                onChange={onChange}
                />
                <button onClick={onClick} className={styles.passwordShow_btn}> 
                    <FontAwesomeIcon icon={show? faEye:faEyeSlash}/>
                </button>
            </div>
        </form>
    </div>
    );
    };
export default Input;