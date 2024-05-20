export const getRequestDetails = async()=>{
    let res =await fetch("http://172.16.101.146:5498/request_details")
    let data = await res.json();
    return data
}