import React from "react";
import {login} from "./redux/authReducer";
// import {Input} from "./Forms/FormComponents";
import {maxLengthCreator, minPasswordCreator, required} from "./validators/validators";
import {connect} from "react-redux";
import {RootReduxState} from "./redux/redux-store";
import {Redirect} from "react-router-dom";
import {createFormikField} from "./Forms/FuncHelper";
import {Form, Formik} from "formik";
type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    isAuth: boolean
    login: (email: string, password: string, rememberMe: boolean) => void
}
const password = minPasswordCreator(5)
const length = maxLengthCreator(30)
const LoginForm = (props: FormDataType) => {
    if (props.isAuth) return <Redirect to={'/profile'}/>
    const onSubmit = (props: FormDataType) => {
        props.login(props.email, props.password, props.rememberMe)
    }
    return <div>
        <Formik initialValues={{
            email: props.email,
            password: props.password,
            rememberMe: props.rememberMe,
            isAuth: props.isAuth,
            login: props.login
        }} onSubmit={onSubmit}>
            (<Form>
            {createFormikField('email', 'email', 'input', [required, length], {}, '')}
            {createFormikField("password", "Password", 'input', [required, password], {type: "password"}, '')}
            {createFormikField("rememberMe", "RememberMe", 'input', [], {type: "checkbox"}, 'Remember login')}

            <div>
                <button type='submit'>Login</button>
            </div>

        </Form>)</Formik></div>
}
//
// export const LoginRedux = reduxForm<FormDataType>({form: "login"})(LoginForm)

const MapStateToProps = (state: RootReduxState) => ({
    email: state.auth.email,
    password: state.auth.password,
    rememberMe: false,
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
// export const Login: React.FC<MapStateToProps & MapDispatchToProps> = (props) => {
//     if (props.isAuth) return <Redirect to={'/profile'}/>
//
//     return (<div>
//         <h1>LOGIN</h1>
//         <LoginRedux onSubmit={onSubmit}/>
//     </div>)
// }



// export default connect(MapStateToProps, {login})(LoginForm)