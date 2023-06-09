import React from 'react'
import Image from 'next/image'
import useCluckin from '../hooks/useCluckin'

const Categoria = ({categoria}) => {
    const {nombre, icono, id} = categoria

    const {categoriaActual, handleClickCategoria} = useCluckin()

  return (
    <div className={`${categoriaActual?.id === id ? 'bg-fuchsia-500' : '' } flex  w-full bg-fuchsia-950 text-white p-5 hover:bg-fuchsia-500 hover:text-fuchsia-950 transition-all`}>
        <Image
        width={80}
        height={80}
        src={`/assets/img/icono_${icono}.webp`}
        alt="Imagen Icono"
        className='mr-5'
      />
 
      <button
      type='button'
      className='text-2xl font-bold hover:cursor-pointer'
      onClick={() => handleClickCategoria(id)}
      >
        {nombre}
      </button>
    </div>
  )
}

export default Categoria;