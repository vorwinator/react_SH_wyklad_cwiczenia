import React from "react"
interface props{
    changeNumber:()=>void;
    nazwa: string;
}
const Button: React.FC<props>=({changeNumber,nazwa})=>{
    return (
        <>
            <button onClick={changeNumber}>
                {nazwa}
            </button>
        </>
    )
}
export default Button;
