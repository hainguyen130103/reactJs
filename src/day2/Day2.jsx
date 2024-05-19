import React, { useCallback, useEffect, useMemo, useState } from "react";
const Day2 = ({title, test, onClick}) => {
    const [value, setValue] = useState('');
    const [count, setCount] = useState(0);
    const temp = useMemo(() => {
        //return value
    },[]);

    const callback = useCallback(() => {
        //return function
    },[]);

    const handleClick = () =>{
        setCount(count + 1);
    };

    const handleChange = (e) => {
        setValue(e.target.value);
        console.log(value);
    };

    useEffect(() => {
        console.log('Da chay vao effect')
    },[count]);

    
    return ( 
        <>
        <p>
            Title: {title} {test}
        </p>
            <button onClick={handleClick}>Click me! {count}</button>
            < input value = {value} onChange={handleChange}/>
        </>
    );
};

export default React.memo(Day2);