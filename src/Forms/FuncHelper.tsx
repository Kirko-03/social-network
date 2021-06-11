import { Field } from "formik";
import React from "react";

export const updateObjectArray = (items: Array<any>, itemId: number, objPropName: string, newObjProps: {}) => {
    return items.map(i => {
        if (i[objPropName] === itemId) {
            return {...i, ...newObjProps}
        }
        return i
    })
}
export const createField = (name: string, placeholder: string,  component: Function, validators: any, props: Object, text: string) => {
    return <div>
        {text}
        <Field name={name} placeholder={placeholder} component={component}  validate={validators}{...props} />
    </div>
}
export const createFormikField = (name: string, placeholder: string,  component: string, validators: any, props: Object, text: string) => {
    return <div>
        {text}
        <Field name={name} placeholder={placeholder} component={component}  validate={validators}{...props} />
    </div>
}