import React from 'react'
type SettingsType={
    updateThemeAC:(darkBack:boolean)=>void
}
const Settings:React.FC<SettingsType> = ({updateThemeAC}) =>{ 
    function styleFunc(background:string,color:string,margin:string){
        return {background:background,color:color,margin:margin}
    }
    
    return(
        <div >
            <button  onClick={()=>{updateThemeAC(true)}} style={styleFunc('black','white','5px')}>Dark theme</button>    
            <button onClick={()=>{updateThemeAC(false)}} style={ styleFunc('white','black','5px')}>Light theme</button>
                </div>
    )
}

export default Settings;