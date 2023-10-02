import React from 'react'
import { Button } from '../components/Button'
import { shoe8 } from '../assets/images'

export function SuperQuality() {
  return ( 
    <section className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-w-[1440px] mx-auto' id='about-us'>
        <div className='flex flex-1 flex-col'>
          <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
            Nós fornecemos tenis de
            <span 
            className="text-sky-600 "> super</span>
            <span 
            className="text-sky-600 "> qualidade </span>
            
          </h2>
          <p className="mt-4 lg:max-w-lg font-montserrat text-slate-gray text-lg leading-7">
          Garantindo conforto e estilo premium, nossos calçados meticulosamente elaborados
          foi projetado para elevar sua experiência, proporcionando-lhe uma experiência incomparável
          qualidade, inovação e um toque de elegância.
          </p>
          <p className='mt-6 lg:max-w-lg font-montserrat text-slate-gray text-lg leading-7'>
          Nossa dedicação ao detalhe e excelência garante sua satisfação
          </p>
          <div className='mt-11'>
          <Button label="Ver detalhes" />
          </div>
          
        </div>

        <div className='flex-1 flex justify-center items-center'>
          <img src={shoe8} alt="super quality" width={570} height={522} className='object-contain' />
        </div>
    </section>
  )
}
