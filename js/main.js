import { 
    getAllOficceAndCodeCity, 
    getAllOfficceCityAndMovil 
} from "./modulos/offices.js";
import { 
    getAllFullNameAndEmails, 
    getBossFullNameAndEmail,
    getRepresentantesVentas 
} from "./modulos/employee.js";
import { 
    getPayIn2008WhitPaypal 
} from "./modulos/payments.js";
import { 
    getAllClientsMadridCodeIs30And11, 
    getAllClientsEspanoles
} from "./modulos/clients.js";
import {
    getListStatusRequests
} from "./modulos/requests.js"

console.log(await getListStatusRequests()) 