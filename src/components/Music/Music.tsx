import React, { useState } from 'react'
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