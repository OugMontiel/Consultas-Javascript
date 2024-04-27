export const getGama=async()=>{
    let res =await fetch("http://localhost:5103/gama")
    let data = await res.json();
    return data
}