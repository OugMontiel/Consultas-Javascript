// 7. Devuelve un listado con los distintos estados por los que puede pasar un pedido.
export const getListStatusRequests=async()=>{
    let res = await fetch("http://localhost:5109/requests")
    let data = await res.json();
    let dataupdateset= new Set(data.map(dev=>dev.status))
    let dataUpdate=[...dataupdateset]
    return dataUpdate
}

// 9. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos que no han sido entregados a tiempo.

export const getAllCodeRequesCodeClientsDataRequestsDataWait =async()=>{
    let res = await fetch("http://localhost:5109/requests?status=Entregado")
    let data = await res.json();
    let dataUpdate=data.filter(dev=>{
        let waitDate= new Date(dev.date_Wait);
        let deliveryDate= new Date(dev.date_delivery);
        // Convertir las fechas a timestamps (milisegundos)
        const timestampInicio = waitDate.getTime();
        const timestampFin = deliveryDate.getTime();
        // Calcular la diferencia en milisegundos
        const diferenciaMilisegundos = timestampFin - timestampInicio;
        // Convertir la diferencia de milisegundos a días (86400000 milisegundos por día)
        const diferenciaDias = diferenciaMilisegundos / (1000 * 60 * 60 * 24);
        if (diferenciaDias>=1){
            return{
                Request: dev.code_request,
                CodeClient: dev.code_client,
                ExpectedDate: dev.date_wait,
                DeliveryDate: dev.date_delivery
            }
        }
    })
    return dataUpdate
}


