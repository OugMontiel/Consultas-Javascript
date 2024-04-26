export const getClients=async()=>{
    let res =await fetch("http://localhost:5101/clients")
    let data = await res.json();
    return data
}

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

// 2. 2. Muestra el nombre de los clientes que hayan realizado pagos junto con el nombre de sus representantes de ventas.

export const get=async()=>{
    let client =await fetch("http://localhost:5101/clients")
    let payments = await fetch("http://localhost:5106/payments")
    let employee = await fetch("http://localhost:5103/employee")
    let dataPayments = await payments.json();
    let codeClientePay = [...new Set(dataPayments.map(dev=>{
        return{
            idClente:dev.code_client,
            fullNameCliente:null,
            fullNameEmployee:null,
            pay:dev.total
        }
    }))]
    let dataClients = await client.json();
    let clientsList = dataClients.map(dev=>{
        return{
            idClente: dev.client_code,
            IDsale:dev.code_employee_sales_manager,
            fullNameCliente:dev.client_name,
            fullNameEmployee:null
        }
    })
    let dataEmployee = await employee.json();
    let employeeList = dataEmployee.map(dev=>{
        return{
            IDsale:dev.employee_code,
            fullNameEmployee: `${dev.name} ${dev.lastname1} ${dev.lastname2}`,
        }
    });
    let clientAndEmployee = clientsList.map(client => {
        const employee = employeeList.find(emp => emp.IDsale === client.IDsale);
        if (employee) {
          return {
            idClente: client.idClente,
            IDsale: client.IDsale,
            fullNameCliente: client.fullNameCliente,
            fullNameEmployee: employee.fullNameEmployee, // Asignar el valor de fullNameEmployee
          };
        } else {
          return client; // Devolver el cliente sin cambios si no se encuentra un empleado relacionado
        }
      });
    let payClientAndEmployee = codeClientePay.map(pay=>{
        const client = clientAndEmployee.find(dev=>dev.idClente === pay.idClente);
        if(client){
            return{
                idClente:pay.idClente,
                fullNameCliente:client.fullNameCliente,
                fullNameEmployee:client.fullNameEmployee,
                pay:pay.pay
            }
        }
    })
      
    return payClientAndEmployee
} 