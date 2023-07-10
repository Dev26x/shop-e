import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';
import { CartContext } from '../contexts/CartContext';

const CartItem = ({ item }) => {
const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);

  //destructuring item object
  const { id, title, image, amount, price } = item;

  return (
    <div className='flex gap-x-4 py-2 lg:px-6 border-b w-full font-light text-gray-500'>
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>
        <Link to={`/product/${id}`}>
          <img className='max-w-[80px]' src={image} alt='cart product'/>
        </Link>
        <div className='w-full flex flex-col'>
          {/* cart item title & remove icon*/}
          <div className='flex justify-between mb-2'>
            <Link to={`/product/${id}`} className='text-sm uppercase 
              font-medium max-w-[240px] text-primary
              hover:underline'
             >
              {title}
            </Link>

            {/* remove item from cart icon */}
            <div className='text-xl cursor-pointer' 
              onClick={() => removeFromCart(id)}
            >
              <IoMdClose className='text-gray-500 hover:text-red-500 transition'/>
            </div>
          </div>
          <div className='flex gap-x-2 h-[36px]'> 
            {/* quantity */}
            <div className='flex flex-1 max-w-[100px] justify-between items-center
             px-2 h-full border text-primary font-medium'>
              <div onClick={() => decreaseAmount(id)} className='cursor-pointer'>
                <IoMdRemove />
              </div>
              <div>
                {amount}
              </div>
              <div onClick={() => increaseAmount(id)} className='cursor-pointer'>
                <IoMdAdd />
              </div>
            </div>

            {/* item price */}
            <div className='flex flex-1 items-center justify-around
             invisible md:visible lg:visible'>
              £ {price}
            </div>

            {/* final price in 2 decimal places */}
            <div className='flex flex-1 items-center justify-end text-primary'>
              {`£ ${parseFloat(price * amount).toFixed(2)}`}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
