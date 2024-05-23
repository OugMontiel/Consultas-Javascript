import { 
    getOffices,
    getAllOficceAndCodeCity, 
    getAllOfficceCityAndMovil 
} from "./modulos/offices.js";
import { 
    getEmployee,
    getAllFullNameAndEmails, 
    getBossFullNameAndEmail,
    getRepresentantesVentas 
} from "./modulos/employee.js";
import { 
    getPayments,
    getPayIn2008WhitPaypal,
    getAllPayIn2008WhitPaypal,
    getAllPayForm
} from "./modulos/payments.js";
import { 
    getClients,
    getAllClientsMadridCodeIs30And11, 
    getAllClientsEspanoles,
    getListClientsPayIn2008,
    getAllClientsAndNameForYoursEmployee,
    getAllclientPayAndYourEmpleoyee,
    getAllclientNotPayAndYourEmpleoyee,
    get
} from "./modulos/clients.js";
import {
    getRequest,
    getListStatusRequests,
    getAllCodeRequesCodeClientsDataRequestsDataWait,
    getDelayedDeliveries,
    getAllRequestStatusRechazadosIn2009,
    getAllRequestStatusEntregadosOnMayoIn2009
} from "./modulos/requests.js"
import{
    getProducts,
    getAllOrnamentalesMas100Stock
} from"./modulos/products.js"

console.log(await get()) 