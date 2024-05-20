export const getGama=async()=>{
    let res =await fetch("http://172.16.101.146:5493/gama")
    let data = await res.json();
    return data
}