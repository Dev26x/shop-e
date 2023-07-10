import { useContext } from "react";
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi'
import CartItem from '../components/CartItem';
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";


const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext( CartContext)
  
  return (
    <div className={`${isOpen? 'right-0' : '-right-full'} w-full 
    bg-white fixed top-0 h-full shadow-2xl md:w-[50vw] xl:max-w-[35vw] 
    transition-all duration-300 z-20 px-4 lg:px-[35px] overflow-y-scroll`}
    >
      <div className="flex justify-between items-center py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping Bag ({itemAmount})
        </div>
        <div onClick={handleClose} className="cursor-pointer w-8 h-8 flex justify-center 
          items-center ">
          <IoMdArrowForward className="text-2xl"/>
        </div>
      </div>
      <div className=" flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto">
        {cart.map(item => {
          return <CartItem item={item} key={item.id} />
        })}
      </div>
      <div className="flex flex-col gap-y-3 py-4 mt-4">
        <div className="flex w-full justify-between items-center">
          {/* total amount */}
          <div className="uppercase font-semibold">
            <span className="mr-2">Total:</span>$ {parseFloat(total).toFixed(2)}
          </div>

          {/* clear cart */}
          <div onClick={clearCart}
          className="cursor-pointer py-4 bg-red-500 text-white w-12
          h-12 flex justify-center items-center text-xl"
          >
            <FiTrash2 />
          </div>
        </div>
        <Link to={'/'}
          className="bg-gray-200 p-4 flex justify-center cursor-pointer
           items-center w-full text-primary font-medium"
        >
          View cart
        </Link>
        <Link to={'/'}
          className="bg-primary text-white p-4 flex justify-center cursor-pointer
           items-center w-full font-medium"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
