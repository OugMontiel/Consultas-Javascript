export const getRequestDetails = async()=>{
    let res =await fetch("http://localhost:5108/request_details")
    let data = await res.json();
    return data
}