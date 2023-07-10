import ManImg from '../img/woman_hero.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='h-[800px] bg-hero
     bg-no-repeat bg-center bg-cover py-24'
    >
      <div className='container mx-auto flex justify-around h-full items-center'>
        <div className='flex flex-col justify-center'>
          <div className='font-semibold flex items-center uppercase'>
            <div className='w-10 h-[2px] bg-red-400 mr-3'></div>New Trend
          </div>
          <h1 className='text-[70px] leading-[1.1] font-light mb-4'>
            AUTUMN SALE FOR STYLISH <br />
            <span className='font-semibold'>WOMEN</span>
          </h1>
          <Link to={'/'} className='self-start uppercase font-semibold
           border-b-2 border-primary cursor-pointer'>
            Discover More
          </Link>
        </div>

        <div className='hidden lg:block'>
          <img src={ManImg} alt='man hero pic'/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
