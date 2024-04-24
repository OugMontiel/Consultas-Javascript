// 7. Devuelve un listado con los distintos estados por los que puede pasar un pedido.
export const getListStatusRequests=async()=>{
    let res = await fetch("http://localhost:5109/requests")
    let data = await res.json();
    let dataupdateset= new Set(data.map(dev=>dev.status))
    let dataUpdate=[...dataupdateset]
    return dataUpdate
}

// 9. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos que no han sido entregados a tiempo.

export const getAllCodeRequesCodeClientsDataRequestsDataWait = async () => {
    try {
        const res = await fetch("http://localhost:5109/requests");
        const data = await res.json();

        const delayedOrders = data.filter(order => {
            // Convierte las fechas a objetos Date para comparación
            const expectedDate = new Date(order.date_wait);
            const deliveryDate = new Date(order.date_delivery);

            // Compara las fechas para determinar si el pedido está retrasado
            return expectedDate > deliveryDate; // Si la fecha esperada es posterior a la fecha de entrega, el pedido está retrasado
        });

        // Mapea los resultados en el formato deseado
        const formattedDelayedOrders = delayedOrders.map(order => ({
            code_request: order.code_request,
            code_client: order.code_client,
            date_wait: order.date_wait,
            date_delivery: order.date_delivery
        }));

        return formattedDelayedOrders;
    } catch (error) {
        console.error("Error al obtener pedidos retrasados:", error);
        return [];
    }
};
    

