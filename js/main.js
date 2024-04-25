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
    getAllClientsEspanoles,
    getListClientsPayIn2008
} from "./modulos/clients.js";
import {
    getListStatusRequests,
    getAllCodeRequesCodeClientsDataRequestsDataWait,
    getDelayedDeliveries,
    getAllRequestStatusRechazadosIn2009
} from "./modulos/requests.js"

console.log(await getAllRequestStatusRechazadosIn2009()) 