import React from 'react'
import {WrappedFieldProps} from "redux-form";
import styles from './FormComponents.module.css'

const FormControl: React.FC<WrappedFieldProps> = (props) => {
    const {meta: {touched, error}, children} = props
    const hasError = touched && error
    return (
        <div className={hasError ? styles.formControl + " " + (hasError ? styles.error : "") : ""}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, children, ...restProps} = props
    return (<div>
        <FormControl {...props}><textarea {...input}{...restProps}/></FormControl>
    </div>)
}
export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, children, ...restProps} = props
    return (<div>
        <FormControl {...props}><input {...input}{...restProps}/></FormControl>
    </div>)
}