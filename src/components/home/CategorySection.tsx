import { categories } from '@/data/categoryData';
import Image from 'next/image';
import { motion } from 'motion/react';
import { pressable } from '@/motions';

const CategorySection = () => {
  return (
    <section
      id='home-category'
      className='flex flex-wrap justify-center gap-5 lg:gap-[46.8px]px-4 lg:px-30 cursor-pointer'
    >
      {categories.map((category) => (
        <motion.div
          key={category.id}
          className='flex flex-col gap-1 lg:gap-1.5 max-w-40.25 w-full items-center'
          {...pressable}
        >
          <div className='flex justify-center items-center rounded-2xl shadow-[0_0_20px_#CBCACA40] h-25 w-full'>
            <Image src={category.icon} alt={`${category.title} image`} />
          </div>
          <p className='font-bold text-sm lg:text-lg'>{category.title}</p>
        </motion.div>
      ))}
    </section>
  );
};

export default CategorySection;
