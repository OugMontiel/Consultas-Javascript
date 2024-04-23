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

console.log(await getAllClientsEspanoles()) 