import { ProductCard, ProductImage, ProductsButtons, ProductTitle } from '../components/';
import '../styles/custom-styles.css'
import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/products';

export const ShoppingPage = () => {

    const  {shoppingCart, onProductCountChange } = useShoppingCart()

  return (
    <div>
        <h1> Shopping Store</h1>
        <hr/>
        <div style = {{
            display:'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>
            {/* <ProductCard 
                    product={ product1 }
                    className='bg-dark text-white'
                >
                    <ProductCard.Image  className = "custom-image"/>
                    <ProductCard.Title className="text-white text-bold"/>
                    <ProductCard.Buttons className='custom-buttons' />
                </ProductCard> */}
                {
                    products.map( product =>(
                        <ProductCard 
                            key= { product.id }
                            product={ product }
                            className='bg-dark text-white'
                            onChange = { onProductCountChange }
                            value = { shoppingCart[product.id]?.count || 0 }
                        >
                            <ProductImage className = "custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0, 0.2)'}}/>
                            <ProductTitle className="text-white text-bold" />
                            <ProductsButtons className='custom-buttons'  /> 
                        </ProductCard>
                    )) 
                }

                
        </div>
        
        <div className='shopping-cart'>

                        {
                            Object.entries(shoppingCart).map( ([key, product]) => (
                                    
                                    <ProductCard 
                                        key ={ key }
                                        product={ product }
                                        className='bg-dark text-white'
                                        style={{ width:'100px' }}
                                        onChange = { onProductCountChange }
                                        value = { product.count }
                                    >
                                        <ProductImage className = "custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0, 0.2)'}}/>
                                        <ProductsButtons 
                                                className='custom-buttons' 
                                                style= {{
                                                    display: 'flex',
                                                    justifyContent:'center'
                                                }}
                                        /> 
                                    </ProductCard>
                            ))
                        }
        </div>
    </div>
  )
}


