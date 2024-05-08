# Ejercicios de JavaScript [josejuansanchez.org](https://josejuansanchez.org/bd/ejercicios-consultas-sql/index.html#jardiner%C3%ADa)


para ejecutar 

npm install json-server

## Consultas sobre una tabla

1. 1. Devuelve un listado con el código de oficina y la ciudad donde hay oficinas.
1. 2. Devuelve un listado con la ciudad y el teléfono de las oficinas de España.
1. 3. Devuelve un listado con el nombre, apellidos y email de los empleados cuyo jefe tiene un código de jefe igual a 7.
1. 4. Devuelve el nombre del puesto, nombre, apellidos y email del jefe de la empresa.
1. 5. Devuelve un listado con el nombre, apellidos y puesto de aquellos empleados que no sean representantes de ventas.
1. 6. Devuelve un listado con el nombre de los todos los clientes españoles.
1. 7. Devuelve un listado con los distintos estados por los que puede pasar un pedido.
1. 8. Devuelve un listado con el código de cliente de aquellos clientes que realizaron algún pago en 2008. Tenga en cuenta que deberá eliminar aquellos códigos de cliente que aparezcan repetidos. Resuelva la consulta:

- Utilizando la función [`YEAR` de MySQL](https://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_year).
- Utilizando la función [`DATE_FORMAT` de MySQL](https://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_date-format).
- Sin utilizar ninguna de las funciones anteriores.

1. 9. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos que no han sido entregados a tiempo.
1. 10. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos cuya fecha de entrega ha sido al menos dos días antes de la fecha esperada.

- Utilizando la función [`ADDDATE` de MySQL](https://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_adddate).
- Utilizando la función [`DATEDIFF` de MySQL](https://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_datediff).
- ¿Sería posible resolver esta consulta utilizando el operador de suma `+` o resta `-`?

1. 11. Devuelve un listado de todos los pedidos que fueron **rechazados** en `2009`.
1. 12. Devuelve un listado de todos los pedidos que han sido **entregados** en el mes de enero de cualquier año.
1. 13. Devuelve un listado con todos los pagos que se realizaron en el año `2008` mediante `Paypal`. Ordene el resultado de mayor a menor.
1. 14. Devuelve un listado con todas las formas de pago que aparecen en la tabla `pago`. Tenga en cuenta que no deben aparecer formas de pago repetidas.
1. 15. Devuelve un listado con todos los productos que pertenecen a la gama `Ornamentales` y que tienen más de `100` unidades en stock. El listado deberá estar ordenado por su precio de venta, mostrando en primer lugar los de mayor precio.
1. 16. Devuelve un listado con todos los clientes que sean de la ciudad de `Madrid` y cuyo representante de ventas tenga el código de empleado `11` o `30`.

## Consultas multitabla (Composición interna)

Resuelva todas las consultas utilizando la sintaxis de `SQL1` y `SQL2`. Las consultas con sintaxis de `SQL2` se deben resolver con `INNER JOIN` y `NATURAL JOIN`.

2. 1. Obtén un listado con el nombre de cada cliente y el nombre y apellido de su representante de ventas.
2. 2. Muestra el nombre de los clientes que hayan realizado pagos junto con el nombre de sus representantes de ventas.
2. 3. Muestra el nombre de los clientes que **no** hayan realizado pagos junto con el nombre de sus representantes de ventas.
2. 4. Devuelve el nombre de los clientes que han hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.
2. 5. Devuelve el nombre de los clientes que **no** hayan hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.
2. 6. Lista la dirección de las oficinas que tengan clientes en `Fuenlabrada`.
2. 7. Devuelve el nombre de los clientes y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.
2. 8. Devuelve un listado con el nombre de los empleados junto con el nombre de sus jefes.
2. 9. Devuelve un listado que muestre el nombre de cada empleados, el nombre de su jefe y el nombre del jefe de sus jefe.
2. 10. Devuelve el nombre de los clientes a los que no se les ha entregado a tiempo un pedido.
2. 11. Devuelve un listado de las diferentes gamas de producto que ha comprado cada cliente.

## 1.4.6 Consultas multitabla (Composición externa)

Resuelva todas las consultas utilizando las cláusulas `LEFT JOIN`, `RIGHT JOIN`, `NATURAL LEFT JOIN` y `NATURAL RIGHT JOIN`.

3. 1. Devuelve un listado que muestre solamente los clientes que no han realizado ningún pago.
3. 2. Devuelve un listado que muestre solamente los clientes que no han realizado ningún pedido.
3. 3. Devuelve un listado que muestre los clientes que no han realizado ningún pago y los que no han realizado ningún pedido.
3. 4. Devuelve un listado que muestre solamente los empleados que no tienen una oficina asociada.
3. 5. Devuelve un listado que muestre solamente los empleados que no tienen un cliente asociado.
3. 6. Devuelve un listado que muestre solamente los empleados que no tienen un cliente asociado junto con los datos de la oficina donde trabajan.
3. 7. Devuelve un listado que muestre los empleados que no tienen una oficina asociada y los que no tienen un cliente asociado.
3. 8. Devuelve un listado de los productos que nunca han aparecido en un pedido.
3. 9. Devuelve un listado de los productos que nunca han aparecido en un pedido. El resultado debe mostrar el nombre, la descripción y la imagen del producto.
3. 10. Devuelve las oficinas donde **no trabajan** ninguno de los empleados que hayan sido los representantes de ventas de algún cliente que haya realizado la compra de algún producto de la gama `Frutales`.
3. 11. Devuelve un listado con los clientes que han realizado algún pedido pero no han realizado ningún pago.
3. 12. Devuelve un listado con los datos de los empleados que no tienen clientes asociados y el nombre de su jefe asociado.