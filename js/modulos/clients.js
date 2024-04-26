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

// 8. Devuelve un listado con el código de cliente de aquellos clientes que realizaron algún pago en 2008. Tenga en cuenta que deberá eliminar aquellos códigos de cliente que aparezcan repetidos. Resuelva la consulta:
export const getListClientsPayIn2008=async()=>{
    let res =await fetch("http://localhost:5101/clients")
    let data = await res.json();
    let dataUpdateSet=new Set(data.map(dev=>dev.client_code))
    let dataUpdate=[...dataUpdateSet]
    return dataUpdate
}

//2.1 Obtén un listado con el nombre de cada cliente y el nombre y apellido de su representante de ventas.

export const getAllClientsAndNameForYoursEmployee=async()=>{
    let client =await fetch("http://localhost:5101/clients")
    let employee = await fetch("http://localhost:5103/employee")
    let dataClients = await client.json();
    let dataClientsUpdate = dataClients.map(dev=>{
        return{
            IDsale:dev.code_employee_sales_manager,
            nameCliente:dev.client_name,
            employee:null
        }
    })
    let dataEmployee = await employee.json();
    let dataEmployeeUpdate = dataEmployee.map(dev=>{
        return{
            IDsale:dev.employee_code,
            nameEmployee:dev.name,
            lastName: `${dev.lastname1} ${dev.lastname2}`,
        }
    });
    dataClientsUpdate.forEach(dev=>{
        const employee=dataEmployeeUpdate.find(val=>val.IDsale===dev.IDsale);
        if(employee){dev.employee=employee}
    })
    return dataClientsUpdate
} 
