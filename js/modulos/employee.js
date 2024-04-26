export const getEmployee=async()=>{
    let res =await fetch("http://localhost:5102/employee")
    let data = await res.json();
    return data
}
// 3. Devuelve un listado con el nombre, apellidos y email de los empleados cuyo jefe tiene un código de jefe igual a 7.
export const getAllFullNameAndEmails=async()=>{
    let res = await fetch("http://localhost:5102/employee?code_boss=7")
    let data = await res.json();
    let dataUpdate = data.map(val=>{
        return{
            name:val.name,
            lastName: `${val.lastname1} ${val.lastname2}`,
            email:val.email
        }
    })
    return dataUpdate
}

// 4. Devuelve el nombre del puesto, nombre, apellidos y email del jefe de la empresa.

export const getBossFullNameAndEmail = async()=>{
    let res = await fetch("http://localhost:5102/employee?")
    let data = await res.json();
    // Encuentra al jefe (quien tiene code_boss === null)
    let dataUp = data.filter(emp => emp.code_boss === null);
    let dataUpdate=dataUp.map(val=>{
        return{
            puesto:val.position,
            name:val.name,
            lastName: `${val.lastname1} ${val.lastname2}`,
            email:val.email
        }
    })
    return dataUpdate;
}

// 5. Devuelve un listado con el nombre, apellidos y puesto de aquellos empleados que no sean representantes de ventas.

export const getRepresentantesVentas = async()=>{
    let res = await fetch("http://localhost:5102/employee?position_ne=Representante Ventas")
    let data = await res.json();
    let dataUpdate =data.map(val=>{
        return{
            Name:val.name,
            lastName: `${val.lastname1} ${val.lastname2}`,
            puesto:val.position,
        }
    })
    return dataUpdate
}