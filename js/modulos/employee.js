// 3. Devuelve un listado con el nombre, apellidos y email de los empleados cuyo jefe tiene un código de jefe igual a 7.
export const getAllFullNameAndEmails=async()=>{
    let res = await fetch("http://localhost:5103/employee?code_boss=7")
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

export const GetBossFullNameAndEmail = async()=>{}