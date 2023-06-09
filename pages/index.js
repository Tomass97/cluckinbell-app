import useCluckin from "../hooks/useCluckin"
import Layout from "../layout/Layout"
import Producto from '../components/Producto'


export default function Home() {
  const { categoriaActual } = useCluckin()

  return (

    <Layout pagina={`${categoriaActual?.nombre}`}>
      <h1 className="text-4xl font-black">{categoriaActual?.nombre}</h1>
      <p className="text-2xl my-10">Elige tus Productos</p>

      <div className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {categoriaActual?.productos?.map(producto => (
          <Producto key={producto.id} producto={producto} />
        ))}
      </div>

    </Layout>
  )
}
