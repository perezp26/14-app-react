import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct';
import { createContext, ReactElement, CSSProperties } from 'react';

import { ProductContextProps, Product } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product : Product,
    children?: ReactElement | ReactElement[],
    className?: string, 
    style?: CSSProperties
}

export const ProductCard = ({ product, children, className, style }: Props) => {

    const {counter, increaseBy} = useProduct();

  return (
        <Provider value={{
            product,
            counter,
            increaseBy,
        }}>
             <div 
                className={ `${styles.productCard} ${ className }` } 
                style={ style }
            >
                
                { children }
                
            </div>
        </Provider>
           
  )
}
