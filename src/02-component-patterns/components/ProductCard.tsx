import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct';
import { createContext,  CSSProperties } from 'react';

import { ProductContextProps, Product, onChngeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;



export interface Props {
    product : Product,
    //children?: ReactElement | ReactElement[],
    children: ( args : ProductCardHandlers ) => JSX.Element 
    className?: string, 
    style?: CSSProperties,
    onChange?: (args : onChngeArgs ) => void,
    value?: number,
    initialValues: InitialValues,
}

export const ProductCard = ({ product, children, className, style, onChange, value, initialValues }: Props) => {

    const {counter, increaseBy, maxCount, isMaxCountReached, reset} = useProduct( { onChange, product, value, initialValues } );

  return (
        <Provider value={{
            product,
            counter,
            increaseBy,
            maxCount
        }}>
             <div 
                className={ `${styles.productCard} ${ className }` } 
                style={ style }
            >
                
                { 
                    children( {
                        count : counter, 
                        isMaxCountReached,
                        maxCount :  initialValues?.maxCount,
                        product,
                        increaseBy,
                        reset
                        
                    }) 
                }
                
            </div>
        </Provider>
           
  )
}
