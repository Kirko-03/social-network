import { updateThemeAC } from '../../redux/appReducer'
type SettingsType={
    updateThemeAC:(darkBack:boolean)=>void
}
const Settings:React.FC<SettingsType> = ({updateThemeAC}) =>{ 
    return(
        <div>
            <button onClick={()=>{updateThemeAC(true)}} style={{background:'black',color:'white'}}>Dark theme</button>    
            <button onClick={()=>{updateThemeAC(false)}} style={{background:'white',color:'black'}}>Light theme</button>
                </div>
    )
}

export default Settings;