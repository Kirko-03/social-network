
export const required  = (field:string):undefined|string =>{
    if(field) return undefined
    return 'Field is not filled'
}
export const maxLengthCreator = (maxValue:number) =>(values:string):string|undefined=>{
    if(values.length>maxValue) return `Max length ${maxValue} symbol`
    return undefined
}
export const minPasswordCreator = (minValue:number) =>(values:string):string|undefined=>{
    if(values.length<minValue) return `Min length password ${minValue} symbol`
    return undefined
}
