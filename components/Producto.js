import Image from 'next/image'
import React from 'react'
import { formatearDinero } from '../helpers'
import useCluckin from '../hooks/useCluckin'

const Producto = ({producto}) => {

  const { handleSetProducto, handleChangeModal } = useCluckin()

    const {nombre, imagen, precio} = producto
  return (
    <div className='border p-3'>
        <Image
        src={`/assets/img/${imagen}.webp`}
        alt={`imagen ${nombre}`}
        width={400}
        height={400}
        />
    <div className='p-5'>
        <h3 className='text-2xl font-bold'>{nombre}</h3>
        <p className='mt-5 font-black text-3xl text-fuchsia-950'>{formatearDinero(precio)}</p>
        <button
        type='button'
        className='bg-fuchsia-500 text-white w-full mt-5 p-3 uppercase font-bold'
        onClick={() => {
          handleChangeModal()
          handleSetProducto(producto)
        }}
        >
          Agregar al pedido
        </button>
    </div>
    </div>

  )
}

export default Producto