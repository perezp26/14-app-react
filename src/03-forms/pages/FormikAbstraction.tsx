import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyCheckbox, MyTextInput, MySelect} from '../components';

import '../styles/styles.css'

export const FormikAbstraction = () => {

       
  return (
    <div>
        <h1>Formik Abstraction </h1>

        <Formik
            initialValues= { {
                firstName:'',
                lastName: '',
                email: '',
                terms: false,
                jobType: ''
            } }
            onSubmit= { (values) =>{
                console.log(values);
                
            } }
            validationSchema = { Yup.object({
                firstName: Yup.string()
                                .required('Requerido')
                                .max(15,'Debe tener 15 caracteres o menos'),
                lastName: Yup.string()
                                .required('Requerido')
                                .max(10,'Debe tener 15 caracteres o menos'),
                email: Yup.string()
                                .required('Requerido')
                                .email('Este no es email valido'),
                terms: Yup.boolean()
                                .oneOf([true],'Debe de aceptar las condiciones'),
                jobType: Yup.string()
                            .required('Requerido')
                            .notOneOf(['it-jr'], 'Esta opcion no es permitida'),                                

                                })
                            }
                
        >
                    {
                        (formik) =>(
                                <Form>
                                        <MyTextInput 
                                            label="First Name" 
                                            name="firstName" 
                                            type="text"        
                                            placeholder= "Nombre"                                 
                                        />

                                        <MyTextInput 
                                            label="Last Name" 
                                            name="lastName" 
                                            type="text"        
                                            placeholder= "Apellido"                                 
                                        />

                                        <MyTextInput 
                                            label="Email Addres" 
                                            name="email" 
                                            type="email"        
                                            placeholder= "Email"                                 
                                        />

                                        <MySelect name="jobType" label="Job Type">
                                            <option value=""> Pick something </option>
                                            <option value="developer"> Developer </option>
                                            <option value="designer"> Designer </option>
                                            <option value="it-senior"> IT Senior </option>
                                            <option value="it-jr"> IT Jr. </option>
                                        </MySelect>                                    
                                        
                                        <MyCheckbox label="Terminos y Condiciones" name="terms" />

                                        <button type='submit'>Submit</button>
                                </Form>
                        )
                    }
        </Formik>

        
    </div>
  )
}
