export const getGama=async()=>{
    let res =await fetch("http://localhost:5102/gama")
    let data = await res.json();
    return data
}