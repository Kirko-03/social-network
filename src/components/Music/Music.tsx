import React, { useState } from 'react'

// type ArType={
//     age:number
// }
//
// let ar:ArType = {age: 10}
//
//
// function inc(m: ArType) {
//     return {...m,age:m.age+1}
// }
//
// inc(ar)
// console.log(inc(ar))

const Music = () =>{
   const [check,setCheck] = useState(false)
    return(
    <div>
        Music

        <input type={'checkbox'} checked={check} onClick={()=>setCheck(!check)}/>
    </div>
    )
}

export default Music;