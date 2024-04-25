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

// 10. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos cuya fecha de entrega ha sido al menos dos días antes de la fecha esperada.

// Función para obtener la lista de pedidos que cumplen con la condición
export const getDelayedDeliveries = async () => {
    // Hacer la solicitud HTTP para obtener los datos de los pedidos
    let res = await fetch("http://localhost:5109/requests");
    let data = await res.json();

    // Filtrar los pedidos que cumplen con la condición
    let delayedOrders = data.filter(order => {
        // Convertir las fechas de entrega y esperada en objetos Date
        const deliveryDate = new Date(order.date_delivery);
        const expectedDate = new Date(order.date_wait);

        // Calcular la diferencia en milisegundos entre las fechas
        const timeDifference = expectedDate.getTime() - deliveryDate.getTime();

        // Convertir la diferencia a días
        const daysDifference = timeDifference / (1000 * 3600 * 24);

        // Retornar true si la fecha de entrega fue al menos dos días antes de la fecha esperada
        return daysDifference >= 2;
    });

    // Mapear los datos de los pedidos filtrados en el formato deseado
    let formattedOrders = delayedOrders.map(order => {
        return {
            code_request: order.code_request,
            code_client: order.code_client,
            date_expected: order.date_wait,
            date_delivery: order.date_delivery
        };
    });

    // Retornar la lista de pedidos filtrados y formateados
    return formattedOrders;
};

// 11. Devuelve un listado de todos los pedidos que fueron **rechazados** en `2009`.

export const getAllRequestStatusRechazadosIn2009 = async () => {
    // Hacer la solicitud HTTP para obtener los datos de los pedidos
    let res = await fetch("http://localhost:5109/requests?status=Rechazado");
    let data = await res.json();
    let dataUpdate = data.filter(dev=>{
        const yearDataUpdata = new Date(dev.date_request)
        return yearDataUpdata.getFullYear()===2009
    })
    return dataUpdate
};

    

