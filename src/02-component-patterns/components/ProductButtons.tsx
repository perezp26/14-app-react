import { CSSProperties, useCallback, useContext } from 'react';

import styles from '../styles/styles.module.css'
import { ProductContext } from './ProductCard';

interface Props {
    className?: string;
    style?: CSSProperties 
}

export const ProductsButtons = ({ className, style } : Props )  =>{


    const {increaseBy, counter, maxCount } = useContext(ProductContext);

    const isMaxReached = useCallback(
      () => !!maxCount && counter === maxCount,
      [counter, maxCount],
    )
    
    //TODO: isMaxReached = useCollback, [count, maxCount] 
    // true si el coutn == maxCount
    // false si no lo es

    return(
        <div 
            className={ `${styles.buttonsContainer} ${ className }`}
            style = { style }
        >
                    <button 
                        className={ styles.buttonMinus }
                        onClick = { () => increaseBy(-1) }> - </button>
                    <div className={ styles.countLabel }> { counter } </div>
                    <button 
                        className={ `${styles.buttonAdd} ${ isMaxReached() && styles.disable}` }
                        onClick = { () => increaseBy(1) }> + </button>
        </div>
    )
}