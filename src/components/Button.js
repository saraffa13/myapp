
import { useState } from 'react';
import classes from './Button.module.css';
import Cendol from './Cendol';

const Button = () => {

    const[count,setCount] = useState(1);
    const[colorBool,setColorBool] = useState(false);

    const counterIncrementer = () => {
        setCount(count=>count+10);
    }
    const colorChanger = () => {
        setColorBool(colorBool=>!colorBool);
        console.log(colorBool);
    }

    return (
        <div className={classes.Button}>
            <div className={classes.circleHolder}>
                <div className={classes.circle}>
                    <Cendol count={count}/>
                    <button className={classes.counterIncrementer} onClick={counterIncrementer}>Click to increase counter</button>
                </div>
            </div>
            <button className={`${classes.colorChanger} ${colorBool?classes.col2:classes.col1}`} onClick={colorChanger}>Change Color</button>
        </div>
    );
}

export default Button;