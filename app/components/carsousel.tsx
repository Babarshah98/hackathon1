"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';

export default  function Carsousel() {
  return (
    <div className='mt-9'>
        <h1 className='font-lg text-blue-900 flex justify-center mt-8 font-semibold'>
            Products
        </h1>
        <p className='text-2xl mt-4 font-bold  flex justify-center'>
            Check What We Have
        </p>
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)
      }
    >
      <SwiperSlide>
        <Image
        src={'https://media.istockphoto.com/id/926785740/photo/beautiful-woman.jpg?s=612x612&w=0&k=20&c=HDKvkYDWlvO7KwqJZCYWoHVuW6EQ49zXAR-OUZ_OCPA='}
        alt='logo9'
        width={300}
        height={350}
        className=' transition duration-1000 ease-out hover:scale-110'/>
        <h1 className='font-bold text-lg mt-2'>Poncho Women’s Sweater</h1>
        <p className='font-bold text-lg mt-2'>$140</p>

      </SwiperSlide>
      <SwiperSlide >
        <Image
        src={'https://media.istockphoto.com/id/1150723031/photo/coquette-pretty-girl-in-green-sweater.jpg?s=612x612&w=0&k=20&c=8BDOHvQw2kKpBFji_s3PUSpkV4pdBPPRu2xklX_ORF4='}
        alt='logo0'
        width={300}
        height={350}/>
        <h2 className='font-bold text-lg mt-2'>
        Cotton Pullover Sweater
        </h2>
        <p className='font-bold text-lg mt-2'>
            $200
        </p>

      </SwiperSlide>
      <SwiperSlide>
      <Image
        src={'https://media.istockphoto.com/id/882116488/photo/young-woman-sitting-home-by-the-window.jpg?s=612x612&w=0&k=20&c=Qd5YcDvPmVTA48lWOQ87viCLvtvWT9cjlRnv3oPJXJA='}
        alt='logo0'
        width={300}
        height={350}/>
        <h2 className='font-bold text-lg mt-2'>
        Turtleneck Women’s Sweater
        </h2>
        <p className='font-bold text-lg mt-2'>
            $230
        </p>


        </SwiperSlide>
      <SwiperSlide>
      <Image
        src={'https://media.istockphoto.com/id/1287383260/photo/beautiful-woman-presenting-your-product.jpg?s=612x612&w=0&k=20&c=QIGJD9VGsOpbfz_P79g0C6LdsRpUzuCcKZNBMHhvbpc='}
        alt='logo0'
        width={300}
        height={350}/>
        <h2 className='text-lg font-semibold'>
        Women’s Cashmere Sweater
        </h2>
        <p className='font-bold text-lg mt-2'>
            $220
        </p>

        
        </SwiperSlide>
      ...
    </Swiper>
    </div>
  );
};