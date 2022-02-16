import { useState,useEffect, useRef } from "react";
import { onChngeArgs, Product, InitialValues } from '../interfaces/interfaces';

interface useProductArgs{
  product : Product,
  onChange?: ( args: onChngeArgs) => void,
  value?: number,
  initialValues?: InitialValues
}

export const useProduct = ( {onChange, product, value = 0, initialValues}: useProductArgs ) => {

    const [counter, setCounter] = useState<number>( initialValues?.count || value );
    const isMounted = useRef(false);
    const increaseBy = ( valor : number) => {
      
        let newValue = Math.max( counter + valor, 0)
        if ( initialValues?.maxCount ) {
            newValue = Math.min( newValue, initialValues.maxCount)
        }

        setCounter( newValue );
        onChange && onChange({product, count: newValue });
    }

    const reset = () =>{
        setCounter( initialValues?.count || value )
    }

    useEffect(() => {      
       isMounted.current ? setCounter( value ) : isMounted.current = true;
    }, [value])


  return (
    {
        counter, 
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount : initialValues?.maxCount,

        increaseBy,
        reset,
    }
  )
}
