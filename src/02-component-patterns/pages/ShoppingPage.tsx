import { ProductCard, ProductImage, ProductsButtons, ProductTitle } from '../components/';

const product = {
  id : '1',
  title : 'Coffe Mug - Card',
  img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
        <h1> Shopping Store</h1>
        <hr/>
        <ProductCard product={ product }>
            <ProductCard.Image />
            <ProductCard.Title title = { 'Hola' }/>
            <ProductCard.Buttons  />
        </ProductCard>

        <ProductCard product={ product }>
            <ProductImage />
            <ProductTitle />
            <ProductsButtons /> 
        </ProductCard>
    </div>
  )
}


