import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';

const ProductDetails = () => {
  //get product id from url
  const { id } = useParams();
  
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  //get a single product based on the id
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  //if product is not found
  if(!product){
    return (
      <section className='h-screen flex justify-center items-center'>
        Loading...
      </section>
    );
  }

  //destructure product
  const { title, price, description, image} = product;


  return (
    <section className='pt-32 pb-12 lg:mb-0 lg:py-32 sm:mb-[100px] flex items-center lg:h-[90vh] border'>
      <div className='container mx-auto flex items-center justify-center'>
        <div className='flex flex-col lg:flex-row items-center'>
          <div className='flex flex-1 justify-center items-center mb-8
          lg:mb-0'>
            <img className='max-w-[180px] lg:max-h-[500px] lg:max-w-sm' src={image} alt=''/>
          </div>
          <div className='flex-1 text-center lg:text-left mb-12'>
            <h1 className='text-[26px] font-medium mb-2 max-w-[750px] mx-auto
            lg:mx-0'>
              {title}
            </h1>
            <div className='text-xl text-red-500 font-medium mb-6'>
              $ {price}
            </div>
            <p className='mb-8'> 
              {description}
            </p>
            <button className='bg-primary py-4 px-8 text-white'
              onClick={() => addToCart(product, product.id)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
