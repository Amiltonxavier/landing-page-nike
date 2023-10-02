import React from 'react'
import { services } from '../constants'
import { ServiceCard } from '../components/ServiceCard'
export function Services () {
  return (
    <section className='mx-auto max-w-[1440px] flex justify-center flex-wrap gap-9'>

        {
          services.map(service => (
            <ServiceCard key={service.label}
            {...service}
            />
          ))
        }

    </section>
  )
}
