// 3. Devuelve un listado con todos los pagos que se realizaron en el año `2008` mediante `Paypal`. Ordene el resultado de mayor a menor.
export const getPayIn2008WhitPaypal=async()=>{
    let res =await fetch("http://localhost:5106/payments?payment=PayPal")
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