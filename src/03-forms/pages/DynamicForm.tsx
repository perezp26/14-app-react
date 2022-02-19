import { Formik, Form } from 'formik';
import { MySelect, MyTextInput } from '../components';
import formJson from '../data/custom-form.json';
import * as Yup from 'yup';

const initialValues:{ [x: string]: any } ={};
const requiredFIelds: { [ x: string ]: any } = {};

for (const input of formJson) {
    initialValues[ input.name ] = input.value;

    if( !input.validations ) continue;

    let schema = Yup.string();

    for ( const rule of input.validations){
        if( rule.type === 'required'){
            schema = schema.required('Este campo es requerido');
        }

        if ( rule.type === 'minLength'){
            schema = schema.min( (rule as any ).value || 2, `Minimo de ${ (rule as any ).value || 2 } de caracteres`);
        }
        if ( rule.type === 'email'){
            schema = schema.email( 'Correo no válido');
        }
    }
    requiredFIelds[input.name] = schema;
    
}
const validationSchema  = Yup.object({...requiredFIelds});

export const DynamicForm = () => {
  return (
    <div>
        <h1> Dynamic Form </h1>

        <Formik
            initialValues={ initialValues }
            onSubmit={ (values) =>{
                console.log(values);
                
            }}
            validationSchema = { validationSchema }
        >
            {
                (formik) =>(

                    <Form noValidate>

                       { formJson.map( ({type, name, label, placeholder, options}) => {

                                if ( type === 'input' || type ==="password" || type==="email"){

                                    return <MyTextInput 
                                            key={ name }
                                                        type={( type as any)}
                                                        name= { name }
                                                        label = { label }
                                                        placeholder = { placeholder }
                                            />
                                }else if ( type === 'select'){
                                    return (
                                        <MySelect 
                                            key={name}
                                            label = { label }
                                            name = { name }
                                        >
                                            <option value="" > Select an option</option>
                                            {
                                                options?.map( ({id, label}) => (
                                                    <option key= { id } value={ id } > { label } </option>
                                                ))
                                            }
                                        </MySelect>
                                    )
                                }
                                
                             throw new Error(`El type ${ type }, no es soportado`);
                             
                           
                       })}

                        <button type='submit'>Submit</button>

                    </Form>
                )
            }
        </Formik>
    </div>
  )
}
