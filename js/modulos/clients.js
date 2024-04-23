// 16. Devuelve un listado con todos los clientes que sean de la ciudad de `Madrid` y cuyo representante de ventas tenga el código de empleado `11` o `30`.

export const getAllClientsMadridCodeIs30And11=async()=>{
    let res =await fetch("http://localhost:5101/clients?city=Madrid")
    let data = await res.json();
    let dataUpdate=[];
    data.forEach(val => {
        if(val.code_employee_sales_manager==11||val.code_employee_sales_manager==30){
            dataUpdate.push(val)
        }
    });
    return dataUpdate
}

// 6. Devuelve un listado con el nombre de los todos los clientes españoles.

export const getAllClientsEspanoles=async()=>{
    let res =await fetch("http://localhost:5101/clients?country=Spain")
    let data = await res.json();
    return data
}
