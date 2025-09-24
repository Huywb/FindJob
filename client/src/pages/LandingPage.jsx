import React, { useRef } from 'react'
import logo from '../../public/logo.png'
import { Accordion, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { companies } from '../utils/companies'
import Autoplay from "embla-carousel-autoplay"
const LandingPage = () => {
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  return (
    <main className=' flex flex-col gap-10 sm:gap-18 py-10 sm:py-20'>
      <section className='text-center '>
        <h1 className='flex flex-col justify-center items-center font-bold gradient-title text-4xl sm:text-7xl '>Find Your Dream Job <span className='flex items-center justify-center gap-2'>and get {" "}<img src={logo} alt="banner" className='h-30 translate-y-1' /></span>  </h1>
        <p className='text-center text-gray-300 text-xl mt-4'>Exlore thousand of job listings or find the perfect candidate</p>
      </section>
      <div className='flex items-center justify-center gap-2'>
        <button className='px-10 py-3 font-bold rounded-md bg-blue-500 text-white'>Find Jobs</button>
        <button className='px-10 py-3 font-bold rounded-md bg-red-500 text-white'>Post a Jobs</button>
      </div>

      <Carousel plugins={[plugin.current]} className="w-full gap-2">
      <CarouselContent className="flex gap-2 items-center">
        {companies.map((company) => {return(
          <CarouselItem key={company.id} className="basis-1/4 lg:basis-1/6">
            <img src={company.logo} alt={company.name} className="h-12" />
          </CarouselItem>
        )})}
      </CarouselContent>
      </Carousel>
      <section>
        <img src={logo} alt=""  className='h-20'/>
      </section>
    </main>
    
  )
}

export default LandingPage
