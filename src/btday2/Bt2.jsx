import React, {useCallback, useEffect, useMemo, useState } from "react";


//Bài tập: sử dụng useState tạo 1 state tên count, 
//render 1 button trên giao diện và hiển thị số lần bấm vào button đó
const Bt2 = ({title, test, onClick}) => {
    const [value, setValue] = useState();
    const [count, setCount] = useState(0);
    const temp = useMemo(() => {
    },[]);
    const callback = useCallback(() => {
    },[]);
    const handleClick = () =>{
        setCount(count + 1);
    };
    const handleChange = (e) => {
        setValue(e.target.value);
        console.log(value);
    };
    useEffect(() => {
        console.log('Hai da vao trong effect :))')
    },[count]);

    return ( 
        <>
        <p>
            Title: {title} {test}
        </p>
            <button onClick={handleClick}>Click click {count}</button>
            < input value = {value} onChange={handleChange}/>
        </>
    );

};
export default React.memo(Bt2);