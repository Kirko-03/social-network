import React from "react";
import {InjectedFormProps, reduxForm} from 'redux-form'
import {getCaptchaUrl, login} from "./redux/authReducer";
import {Input} from "./Forms/FormComponents";
import {maxLengthCreator, minPasswordCreator, required} from "./validators/validators";
import {connect} from "react-redux";
import {RootReduxState} from "./redux/redux-store";
import {Redirect} from "react-router-dom";
import {createField} from "./Forms/FuncHelper";
type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captchaUrl: string
}
type MapStateToProps = {
    isAuth: boolean

}
type MapDispatchToProps = {
    login: (email: string, password: string, rememberMe: boolean,captcha:string) => void
    getCaptchaUrl:(captchaUrl: string)=>void
}

const password = minPasswordCreator(5)
const length = maxLengthCreator(30)
export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props,captchaUrl) => {

    return (<form onSubmit={props.handleSubmit}>
        {createField('email', 'email', Input, [required, length], {}, '')}
        {createField("password", "Password", Input, [required, password], {type: "password"}, '')}
        {props.error && <div style={{color: 'red', border: '1px red solid', maxWidth: '200px'}}>
            {props.error}
        </div>}
        {createField("rememberMe", "RememberMe", Input, [], {type: "checkbox"}, 'Remember login')}
        {captchaUrl && <img src={captchaUrl}/>}

        {captchaUrl && createField("CaptchaUrl", "captchaUrl", Input, [required], [], '')}
        <div>
            <button>Login</button>
        </div>

    </form>)
}
debugger

export const LoginRedux = reduxForm<FormDataType>({form: "login"})(LoginForm)

const MapStateToProps = (state: RootReduxState) => ({isAuth: state.auth.isAuth,captchaUrl:state.auth.captcha})
 const Login: React.FC<MapStateToProps & MapDispatchToProps> = (props) => {
    if (props.isAuth===true) return <Redirect to={'/profile'}/>
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe,formData.captchaUrl)
    }
    return (<div>
        <h1>LOGIN</h1>
        <LoginRedux onSubmit={onSubmit}    />
    </div>)
}


export default connect(MapStateToProps, {login,getCaptchaUrl})(Login)