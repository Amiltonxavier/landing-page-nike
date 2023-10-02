import React from 'react'
import { offer } from '../assets/images'
import { arrowRight } from "../assets/icons"
import { Button } from '../components/Button'


export function SpecialOffer() {
  return (
    <section className='flex justify-center items-center max-xl:flex-col-reverse gap-10 max-w-[1440px] mx-auto'>
      <div className='flex-1'>
        <img src={offer} alt="imagem de produtos a oferta" width={773} height={687} className='object-contain w-full' />
      </div>
      <div className='flex flex-1 flex-col'>
          <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
            Oferta
            <span 
            className="text-sky-600 "> especial </span>
          
          </h2>
          <p className="mt-4 lg:max-w-lg font-montserrat text-slate-gray text-lg leading-7">
          Embarque em uma jornada de compras que redefine sua experiência com
          ofertas imbatíveis. Desde seleções de primeira linha até economias incríveis, nós
          oferecer um valor incomparável que nos diferencia.
          </p>
          <p className='mt-6 lg:max-w-lg font-montserrat text-slate-gray text-lg leading-7'>
          Navegue por um reino de possibilidades projetadas para atender às suas necessidades únicas
          desejos, superando as mais elevadas expectativas. Sua jornada conosco é
          nada menos que excepcional.
          </p>
          <div className='mt-11 flex flex-wrap gap-4'>
            <Button label="Comprar" iconURL={arrowRight} />
            <Button backgroundColor='bg-white' borderColor='border-slate-gray' textColor='text-slate-gray' label="Saber mias" />
          </div>
          
        </div>

    </section>
  )
}
