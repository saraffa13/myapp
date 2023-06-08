
import { useState } from 'react';
import classes from './Button.module.css';
import Cendol from './Cendol';

const Button = () => {

    const[count,setCount] = useState(1);
    const[colorBool,setColorBool] = useState(false);

    const [randomColor, setRandomColor] = useState('#14BDAD');

    const generateRandomColor = () => {
        const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        setRandomColor(color);
    };

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
                <div className={classes.circle} onClick={counterIncrementer}>
                    <Cendol count={count}/>
                    <div className={classes.counterIncrementer}>Click to increase counter</div>
                </div>
            </div>
            <button style={{
                backgroundColor: randomColor
            }} className={classes.colorChanger} onClick={generateRandomColor}>Change Color</button>
        </div>
    );
}

export default Button;