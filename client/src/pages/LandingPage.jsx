import React, { useRef } from 'react'
import logo from '../../public/logo.png'
import banner from '../../public/banner.jpeg'
import { Accordion, AccordionItem, AccordionTrigger,AccordionContent } from '@/components/ui/accordion'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { CardContent, CardHeader,Card,CardTitle, } from '@/components/ui/card'
import { companies } from '../utils/companies'
import Autoplay from "embla-carousel-autoplay"
import { cardQuestions, questions } from '../utils/questions'
import { Link } from 'react-router-dom'
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
        <Link to='/job'><button className='cursor-pointer px-10 py-3 font-bold rounded-md bg-blue-500 text-white'>Find Jobs</button></Link>
        <Link to='/post-job'><button className='cursor-pointer px-10 py-3 font-bold rounded-md bg-red-500 text-white'>Post a Jobs</button></Link>
      </div>

      <Carousel plugins={[plugin.current]} className="w-full gap-2 py-6">
      <CarouselContent className="flex gap-2 items-center">
        {companies.map((company) => {return(
          <CarouselItem key={company.id} className="basis-1/4 lg:basis-1/6">
            <img src={company.logo} alt={company.name} className="h-12" />
          </CarouselItem>
        )})}
      </CarouselContent>
      </Carousel>

      <img src={banner} alt="" className='w-full' />

      <section className='flex gap-4 flex-wrap itemcenter justify-center'>
        {
          cardQuestions.map((q) => {return(
            <Card key={q.id} className="w-[45%]">
              <CardHeader>
                <CardTitle className='text-2xl font-bold'>{q.question}</CardTitle>    
              </CardHeader>
              <CardContent>
                <p className='text-gray-300 text-lg'>{q.answer}</p>
              </CardContent>
            </Card>
          )}
          )}
      </section>

      <section>
      <Accordion type="single" collapsible className="w-full mx-auto">
        {questions.map((q) => {return(
          <AccordionItem key={q.id} value={`item-${q.id}`}>
            <AccordionTrigger className="font-bold text-xl">{q.question}</AccordionTrigger>
            <AccordionContent className=" text-lg text-gray-300">{q.answer}</AccordionContent>
          </AccordionItem>
        )})}
      </Accordion>
      </section>
    </main>
  )
}

export default LandingPage
