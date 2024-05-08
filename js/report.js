import "./components/clock.js";

let btn = document.querySelectorAll("button")
let report__menu = document.querySelectorAll(".report__menu button")
let report__details = document.querySelector(".report__details")

btn.forEach(val=>{
    val.addEventListener("click",(e)=>{
        for(let del of report__menu) del.classList.remove("report__active");
        e.target.classList.add("report__active")

        if(e.target.innerHTML=="Clients"){

        }

        if(e.target.innerHTML=="employees"){
            
        }

        if(e.target.innerHTML=="gama"){
            
        }

        if(e.target.innerHTML=="offices"){
            
        }

        if(e.target.innerHTML=="payments"){
            
        }

        if(e.target.innerHTML=="product"){
            
        }

        if(e.target.innerHTML=="request details"){
            
        }
        if(e.target.innerHTML=="requests"){
            
        }
    })
})

let [clients]=report__menu
clients.click();

console.log();


// import { getClientsEmploy } from "./module/clients.js";
// const queryAboutTable7 = document.querySelector("#queryAboutTable7");
// queryAboutTable7.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable7.children
//     if(!report__container.innerHTML){
//         let data = await getClientsEmploy();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div>${val.client_name}</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Nombre del empleado: </b>${val.name_employee}</p>
//                         <p><b>Ciudad: </b>${val.city}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })
