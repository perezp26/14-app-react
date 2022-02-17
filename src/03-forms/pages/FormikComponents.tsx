import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css'

export const FormikComponents = () => {

       
  return (
    <div>
        <h1>Formik Components </h1>

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
                                        <label htmlFor='firstName'>First Name</label>
                                        <Field name="firstName" type="text" />
                                        <ErrorMessage name="firstName" component="span" />

                                        <label htmlFor='lastName'>Last Name</label>
                                        <Field name="lastName" type="text" />
                                        <ErrorMessage name="lastName" component="span" />

                                        <label htmlFor='email'>Email Addres</label>
                                        <Field name="email" type="text" />
                                        <ErrorMessage name="email" component="span" />
                                        
                                        <label htmlFor='jobType'>Job Type</label>
                                        <Field name="jobType" as="select">
                                            <option value=""> Pick something </option>
                                            <option value="developer"> Developer </option>
                                            <option value="designer"> Designer </option>
                                            <option value="it-senior"> IT Senior </option>
                                            <option value="it-jr"> IT Jr. </option>
                                        </Field>
                                        <ErrorMessage name="jobType" component="span" />                                        
                                        
                                        <label>
                                            <Field name="terms" type="checkbox" />
                                            Terminos y Condiciones
                                        </label>                                        
                                        <ErrorMessage name="terms" component="span" />

                                        
                                        

                                        <button type='submit'>Submit</button>
                                </Form>
                        )
                    }
        </Formik>

        
    </div>
  )
}
