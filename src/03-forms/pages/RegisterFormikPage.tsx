

import '../styles/styles.css';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {

  return (
    <div>
            <h1> Register Formik Page</h1>

            <Formik
              initialValues={{
                  name: '',
                  email: '',
                  password1: '',
                  password2: '',
              }}
              onSubmit={
                  (values) => { console.log(values ) }
              }   
              validationSchema = { Yup.object({
                name: Yup.string()
                                .required('Requerido')
                                .max(15,'Debe tener 15 caracteres o menos'),
                email: Yup.string()
                                .required('Requerido')
                                .email('Este no es email valido'),
                password1: Yup.string()
                            .min(6,'Minimo 6 caracteres')
                            .required('Requerido'),
                password2: Yup.string()
                            .oneOf([Yup.ref('password1')], 'Las constraseñas no soy iguales')
                            .required('Requerido'),                              

                                })
              }
            >      
              {
                  ({handleReset}) =>(
                      <Form>
                          <MyTextInput 
                            label="Nombre" 
                            name="name" 
                            type="text"        
                            placeholder= "Nombre"    
                          />
                          <MyTextInput 
                            label="Email" 
                            name="email" 
                            type="text"        
                            placeholder= "Email"    
                          />
                          <MyTextInput 
                            label="Password" 
                            name="password1" 
                            type="password"        
                            placeholder= "*********"    
                          />
                          <MyTextInput 
                            label="Confirm Password" 
                            name="password2" 
                            type="password"        
                            placeholder= "*********"   
                          />

                        <button type="submit"> Create </button>
                        <button type="button" onClick={ handleReset } > Reset Form </button>

                      </Form>
                  )
              }

            </Formik>
    </div>
  )
}
