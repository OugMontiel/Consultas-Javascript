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
    getPayIn2008WhitPaypal,
    getAllPayIn2008WhitPaypal,
    getAllPayForm
} from "./modulos/payments.js";
import { 
    getAllClientsMadridCodeIs30And11, 
    getAllClientsEspanoles,
    getListClientsPayIn2008,
    getAllClientsAndNameForYoursEmployee,
    get
} from "./modulos/clients.js";
import {
    getListStatusRequests,
    getAllCodeRequesCodeClientsDataRequestsDataWait,
    getDelayedDeliveries,
    getAllRequestStatusRechazadosIn2009,
    getAllRequestStatusEntregadosOnMayoIn2009
} from "./modulos/requests.js"
import{
    getAllOrnamentalesMas100Stock
} from"./modulos/products.js"

console.log(await get()) 