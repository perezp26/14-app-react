import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as PruductTitleProps } from "../components/ProductTitle";
import { Props as PruductImageProps } from "../components/ProductImage";
import { products } from '../data/products';


export interface Product {
    id: string,
    title: string,
    img ?: string
}

export interface ProductContextProps {
    counter : number,
    increaseBy : (value: number) => void,
    maxCount?: number,
    product : Product
}

export interface ProductCardHOCProps {
    ({ product, children }: ProductCardProps) : JSX.Element,
    Title:      (Props : PruductTitleProps) => JSX.Element,
    Image:      (Props: ProductImageProps)  => JSX.Element,
    Buttons :   ( Props: PruductImageProps) => JSX.Element
}

export interface onChngeArgs{
    product : Product,
    count: number
}

export interface ProductInCart extends Product{
    count: number
}

export interface InitialValues {
    count?: number,
    maxCount?: number,
}

export interface ProductCardHandlers {
    count: number,
    isMaxCountReached: boolean,
    maxCount?: number,    
    product: Product,

    increaseBy: (value: number) => void,
    reset: () => void
}