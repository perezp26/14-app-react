import { useState,useEffect, useRef } from "react";
import { onChngeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs{
  product : Product,
  onChange?: ( args: onChngeArgs) => void,
  value?: number
}

export const useProduct = ( {onChange, product, value = 0}: useProductArgs ) => {

    const [counter, setCounter] = useState( value );

    const isControlled = useRef( !!onChange )

    const increaseBy = ( value : number) => {

        if ( isControlled.current && onChange){
          return onChange({ count: value, product})
          //return onChange({ count: value, product}) que no haga la advertencia
        }

        const newValue = Math.max( counter + value, 0)
        setCounter( newValue );

        //onChange && onChange({product, count: newValue });
    }

    useEffect(() => {
      setCounter( value )
    }, [value])
    

  return (
    {
        counter, increaseBy
    }
  )
}
