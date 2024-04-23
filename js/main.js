import { getAllOficceAndCodeCity, getAllOfficceCityAndMovil } from "./modulos/offices.js";
import { getAllFullNameAndEmails, getBossFullNameAndEmail,getRepresentantesVentas } from "./modulos/employee.js";
import { getPayIn2008WhitPaypal } from "./modulos/payments.js";
import { getAll } from "./modulos/clients.js";

console.log(await getRepresentantesVentas()) 