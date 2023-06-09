import { useCallback } from "react";
import Layout from "../layout/Layout";
import useCluckin from "../hooks/useCluckin";
import { formatearDinero } from "../helpers";


export default function Total() {

  const { pedido, nombre, setNombre, total, handleClickConfirmar } = useCluckin()

  const comprobarPedido = useCallback(() => {
    return pedido.length === 0 || nombre === ''
  }, [pedido, nombre])



  return (
    <Layout pagina="Total">
      <h1 className="text-4xl font-black">Total a pagar</h1>
      <p className="text-2xl my-10">Confirmar Pedido</p>

      <form
        onSubmit={handleClickConfirmar}
      >
        <div>
          <label
            htmlFor="nombre"
            className="block uppercase font-bold ">
            Nombre
          </label>

          <input
            id="nombre"
            type="text"
            className="bg-fuchsia-200 lg:w-1/3 p-1 rounded w-full"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </div>

        <div className="mt-10 ">
          <p>
            Total a pagar {''} <span className="font-bold">{formatearDinero(total)}</span>
          </p>
        </div>

        <div className="mt-6">
          <input
            type="submit"
            value='Confirmar Pedido'
            disabled={comprobarPedido()}
            className={`${comprobarPedido()
              ? "bg-fuchsia-200"
              : "bg-fuchsia-600 hover:bg-fuchsia-800"
              }  w-full cursor-pointer lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center`}
          />
        </div>
      </form>
    </Layout>
  );
}