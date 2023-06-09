import Layout from "../layout/Layout";
import useCluckin from "../hooks/useCluckin";
import ResumenProducto from "../components/ResumenProducto";

export default function Resumen() {
  const { pedido } = useCluckin();
  return (
    <Layout pagina="Resumen">
      <h1 className="text-4xl font-black">Resumen</h1>
      <p className="text-2xl my-10">Revisa tu Pedido</p>

      {pedido.length === 0 ? (
        <p>Aún no has seleccionado productos</p>
      ) : (
        pedido.map(producto => (
          <ResumenProducto
            key={producto.id}
            producto={producto}
          />
        ))
      )}
    </Layout>
  );
}