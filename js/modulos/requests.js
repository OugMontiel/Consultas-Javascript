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
    let dataUpdate=data.map(dev=>{
        if (year(dev.date_wait)>=year(dev.date_delivery)){
            if (month(dev.date_wait)>=month(dev.date_delivery)){
                if (day(dev.date_wait)>=day(dev.date_delivery)){
                    return{
                        Request:dev.code_request
                    }
                }
            }
        }
    })
    return dataUpdate
}

// export const getAllCodeRequestCodeClientsDataRequestsDataWait = async () => {
//     try {
//         // Realizar solicitud HTTP GET para obtener los datos de los pedidos entregados
//         const res = await fetch("http://localhost:5109/requests?status=Entregado");
        
//         // Verificar si la solicitud fue exitosa
//         if (!res.ok) {
//             throw new Error(`Error al obtener datos de pedidos: ${res.statusText}`);
//         }

//         // Parsear la respuesta JSON
//         const data = await res.json();

//         // Filtrar pedidos que no fueron entregados a tiempo
//         const dataUpdate = data.filter(dev => {
//             // Extraer componentes de fecha de espera y fecha de entrega
//             const { year: yearWait, month: monthWait, day: dayWait } = getDateComponents(dev.date_wait);
//             const { year: yearDelivery, month: monthDelivery, day: dayDelivery } = getDateComponents(dev.date_delivery);

//             // Comparar fechas para determinar si el pedido fue entregado a tiempo
//             if (yearWait > yearDelivery) {
//                 return false;
//             } else if (yearWait === yearDelivery) {
//                 if (monthWait > monthDelivery) {
//                     return false;
//                 } else if (monthWait === monthDelivery) {
//                     if (dayWait > dayDelivery) {
//                         return false;
//                     }
//                 }
//             }

//             // El pedido no se entregó a tiempo
//             return true;
//         });

//         return dataUpdate;
//     } catch (error) {
//         console.error("Error al obtener datos de pedidos no entregados a tiempo:", error);
//         throw error;
//     }
// };

// // Función para extraer componentes de año, mes y día de una fecha
// function getDateComponents(dateString) {
//     const date = new Date(dateString);
//     return {
//         year: date.getFullYear(),
//         month: date.getMonth() + 1, // getMonth() devuelve el mes base cero (0-11)
//         day: date.getDate()
//     };
// }
