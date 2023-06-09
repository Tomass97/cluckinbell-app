import Image from "next/image"
import useCluckin from "../hooks/useCluckin"
import Categoria from "./Categoria";

export default function Sidebar() {
  const {categorias} = useCluckin();
  return (
    <>
    <div className="p-4 bg-fuchsia-800 flex flex-col justify-center items-center">
      <Image
        width={100}
        height={100}
        src='/assets/img/logo.png'
        alt="imagen logotipo" />
        <h1 className="text-2xl font-bold text-white">Cluckin Bell</h1>
        
    </div>
      <nav>
          {categorias.map(categoria => (
            <Categoria 
            key={categoria.id}
            categoria={categoria}
            />
          ))}
      </nav>
    </>
  )
}
