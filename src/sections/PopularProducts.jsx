import React from 'react'
import {products} from '../constants/'
import { PopularProductsCard } from '../components/PopularProductsCard'
export function PopularProducts () {   
  return (
    <section className='mx-auto max-w-[1440px] max-sm:mt-12' id='products'>
        <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>
        Nossos <span className='text-sky-600'>produtos populares</span>
        </h2>
        <p className='lg:max-w-lg mt-2 text-slate-gray'>
        Experimente qualidade e estilo de alto nível com nossas seleções mais procuradas. Descubra um mundo de conforto, design e valor
        </p>
        <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14'>
                {
                  products.map(product => (
                    <PopularProductsCard key={product.name} {...product} />
                  ))
                }
        </div>
        </div>
    </section>
  )
}
