// 1. Devuelve un listado con el código de oficina y la ciudad donde hay oficinas.
export const getAllOficceAndCodeCity = async()=>{
    let res = await fetch("http://localhost:5104/offices")
    let data=await res.json();
    let dataUpdate=data.map (val=>{
        return{
            code_office: val.code_office,
            city: val.city
        }
    })
    return dataUpdate; 
}