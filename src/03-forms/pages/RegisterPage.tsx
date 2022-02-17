

import '../styles/styles.css';
import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';

interface RegisterData {
    name:string,
        email:string,
        password1:string,
        password2:string,
}

export const RegisterPage = () => {

    const { formData,
            name,
            email,
            password1,
            password2, 
             onChange, resetForm, isValidEmail} = useForm<RegisterData>(
                {
                    name:'Luis',
                    email:'luis@gmail.com',
                    password1:'123456',
                    password2:'123456',
                }
             );

    const onSubmit = ( e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();



        console.log(formData);
        
    }
  return (
    <div>
            <h1> Register Page</h1>

            <form noValidate onSubmit={  onSubmit }>
                <input 
                    type="text"
                    placeholder="Name"
                    name='name'
                    value = { name }
                    onChange = { onChange }
                    className = { `${ name.trim().length <= 0 && 'has-error' }`}
                />
                { name.trim().length <= 0 && <span>Este campo es obligatorio</span>}
                <input 
                    type="email"
                    placeholder="Email"
                    name='email'
                    value = { email }
                    onChange = { onChange }
                    className = { `${ !isValidEmail(email) && 'has-error' }`}
                />
                 { !isValidEmail(email) && <span>Este mail no es válido</span>}
                <input 
                    type="password"
                    placeholder="Password"
                    name='password1'
                    value = { password1 }
                    onChange = { onChange }
                />
                 { password1.trim().length <= 0 && <span>Este campo es obligatorio</span>}
                 { password1.trim().length <6 && <span>El pass debe ser mayor a 6 caracteres</span>}
                <input 
                    type="password"
                    placeholder="Repeat Password"
                    name='password2'
                    value = { password2 }
                    onChange = { onChange }
                />
                 { password2.trim().length <= 0 && <span>Este campo es obligatorio</span>}
                 { password1 !== password2 && <span>Los pass no coinciden </span>}


                <button type="submit"> Create </button>
                <button type="button" onClick={ resetForm }> Reset Form </button>
            </form>
            <pre> {JSON.stringify(formData)} </pre>
    </div>
  )
}
