import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const CluckinContext = createContext()


const CluckinProvider = ({ children }) => {
    const router = useRouter()
    const [categorias, setCategorias] = useState([])
    const [categoriaActual, setCategoriaActual] = useState({})
    const [producto, setProducto] = useState({})
    const [modal, setModal] = useState(false)
    const [pedido, setPedido] = useState([])
    const [nombre, setNombre] = useState('')
    const [total, setTotal] = useState(0)

    const obtenerCategorias = async () => {
        const { data } = await axios('/api/categorias')
        setCategorias(data)
    }

    useEffect(() => {
        obtenerCategorias()
    }, [])

    useEffect(() => {
        setCategoriaActual(categorias[0])
    }, [categorias])

    useEffect(() => {
        const nuevoTotal = pedido.reduce((total, producto) => (
            producto.precio * producto.cantidad) + total, 0)

        setTotal(nuevoTotal)
    }, [pedido])



    const handleClickCategoria = id => {
        const categoria = categorias.filter(cat => cat.id === id)
        setCategoriaActual(categoria[0])
        router.push('/')
    }

    const handleSetProducto = producto => {
        setProducto(producto)
    }

    const handleChangeModal = () => {
        setModal(!modal)
    }

    const handleAgregarPedido = ({ categoriaId, ...producto }) => {
        if (pedido.some(productoState => productoState.id === producto.id)) {
            const pedidoActualizado = pedido.map(productoState => productoState.id ===
                producto.id ? producto : productoState)
            setPedido(pedidoActualizado)

            toast.success('Actualizado correctamente')
        } else {
            setPedido([...pedido, producto])

            toast.success('Agregado correctamente')
        }
        setModal(false)
    }

    const handleEditarCantidades = id => {
        const productoActualizar = pedido.filter(producto => producto.id === id)
        setProducto(productoActualizar[0])
        setModal(!modal)
    }

    const handleEliminarProducto = id => {
        const pedidoActualizado = pedido.filter(producto => producto.id !== id)
        setPedido(pedidoActualizado)
    }

    const handleClickConfirmar = e => {
        e.preventDefault()
        setCategoriaActual(categorias[0])
        setPedido([])
        setNombre('')
        setTotal(0)

        toast.success('Tu pedido se ha realizado correctamente')

        setTimeout(() => {
            router.push('/')
        }, 3000)

    }






    return (
        <CluckinContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
                producto,
                handleSetProducto,
                handleChangeModal,
                modal,
                handleAgregarPedido,
                pedido,
                handleEditarCantidades,
                handleEliminarProducto,
                nombre,
                setNombre,
                total,
                handleClickConfirmar

            }}
        >
            {children}
        </CluckinContext.Provider>
    )
}

export {
    CluckinProvider
}

export default CluckinContext