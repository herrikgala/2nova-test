import FormHeader from "components/FormHeader";
import FormSelect from "components/FormSelect";
import FormInput from "components/FormInput";
import React, { useEffect } from "react"
import { useState } from "react";
import { useRef } from "react";
import moment from 'moment';
import 'moment/locale/ru' 

const Form: React.FC = () =>{
    const [city, setCity] = useState<string>('Артёмовск');
    const [password, setPassword] = useState<string>('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [mail, setMail] = useState('');
    const [agree, setAgree] = useState(false);
    const [time, setTime] = useState(new Date());
    
    //  error texts 💥🪂🍔
    const [passwordText, setPasswordText] = useState(' ')
    const [passwordRepeatText, setPasswordRepeatText] = useState(' ')
    const [mailText, setMailText] = useState(' ')

    const btnRef = useRef(null);
    moment.locale('ru');

    useEffect(()=>{
        window.addEventListener('keyup', listenToEnter)
        return ()=>{
            window.removeEventListener('keyup', listenToEnter)
        };
    },[])

    return(
        <div className="px-8 py-12 bg-white h-max shadow-lg rounded w-[600px] md:w-[700px] lg:w-[900px]">
            <FormHeader/>
            <FormSelect 
             value={city}
             onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setCity(event.target.value)}}/>
            <hr className="h-px border-gray-200"/>
            
            <FormInput 
             label="Пароль"
             hint="Ваш новый пароль должен содержать не менее 5 символов."
             value={password}
             onChange={(e)=> setPassword(e.target.value)}
             helperText={passwordText}
             type='password'
             onFocus={()=> {if(passwordText.trim()) setPasswordText(' ')}}
             />

            <FormInput 
             label="Пароль еще раз"
             hint="Повторите пароль, пожалуйста, это обезопасит вас с нами на случай ошибки."
             value={passwordRepeat}
             onChange={(e)=> setPasswordRepeat(e.target.value)}
             helperText={passwordRepeatText}
             type='password'
             onFocus={()=> {if(passwordRepeatText.trim()) setPasswordRepeatText(' ')}}
             />

            <hr className="h-px border-gray-200"/>
            <FormInput 
             label="Электронная почта"
             hint="Можно изменить адрес, указанный при регистрации. "
             value={mail}
             onChange={(e)=> setMail(e.target.value)}
             helperText={mailText}
             onFocus={()=> {if(mailText.trim()) setMailText(' ')}}
             />

            <FormInput 
             label="Я согласен"
             hint=""
             type="checkbox"
             checked={agree}
             onChange={(e)=> setAgree(e.target.checked)}
             />
            
            <div className="grid grid-cols-12 items-baseline my-4">
                <span className="col-span-3"/>
                <button className="col-span-2 bg-button w-full p-2 text-white rounded" onClick={handleSubmit} ref={btnRef}>
                    Изменить
                </button>
                <span className="col-span-6 text-left mx-2">
                    Последние изменения {" "}
                    {moment(time).format('LLL')}
                </span>
            </div>
        </div>
    )

    function handleSubmit(){
        const isLengthValid = checkForLength();
        const arePasswordsEqual = comparePassword();
        const isEmailvalid = checkForEmail();

        if(!isLengthValid) setPasswordText('Используйте не менее 5 символов');
        if(!arePasswordsEqual) setPasswordRepeatText('Пароли не совпадают')
        if(!isEmailvalid) setMailText('Неверный E-mail')

        if(!password.length) setPasswordText('Укажите пароль');
        if(!passwordRepeat.length) setPasswordRepeatText('Укажите пароль')
        if(!mail.length) setMailText('Укажите E-mail')

        if(!password.length || !passwordRepeat.length || !mail.length || !isLengthValid || !arePasswordsEqual || !isEmailvalid){
            return
        }
        setTime(new Date());
        console.log({
            city: city,
            password: password,
            mail: mail,
            agree: agree,
        });
    }

    function listenToEnter(e:KeyboardEvent){
        if(e.key==='Enter'){
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore: Object is possibly 'null'.
            btnRef.current.click();
        }
    }

    // validations 🎃💛

    function checkForLength(): boolean{
        if(password.length<5) return false 
        return true
    }

    function comparePassword(): boolean{
        if(password!==passwordRepeat) return false 
        return true
    }

    function checkForEmail(): boolean{
        if(mail.indexOf('@')>0) return true 
        return false
    }
}

export default Form;