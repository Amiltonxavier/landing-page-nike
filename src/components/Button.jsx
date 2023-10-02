import React from 'react'

export function Button  ({label, iconURL, backgroundColor, borderColor, textColor, fullWidth}) {
  return (
    <button 
    className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none hover:bg-sky-700 duration-75
    ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : "bg-sky-600 text-white border-sky-600" } rounded-full ${fullWidth && 'w-full'}"} `}>
        {label}
        {
          iconURL && <img 
          src={iconURL} 
          alt="arrow right icon"
          className='ml-2 rounded-full w-5 h-5'
          />
        }
        
    </button>
  )
}
