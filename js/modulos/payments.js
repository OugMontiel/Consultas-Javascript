// 3. Devuelve un listado con todos los pagos que se realizaron en el año `2008` mediante `Paypal`. Ordene el resultado de mayor a menor.
export const getPayIn2008WhitPaypal=async()=>{
    let res =await fetch("http://localhost:5105/payments?payment=PayPal")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        let {date_payment}=val
        let [year]=date_payment.split("-")
        if(year =="2008"){
            dataUpdate.push(val)
        }
    });
    dataUpdate.sort((a, b) => new Date(a.date_payment) - new Date(b.date_payment));
    return dataUpdate
}

// 13. Devuelve un listado con todos los pagos que se realizaron en el año `2008` mediante `Paypal`. Ordene el resultado de mayor a menor.
export const getAllPayIn2008WhitPaypal=async()=>{
    let res =await fetch("http://localhost:5105/payments?payment=PayPal")
    let data = await res.json();
    let dataUpdate = data.filter(dev=>{
        const yearDataUpdata=new Date(dev.date_payment)
        return yearDataUpdata.getFullYear()===2008
    });
    // Ordenar por fecha de pago (de mayor a menor)
    dataUpdate.sort((a, b) => {
        const dateA = new Date(a.date_payment);
        const dateB = new Date(b.date_payment);
        return dateB - dateA; // Orden descendente (mayor a menor)
    });
    return dataUpdate
}

// 14. Devuelve un listado con todas las formas de pago que aparecen en la tabla `pago`. Tenga en cuenta que no deben aparecer formas de pago repetidas.

export const getAllPayForm =async()=>{
    let res =await fetch("http://localhost:5105/payments")
    let data = await res.json();
    let dataUpdate = new Set(data.map(dev=>dev.payment));
    dataUpdate=[...dataUpdate]
    return {
        FormasDePago: dataUpdate
    }
}
