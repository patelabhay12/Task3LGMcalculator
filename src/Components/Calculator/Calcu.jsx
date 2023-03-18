import React, { useState } from 'react';
import './calc.css';




const Calcu = () => {

    const [strings, setStrings] = useState("");
    // const [digit, setDigit] = useState();


    const setValue = (e) => {
        let str = strings;
        if (e.target.innerHTML === '=') {
            let ans = eval(str);
            setStrings(ans);
        } else {
            str += e.target.innerHTML;
            setStrings(str);
            console.log(e.target.innerHTML);
        }
    }

    const delValue = () => {
        let an = strings.slice(0, -1);
        setStrings(an);
    }
    const setNull = () => {
        setStrings("");
    }
    return (
        <div className='clc_main'>
            <div className='main_content'>
                <div className="top_content">
                    <input type="text" value={strings} />
                    <button onClick={setNull}>AC</button>
                    <button onClick={delValue} className="dle">DEL</button>
                </div>

                <div className='buttons'>
                    <button onClick={setValue} >7</button>
                    <button onClick={setValue} >8</button>
                    <button onClick={setValue} >9</button>
                    <button onClick={setValue} className='diff'>/</button>
                    <button onClick={setValue} >4</button>
                    <button onClick={setValue} >5</button>
                    <button onClick={setValue} >6</button>
                    <button onClick={setValue} className='diff'>-</button>
                    <button onClick={setValue} >3</button>
                    <button onClick={setValue} >2</button>
                    <button onClick={setValue} >1</button>
                    <button onClick={setValue} className='diff'>+</button>
                    <button onClick={setValue} >.</button>
                    <button onClick={setValue} >0</button>
                    <button onClick={setValue} className='some'>=</button>
                    <button onClick={setValue} className='diff'>*</button>
                </div>
            </div>


        </div>
    )
}

export default Calcu;