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
        return waitDate >= deliveryDate
    }).map(dev=>{
        if(dev.waitDate.getFullYear()>=dev.deliveryDate.getFullYear()){
            if (dev.waitDate.getMonth() + 1>=dev.deliveryDate.getMonth() + 1){
                if (dev.waitDate.getDate()>=dev.deliveryDate.getDate()){
                    return{
                        code: dev.code_request,
                        CodeClient: dev.code_client,
                        ExpectedDate: dev.date_wait,
                        DeliveryDate: dev.date_delivery
                    }
                }
            }
        }
    
    })
    return dataUpdate
}


