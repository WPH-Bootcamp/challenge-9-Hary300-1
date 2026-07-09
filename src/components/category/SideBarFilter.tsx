import ClearFilter from './ClearFilter';
import Distance from './Distance';
import Price from './Price';
import Rating from './Rating';

const SideBarFilter = () => {
  return (
    <div className='hidden md:flex flex-col rounded-xl py-4 bg-white shadow-[0_0_20px_0_#CBCACA40] gap-2.5 lg:max-w-66.5'>
      <div className='flex justify-between items-center'>
        <p className='font-extrabold text-md px-4'>FILTER</p>
        <ClearFilter />
      </div>
      <div className='flex flex-col gap-6 divide-y'>
        <div className='px-4'>
          <Distance />
        </div>

        <div className='px-4'>
          <Price />
        </div>

        <div className='px-4'>
          <Rating />
        </div>
      </div>
    </div>
  );
};

export default SideBarFilter;
